import { useState } from "react";

export const useImageFallback = () => {
  const [hasError, setHasError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const onLoad = () => {
    setLoaded(true);
  };

  const onError = () => {
    setLoaded(true);
    setHasError(true);
  };

  const showFallbackMessage = loaded && hasError;

  return { hasError, loaded, onLoad, onError, showFallbackMessage };
};
