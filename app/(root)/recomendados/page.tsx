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
  },
  {
    title: "El proceso de Fabricacion de panela",
    description:
      "Proceso de fabricación de panela | caña - Colombia, convención N.S",
    image: "assets/images/video4.png",
    youtubeLink: "https://www.youtube.com/watch?v=jlvvQwEwEGQ"
  },
  {
    title: "Convención, la tierra de la panela",
    description:
      "Documental sobre el municipio de Convención, Norte de Santander. Un lugar acogedor, con habitantes amables y guerreros, reconocido por ser el mayor productor de panela del departamento.",
    image: "assets/images/video5.png",
    youtubeLink: "https://www.youtube.com/watch?v=mBOt-oqoD1Y"
  },
  {
    title: "Trapiche Panelero es: Tradición familiar panelera - TvAgro por Juan Gonzalo Angel Restrepo",
    description:
      "La familia Torres Díaz, ubicados en la vereda Los Apartaderos del municipio de La Sierra, departamento del Cauca nos enseñan su manera de hacer panela pulverizada para la exportación.  ",
    image: "assets/images/video6.png",
    youtubeLink: "https://www.youtube.com/watch?v=kJ6i8gYZYQY"
  },
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

      {/* Google Map Section */}
      <section className="my-8">
        <h3 className="text-center text-xl font-semibold mb-4">Ubicación de asociacion panelera de convencion</h3>
        <div className="flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d829.6079493900953!2d-73.33910091931075!3d8.469917013644055!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e676762638578b7%3A0x58c8521cb258a7c6!2sCooincapro!5e0!3m2!1ses!2sco!4v1732145997503!5m2!1ses!2sco"
            width="600"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default VideosPage;
