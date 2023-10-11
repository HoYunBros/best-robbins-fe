'use client';
import { createContext, useContext, useState } from 'react';

export const ThemeContext = createContext({});
export const ToggleThemeContext = createContext(() => {
  console.error('Forgot to wrap component in `ThemeProvider`');
});
export const useTheme = () => {
  return useContext(ThemeContext);
};
export const useToggleTheme = () => {
  return useContext(ToggleThemeContext);
};

type Props = {
  children: React.ReactNode;
};

export default function ThemeProvider({ children }: Props) {
  // NOTE: 현재 유저 브라우저 설정 테마를 가져온다.
  const initialTheme = 'light';

  const [theme, setTheme] = useState(initialTheme);
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={theme}>
      <ToggleThemeContext.Provider value={toggleTheme}>
        <div className={theme}>{children}</div>
      </ToggleThemeContext.Provider>
    </ThemeContext.Provider>
  );
}
