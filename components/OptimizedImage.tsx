'use client';

import Image, { ImageProps } from 'next/image';
import { useState, useEffect } from 'react';

interface OptimizedImageProps extends Omit<ImageProps, 'quality' | 'loading' | 'sizes'> {
  priority?: boolean;
}

const generateBlurHash = () => {
  return 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkLzYyLy8yMi8vLzI3Pj0zNzJFRU9QUFFnWlNaZWZmZGVwcHBn/2wBDARUXFyAeIB4gHBwgJCQkMGswZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2f/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=';
};

export function OptimizedImage({ 
  src, 
  alt, 
  className, 
  priority = false,
  width,
  height,
  ...props 
}: OptimizedImageProps) {
  const [supportsAvif, setSupportsAvif] = useState(false);
  const [supportsWebp, setSupportsWebp] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Detectar suporte a AVIF
    const avifImage = new Image();
    avifImage.src = 'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=';
    avifImage.onload = () => setSupportsAvif(true);

    // Detectar suporte a WebP
    const webpImage = new Image();
    webpImage.src = 'data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==';
    webpImage.onload = () => setSupportsWebp(true);
  }, []);

  // Calcular dimensões baseadas no container se width/height não fornecidos
  const dimensions = width && height ? { width, height } : { fill: true };
  
  // Gerar sizes apropriado baseado nas dimensões
  const sizes = dimensions.fill 
    ? '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
    : undefined;

  // Determinar o formato de imagem ideal
  const imageFormat = supportsAvif ? 'image/avif' : supportsWebp ? 'image/webp' : 'image/jpeg';
  const quality = imageFormat === 'image/avif' ? 80 : 85;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        className={`
          duration-700 ease-in-out
          ${isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'}
        `}
        quality={quality}
        loading={priority ? 'eager' : 'lazy'}
        sizes={sizes}
        placeholder="blur"
        blurDataURL={generateBlurHash()}
        onLoadingComplete={() => setIsLoading(false)}
        {...dimensions}
        {...props}
      />
    </div>
  );
}
