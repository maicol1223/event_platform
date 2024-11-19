import React from 'react';

const videos = [
  {
    title: "Uso y Aplicacion de fertilizantes",
    description:
      "Aprende las mejores prácticas para aplicar fertilizantes en tus cultivos y maximizar su productividad.",
    image: "assets/images/video1.png",
    youtubeLink: "https://youtu.be/AaLQuukpsuw?si=iBbgl64cR4zbV6w-"
  },
  {
    title: "El proceso de producción de panela",
    description:
      "Descubre cómo se produce la panela, desde la caña de azúcar hasta el producto final.",
      image: "assets/images/video2.png",
    youtubeLink: "https://www.youtube.com/watch?v=PLMDwbUYZHk"
  },
  {
    title: "Buenas prácticas agrícolas",
    description:
      "Conoce técnicas para mantener la sostenibilidad en tus cultivos y mejorar la calidad del suelo.",
      image: "assets/images/video3.png",
    youtubeLink: "https://www.youtube.com/watch?v=6tq4Elufwrc"
  }
];

const VideosPage = () => {
  return (
    <>
      {/* Header Section */}
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper text-center">
          <h3 className="h3-bold">Videos Educativos</h3>
          <p className="text-lg mt-2">
            Explora contenido educativo sobre prácticas agrícolas y producción sostenible.
          </p>
        </div>
      </section>

      {/* Videos Section */}
      <section className="wrapper grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
        {videos.map((video, index) => (
          <a
            key={index}
            href={video.youtubeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              src={video.image}
              alt={video.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="h4-bold">{video.title}</h4>
              <p className="text-sm mt-2 text-gray-600">{video.description}</p>
            </div>
          </a>
        ))}
      </section>
    </>
  );
};

export default VideosPage;
