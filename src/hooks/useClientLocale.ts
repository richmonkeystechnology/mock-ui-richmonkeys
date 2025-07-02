'use client';

import { useState, useEffect } from 'react';

export function useClientLocale() {
  const [locale, setLocale] = useState('en');

  useEffect(() => {
    // Get saved locale from localStorage or default to 'en'
    const savedLocale = localStorage.getItem('preferred-locale') || 'en';
    setLocale(savedLocale);
  }, []);

  const changeLocale = (newLocale: string) => {
    setLocale(newLocale);
    localStorage.setItem('preferred-locale', newLocale);
  };

  return { locale, changeLocale };
}