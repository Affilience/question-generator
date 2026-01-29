'use client';

import Image, { type ImageProps } from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps extends Omit<ImageProps, 'onLoad' | 'onError'> {
  fallbackSrc?: string;
  showPlaceholder?: boolean;
  placeholderClassName?: string;
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  fallbackSrc,
  showPlaceholder = true,
  placeholderClassName = 'bg-gray-200 animate-pulse',
  className = '',
  style,
  priority = false,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
      setHasError(false);
      setIsLoading(true);
    }
  };

  const containerStyle = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
    ...style,
  };

  return (
    <div 
      className={`relative overflow-hidden ${className}`} 
      style={{
        ...containerStyle,
        contain: 'layout style paint', // Optimize for layout performance
      }}
    >
      {/* Placeholder to prevent CLS */}
      {showPlaceholder && isLoading && (
        <div 
          className={`absolute inset-0 ${placeholderClassName}`}
          style={{ contain: 'layout style paint' }}
        />
      )}
      
      {!hasError ? (
        <Image
          src={currentSrc}
          alt={alt}
          width={width}
          height={height}
          onLoad={handleLoad}
          onError={handleError}
          className={`transition-opacity duration-200 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
          }}
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          {...props}
        />
      ) : (
        <div 
          className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400"
          style={{ contain: 'layout style paint' }}
        >
          <span className="text-sm">Failed to load image</span>
        </div>
      )}
    </div>
  );
}