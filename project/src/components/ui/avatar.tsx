import React from 'react';

interface AvatarProps {
  className?: string;
  children: React.ReactNode;
}

interface AvatarImageProps {
  src?: string;
  alt?: string;
}

interface AvatarFallbackProps {
  children: React.ReactNode;
}

export function Avatar({ className = "", children }: AvatarProps) {
  return (
    <div className={`relative inline-block rounded-full overflow-hidden ${className}`}>
      {children}
    </div>
  );
}

export function AvatarImage({ src, alt = "" }: AvatarImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className="h-full w-full object-cover"
    />
  );
}

export function AvatarFallback({ children }: AvatarFallbackProps) {
  return (
    <div className="h-full w-full flex items-center justify-center bg-gray-600 text-white font-medium">
      {children}
    </div>
  );
}