'use client';

import { useEffect, useState } from 'react';
import { getAllProfessionals } from '@/lib/actions/professional.actions';
import Link from 'next/link';
import Image from 'next/image';
import { DeleteConfirmation } from '@/components/shared/DeleteConfirmationProfesional';

interface Professional {
  _id: string;
  name: string;
  description: string;
  imageUrl: string;
  linkedinUrl?: string;
}

const ProfessionalsPage = () => {
  const [professionals, setProfessionals] = useState<Professional[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProfessionals() {
      try {
        const response = await getAllProfessionals({
          query: '',
          limit: 10,
          page: 1,
        });
        setProfessionals(response?.data || []);
      } catch (error) {
        console.error('Error al obtener profesionales:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchProfessionals();
  }, []);

  // Función para manejar la eliminación local
  const handleDelete = (id: string) => {
    setProfessionals((prev) => prev.filter((professional) => professional._id !== id));
  };

  return (
    <>
      <section className="bg-primary-50 py-5 md:py-10">
        <h3 className="wrapper text-center sm:text-left">Lista de Profesionales</h3>
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
          <p>Cargando...</p>
        ) : professionals.length === 0 ? (
          <p>No hay profesionales disponibles.</p>
        ) : (
          professionals.map((professional) => (
            <div
              key={professional._id}
              className="relative card p-4 border border-gray-300 rounded-lg shadow-md transition transform hover:scale-105 hover:shadow-xl"
            >
              <img
                src={professional.imageUrl}
                alt={professional.name}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h4 className="text-xl font-semibold">{professional.name}</h4>
              <p className="text-sm text-gray-600">{professional.description}</p>
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

              <div className="absolute right-2 top-2 flex flex-col gap-4 rounded-xl bg-white p-3 shadow-sm transition-all">
                <Link href={`/profesionales/${professional._id}`}>
                  <Image src="/assets/icons/edit.svg" alt="edit" width={20} height={20} />
                </Link>
                <DeleteConfirmation professionalId={professional._id} onDelete={handleDelete} />
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default ProfessionalsPage;
