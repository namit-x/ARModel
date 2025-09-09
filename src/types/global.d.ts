// src/global.d.ts
declare namespace JSX {
  interface IntrinsicElements {
    'model-viewer': {
      src?: string;
      alt?: string;
      poster?: string;
      ar?: boolean;
      'ar-modes'?: string;
      'ar-scale'?: string;
      environmentImage?: string;
      cameraControls?: boolean; // corresponds to camera-controls
      autoRotate?: boolean;      // corresponds to auto-rotate
      loading?: 'eager' | 'lazy';
      reveal?: 'auto' | 'manual';
      style?: React.CSSProperties;
      className?: string;
      ref?: React.Ref<any>;
      [key: string]: any; // fallback for any other props
    };
  }
}
