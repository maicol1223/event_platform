import React from 'react';

const professionals = [
  {
    name: "Andrés Felipe Martínez Montoya",
    description:
      "Ingeniero agrónomo especialista en diseño e implementación de sistemas de riego. Con capacidad de ejecución de proyectos agrícolas.",
    image: "assets/images/ing1.jpg",
    linkedin: "https://www.linkedin.com/in/andr%C3%A9s-felipe-mart%C3%ADnez-montoya-663205196/"
  },
  {
    name: "Wilfran Harbey Ramírez Palomeque",
    description: "Profesional con capacidad de adaptarme fácilmente a lasdiferentes actividades que requiera la empresa orientado aldesarrollo y los resultados, con aptitud e idoneidad para asumirretos que se puedan presentar en el ambiente laboral.",
    image: "assets/images/ing2.jpg",
    linkedin: "https://www.linkedin.com/in/wilfran-harbey-ram%C3%ADrez-palomeque-ab2737241/"
  },
  {
    name: "Ivan Felipe Galvis Rojas",
    description:
      "Ingeniero agrónomo, con capacidad de identificar problemáticas rurales, a partir del análisis y raciocinio de los sistemas de producción y su entorno.",
    image: "assets/images/ing3.jpg",
    linkedin: "https://www.linkedin.com/in/felipe-galvis-2021/"
  }
];

const ProfessionalsPage = () => {
  return (
    <>
      {/* Header Section */}
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper text-center">
          <h3 className="h3-bold">Profesionales Destacados</h3>
          <p className="text-lg mt-2">Conoce a los expertos en ingeniería agrónoma.</p>
        </div>
      </section>

      {/* Professionals Section */}
      <section className="wrapper grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
        {professionals.map((professional, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              src={professional.image}
              alt={professional.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="h4-bold">{professional.name}</h4>
              <p className="text-sm mt-2 text-gray-600">{professional.description}</p>
              <a
                href={professional.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-primary-600 hover:text-primary-800 underline"
              >
                Ver perfil de LinkedIn
              </a>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default ProfessionalsPage;
