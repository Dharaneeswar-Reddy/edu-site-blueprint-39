const HistoricalGallery = () => {
  const historicalImages = [
    {
      src: "/lovable-uploads/003761c8-21ea-431f-b686-daaa89289a77.png",
      alt: "Foundation stone laid by President Sri V.V. Giri",
      caption: "Foundation stone laid by President of India, Sri V.V. Giri"
    },
    {
      src: "/lovable-uploads/7a24c2ce-e1fa-4e29-9298-994587287b76.png",
      alt: "A Rich Tradition of Discipline and Learning",
      caption: "AP History Congress - A Rich Tradition of Discipline and Learning"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-12">Our Heritage</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {historicalImages.map((image, index) => (
            <div 
              key={index}
              className="rounded-lg overflow-hidden shadow-lg bg-white p-4 hover:shadow-xl transition-shadow"
            >
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-[400px] object-cover rounded-lg mb-4"
              />
              <p className="text-center text-gray-600 text-sm font-medium">{image.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HistoricalGallery;