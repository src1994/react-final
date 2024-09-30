import { useState } from 'react';

export const useHoverScale = (scaleAmount = 0.9, transitionDuration = '0.2s') => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const hoverStyle = {
    transform: isHovered ? `scale(${scaleAmount})` : 'scale(1)',
    transition: `transform ${transitionDuration} ease-in-out`,
  };

  return { hoverStyle, handleMouseEnter, handleMouseLeave };
};
