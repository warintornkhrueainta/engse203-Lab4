// src/hooks/useLocalStorage.js
import { useState, useEffect } from 'react';

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue !== null ? JSON.parse(storedValue) : initialValue;
  });

  useEffect(() => {
    if (value !== undefined) {
      // ถ้า value มีค่า ให้เก็บลง localStorage
      localStorage.setItem(key, JSON.stringify(value));
    } else {
      // ถ้า value เป็น undefined ให้ลบ key นั้นออก
      localStorage.removeItem(key);
    }
  }, [key, value]);

  return [value, setValue];
}
