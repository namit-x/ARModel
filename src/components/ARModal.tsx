import { useEffect } from "react";
import { Button } from "./ui/button";
import { X } from "lucide-react";

interface ARModalProps {
  modelFile: string;
  onClose: () => void;
}

export function ARModal({ modelFile, onClose }: ARModalProps) {
  useEffect(() => {
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg p-4 max-w-lg w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="absolute top-2 right-2 h-8 w-8 p-0 text-black hover:bg-gray-100"
        >
          <X className="h-4 w-4" />
        </Button>
        
        <div className="w-full h-[400px] rounded bg-gray-100 flex items-center justify-center">
          <div className="text-center text-gray-600">
            <div className="text-4xl mb-4">🍽️</div>
            <p className="text-lg font-semibold mb-2">AR View</p>
            <p className="text-sm">3D model preview would appear here</p>
            <p className="text-xs mt-2 text-gray-400">Model: {modelFile}</p>
          </div>
        </div>
        
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            In a real implementation, this would show a 3D model using AR capabilities.
          </p>
        </div>
      </div>
    </div>
  );
}