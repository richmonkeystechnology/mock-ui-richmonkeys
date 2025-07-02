'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import enMessages from '../../messages/en.json';
import zhMessages from '../../messages/zh.json';

type Messages = typeof enMessages;

interface TranslationContextType {
  locale: string;
  setLocale: (locale: string) => void;
  t: (key: string, params?: Record<string, any>) => string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export function useTranslations() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslations must be used within a ClientTranslationProvider');
  }
  return context;
}

interface ClientTranslationProviderProps {
  children: React.ReactNode;
}

export default function ClientTranslationProvider({ children }: ClientTranslationProviderProps) {
  const [locale, setLocaleState] = useState('en');
  const [messages, setMessages] = useState<Messages>(enMessages);

  useEffect(() => {
    // Get saved locale from localStorage or default to 'en'
    const savedLocale = localStorage.getItem('preferred-locale') || 'en';
    setLocaleState(savedLocale);
    setMessages(savedLocale === 'zh' ? zhMessages : enMessages);
  }, []);

  const setLocale = (newLocale: string) => {
    setLocaleState(newLocale);
    setMessages(newLocale === 'zh' ? zhMessages : enMessages);
    localStorage.setItem('preferred-locale', newLocale);
  };

  const t = (key: string, params?: Record<string, any>): string => {
    const keys = key.split('.');
    let value: any = messages;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // Return key if not found
      }
    }
    
    if (typeof value !== 'string') {
      return key;
    }
    
    // Simple parameter replacement
    if (params) {
      return value.replace(/\{(\w+)\}/g, (match, paramKey) => {
        return params[paramKey] || match;
      });
    }
    
    return value;
  };

  return (
    <TranslationContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </TranslationContext.Provider>
  );
}