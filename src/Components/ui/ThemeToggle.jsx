import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../../contexts/ThemeContext';

const ThemeToggle = ({ className = '' }) => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`relative inline-flex items-center justify-center w-12 h-6 bg-gray-200 dark:bg-gray-700 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 ${className}`}
      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
    >
      {/* Toggle Switch */}
      <span
        className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-md transform transition-all duration-300 ease-in-out ${
          isDarkMode ? 'translate-x-6' : 'translate-x-0'
        }`}
      />
      
      {/* Sun Icon */}
      <FaSun
        className={`absolute left-1.5 w-3 h-3 text-yellow-500 transition-opacity duration-300 ${
          isDarkMode ? 'opacity-0' : 'opacity-100'
        }`}
      />
      
      {/* Moon Icon */}
      <FaMoon
        className={`absolute right-1.5 w-3 h-3 text-blue-400 transition-opacity duration-300 ${
          isDarkMode ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </button>
  );
};

export default ThemeToggle; 