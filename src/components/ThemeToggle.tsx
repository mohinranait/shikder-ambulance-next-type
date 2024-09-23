'use client';
import { Button } from '@nextui-org/button';
import { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState<string>('light');

  useEffect(() => {
    document.documentElement.classList.remove('dark', 'blue','light','orange');
    document.documentElement.classList.add(theme);
  }, [theme]);

  const toggleTheme = (value:string) => {
   
      setTheme(value);
    
  };

  return (
   <div>
    <p>Switch to  Theme</p>
     <Button  onClick={() => toggleTheme('light')}>
      Light
    </Button>
     <Button onClick={() => toggleTheme('dark')}>
      dark
    </Button>
     <Button  onClick={() => toggleTheme('blue')}>
      Vlue
    </Button>
     <Button  onClick={() => toggleTheme('orange')}>
      Orange
    </Button>
   </div>
  );
};

export default ThemeToggle;
