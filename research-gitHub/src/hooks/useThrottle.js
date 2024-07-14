export const useThrottle = (func, waitTime) => {
  let timeout = null;
  let previous = 0;

  const later = (args) => {
    previous = Date.now();
    timeout = null;
    func(args);
  };

  return (args) => {
    const now = Date.now();
    const remaining = waitTime - (now - previous);

    if (remaining <= 0 || remaining > waitTime) {
      if (timeout) {
        clearTimeout(timeout);
      }
      later(args);
    } else if (!timeout) {
      timeout = setTimeout(() => later(args), remaining);
    }
  };
};
