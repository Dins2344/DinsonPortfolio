// Only transform + opacity are animated here, so the whole thing stays on the compositor.
export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
      opacity: 0,
      transition: {
        type: 'tween',
        duration: 0.4,
        ease: 'easeIn',
      },
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 0.8,
        delay: delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
};
