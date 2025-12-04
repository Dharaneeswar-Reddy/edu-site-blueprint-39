import { useState, useEffect } from "react";
import useDepartmentImages from "@/hooks/useDepartmentImages";

interface DepartmentHeroProps {
  department: string;
  fallbackImages?: string[];
}

const DepartmentHero = ({ department, fallbackImages = [] }: DepartmentHeroProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { images: heroImages, loading } = useDepartmentImages(department, 'hero');

  // Use database images if available, otherwise fallback
  const displayImages = heroImages.length > 0 
    ? heroImages.map(img => img.image_url) 
    : fallbackImages;

  useEffect(() => {
    if (displayImages.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => 
        prevIndex === displayImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    
    return () => clearInterval(interval);
  }, [displayImages.length]);

  if (loading) {
    return (
      <div className="relative h-96 md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-xl bg-muted animate-pulse">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      </div>
    );
  }

  if (displayImages.length === 0) {
    return (
      <div className="relative h-96 md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-xl bg-muted flex items-center justify-center">
        <p className="text-muted-foreground">No images available</p>
      </div>
    );
  }

  return (
    <div className="relative h-96 md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-xl">
      {displayImages.map((image, index) => (
        <img 
          key={index} 
          src={image} 
          alt={`${department} Department ${index + 1}`} 
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`} 
        />
      ))}
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center" />
    </div>
  );
};

export default DepartmentHero;
