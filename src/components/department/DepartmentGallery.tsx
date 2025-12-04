import useDepartmentImages from "@/hooks/useDepartmentImages";

interface DepartmentGalleryProps {
  department: string;
  fallbackImages?: string[];
}

const DepartmentGallery = ({ department, fallbackImages = [] }: DepartmentGalleryProps) => {
  const { images: galleryImages, loading } = useDepartmentImages(department, 'gallery');

  // Use database images if available, otherwise fallback
  const displayImages = galleryImages.length > 0 
    ? galleryImages.map(img => ({ url: img.image_url, title: img.title })) 
    : fallbackImages.map((url, index) => ({ url, title: `Photo ${index + 1}` }));

  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="aspect-square bg-muted animate-pulse rounded-lg" />
        ))}
      </div>
    );
  }

  if (displayImages.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">No gallery images available</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {displayImages.map((image, index) => (
        <div 
          key={index} 
          className="aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer group"
        >
          <img 
            src={image.url} 
            alt={image.title || `Gallery photo ${index + 1}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      ))}
    </div>
  );
};

export default DepartmentGallery;
