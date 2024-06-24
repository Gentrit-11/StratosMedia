import { useEffect, useState } from "react";

const useIntersectionObserver = (options) => {
  const [observerEntry, setObserverEntry] = useState(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observerCallback = (entries) => {
    const entry = entries[0];
    console.log(`Element is intersecting: ${entry.isIntersecting}`); // Debugging
    setObserverEntry(entry);
    setIsIntersecting(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, options);
    if (observerEntry?.target) {
      observer.observe(observerEntry.target);
    }
    return () => {
      if (observerEntry?.target) {
        observer.unobserve(observerEntry.target);
      }
    };
  }, [observerEntry?.target, options]);

  return [setObserverEntry, isIntersecting];
};

export default useIntersectionObserver;
