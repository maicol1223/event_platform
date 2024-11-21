"use client";

import { useState } from "react"
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { createProfessional, updateProfessional } from "@/lib/actions/professional.actions";
import { IProfessional } from "@/lib/database/models/professional.model";

// Importa lo necesario para cargar las imágenes
import { useUploadThing } from '@/lib/uploadthing';
import { FileUploader } from "./FileUploader";  // Asumiendo que tienes un componente similar

type ProfessionalFormProps = {
  type: "Create" | "Update";
  professional?: IProfessional;
  professionalId?: string;
};

type FormValues = {
  name: string;
  description: string;
  imageUrl: string;
  linkedinUrl?: string;
};

const ProfessionalForm = ({ type, professional, professionalId }: ProfessionalFormProps) => {
  const router = useRouter();

  // Valores iniciales del formulario
  const initialValues: FormValues = professional || {
    name: "",
    description: "",
    imageUrl: "",
    linkedinUrl: "",
  };

  // Configuración de React Hook Form
  const form = useForm<FormValues>({
    defaultValues: initialValues,
  });

  // Estado para manejar los archivos cargados
  const [files, setFiles] = useState<File[]>([]);
  const { startUpload } = useUploadThing("imageUploader");

  // Manejo de envío del formulario
  async function onSubmit(values: FormValues) {
    try {
      let uploadedImageUrl = values.imageUrl;

      if (files.length > 0) {
        // Cargar la imagen y obtener la URL
        const uploadedImages = await startUpload(files);
        if (uploadedImages) {
          uploadedImageUrl = uploadedImages[0].url;
        }
      }

      const professionalData = { ...values, imageUrl: uploadedImageUrl };

      if (type === "Create") {
        await createProfessional({ professional: professionalData, path: "/professionals" });
        router.push("/profesionales");
      } else if (type === "Update" && professionalId) {
        await updateProfessional({
          professional: { ...professionalData, _id: professionalId },
          path: `/professionals/${professionalId}`,
        });
        router.push("/profesionales");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Nombre" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Descripción" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Campo de carga de imagen */}
        <FormField
          control={form.control}
          name="imageUrl"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                {/* Componente FileUploader para cargar la imagen */}
                <FileUploader
                  onFieldChange={field.onChange}
                  imageUrl={field.value}
                  setFiles={setFiles}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="linkedinUrl"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="URL de LinkedIn (Opcional)" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">{type === "Create" ? "Crear Profesional" : "Actualizar Profesional"}</Button>
      </form>
    </Form>
  );
};

export default ProfessionalForm;
