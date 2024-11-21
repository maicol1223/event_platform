import ProfessionalForm from "@/components/shared/ProfessionalForm";
import { getProfessionalById } from "@/lib/actions/professional.actions";

type UpdateProfessionalProps = {
  params: { id: string };
};

const UpdateProfessional = async ({ params: { id } }: UpdateProfessionalProps) => {
  const professional = await getProfessionalById(id);

  if (!professional) {
    return <div className="wrapper my-8">Profesional no encontrado</div>;
  }

  return (
    <>
      <section className="bg-primary-50 py-5 md:py-10">
        <h3 className="wrapper text-center sm:text-left">Actualizar Profesional</h3>
      </section>

      <div className="wrapper my-8">
        <ProfessionalForm type="Update" professional={professional} professionalId={id} />
      </div>
    </>
  );
};

export default UpdateProfessional;
