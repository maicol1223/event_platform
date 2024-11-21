'use client'; // Esto indica que este archivo es un componente del lado del cliente

import { useEffect, useState } from 'react'; // Importa useEffect y useState
import { getAllProfessionals } from "@/lib/actions/professional.actions";
import Link from "next/link"; // Usamos Link de Next.js para navegación
import Image from "next/image";
import { DeleteConfirmation } from "@/components/shared/DeleteConfirmationProfesional"; // Asegúrate de que esta importación es correcta

const ProfessionalsPage = () => {
  const [professionals, setProfessionals] = useState([]);
  const [loading, setLoading] = useState(true); // Agrega un estado de carga

  // Obtener los profesionales al cargar la página
  useEffect(() => {
    async function fetchProfessionals() {
      try {
        const response = await getAllProfessionals({
          query: "",
          limit: 10,
          page: 1,
        });

        // Si la respuesta es válida, actualizamos el estado
        setProfessionals(response?.data || []);
      } catch (error) {
        console.error("Error al obtener profesionales:", error);
      } finally {
        setLoading(false); // Termina el estado de carga
      }
    }

    fetchProfessionals();
  }, []);

  return (
    <>
      <section className="bg-primary-50 py-5 md:py-10">
        <h3 className="wrapper text-center sm:text-left">Lista de Profesionales</h3>
        {/* Botón para crear un profesional */}
        <div className="text-center my-4">
          <Link href="/profesionales/create">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Crear Profesional
            </button>
          </Link>
        </div>
      </section>

      <div className="wrapper my-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {loading ? (
          <p>Cargando...</p> // Muestra un mensaje de carga
        ) : professionals.length === 0 ? (
          <p>No hay profesionales disponibles.</p>
        ) : (
          professionals.map((professional: { _id: string; name: string; description: string; imageUrl: string; linkedinUrl: string }) => (
            <div key={professional._id} className="relative card p-4 border border-gray-300 rounded-lg shadow-md transition transform hover:scale-105 hover:shadow-xl">
              {/* Imagen del profesional */}
              <img
                src={professional.imageUrl}
                alt={professional.name}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h4 className="text-xl font-semibold">{professional.name}</h4>
              <p className="text-sm text-gray-600">{professional.description}</p>
              {/* Enlace de LinkedIn */}
              {professional.linkedinUrl && (
                <a
                  href={professional.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-blue-500 hover:underline"
                >
                  Ver perfil de LinkedIn
                </a>
              )}

              {/* Botones de Editar y Eliminar */}
              <div className="absolute right-2 top-2 flex flex-col gap-4 rounded-xl bg-white p-3 shadow-sm transition-all">
                {/* Botón de Editar */}
                <Link href={`/profesionales/${professional._id}`}>
                  <Image src="/assets/icons/edit.svg" alt="edit" width={20} height={20} />
                </Link>
                {/* Botón de Eliminar con Confirmación */}
                <DeleteConfirmation professionalId={professional._id} />
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default ProfessionalsPage;
