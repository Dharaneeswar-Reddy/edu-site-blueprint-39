const CampusGallery = () => {
  const campusImages = [
    {
      src: "/lovable-uploads/3b749989-4a40-4db5-8bb5-8e893980712d.png",
      alt: "Student Sports Team"
    },
    {
      src: "/lovable-uploads/2b090eee-6ea2-4351-b54e-7fe585598287.png",
      alt: "NCC Activities"
    },
    {
      src: "/lovable-uploads/0a90514e-cf6b-4174-8901-95a8e4b80570.png",
      alt: "Kargil Vijay Diwas Celebration"
    },
    {
      src: "/lovable-uploads/f59ed751-6fef-466d-be7b-e4e783a26a72.png",
      alt: "College Campus Building"
    },
    {
      src: "/lovable-uploads/7957b3d5-9719-4d4a-88cc-0c8c1687f05a.png",
      alt: "Main College Building"
    },
    {
      src: "/lovable-uploads/745eb78f-cad2-4f2e-bb77-acb0acd7f1c5.png",
      alt: "Campus Gardens and Greenery"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-12">Campus Life</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {campusImages.map((image, index) => (
            <div 
              key={index}
              className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105 duration-300"
            >
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-[250px] object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampusGallery;