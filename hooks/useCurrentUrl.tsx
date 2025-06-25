'use client';

import { useState, useEffect } from 'react';

export function useCurrentUrl() {
  const [currentUrl, setCurrentUrl] = useState('https://lpappmobileecosrev.netlify.app');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.origin);
    }
  }, []);

  return currentUrl;
}
