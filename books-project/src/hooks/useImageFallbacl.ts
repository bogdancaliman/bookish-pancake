import { useState } from "react";

const useImageFallback = (fallbackUrl: string) => {
  const [hasError, setHasError] = useState(false);
  const onError = () => setHasError(true);

  return { hasError, onError };
};
