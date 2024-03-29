import { useEffect, useState, useMemo } from 'react';
import ThemeContext from '@/context/themeContext';

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const themeFromStorage: boolean | null =
    typeof localStorage !== 'undefined' ? JSON.parse(localStorage.getItem('hotel-theme')!) : null;
  const [darkTheme, setDarkTheme] = useState<boolean>(themeFromStorage || false);
  const [renderComponent, setRenderComponent] = useState(false);

  useEffect(() => {
    setRenderComponent(true);
  }, []);

  const contextValue = useMemo(() => {
    return { darkTheme, setDarkTheme };
  }, [darkTheme, setDarkTheme]); // useMemo should be called unconditionally

  if (!renderComponent) return <></>;

  return (
    <ThemeContext.Provider value={contextValue}>
      <div className={`${darkTheme ? 'dark' : ''} min-h-screen`}>
        <div className='dark:text-white dark:bg-black text-[#1E1E1E]'>
          {children}
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

