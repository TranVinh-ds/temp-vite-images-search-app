import React from 'react';
import { useGlobalContext } from './context';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';

const ThemeToggle = () => {
  const { isDarkTheme, themeToggler } = useGlobalContext();
  return (
    <section className="toggle-container">
      <button type="button" className="dark-toggle" onClick={themeToggler}>
        {isDarkTheme ? (
          <BsFillSunFill className="toggle-icon" />
        ) : (
          <BsFillMoonFill className="toggle-icon" />
        )}
      </button>
    </section>
  );
};

export default ThemeToggle;
