import { useState, useContext, createContext } from 'react';

// Create the overlay context
const OverlayContext = createContext();

// Hook to use the overlay context
export const useOverlay = () => {
  const context = useContext(OverlayContext);
  if (!context) {
    throw new Error('useOverlay must be used within an OverlayProvider');
  }
  return context;
};

// Provider component
export const OverlayProvider = ({ children }) => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const toggleOverlay = () => {
    setIsOverlayOpen(!isOverlayOpen);
  };

  return (
    <OverlayContext.Provider value={{ isOverlayOpen, toggleOverlay }}>
      {children}
    </OverlayContext.Provider>
  );
}; 