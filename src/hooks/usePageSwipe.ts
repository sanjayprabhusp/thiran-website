import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function usePageSwipe() {
  const location = useLocation();
  const navigate = useNavigate();
  const isNavigating = useRef(false);

  useEffect(() => {
    let touchStartY = 0;
    let touchEndY = 0;
    let touchStartX = 0;
    let touchEndX = 0;

    const routes = ["/", "/service", "/product", "/about", "/contact"];
    const currentIndex = routes.indexOf(location.pathname);

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
      touchStartX = e.touches[0].clientX;
    };

    const handleTouchMove = (e: TouchEvent) => {
      touchEndY = e.touches[0].clientY;
      touchEndX = e.touches[0].clientX;
    };

    const triggerNavigation = (newIndex: number) => {
      if (isNavigating.current) return;
      isNavigating.current = true;
      navigate(routes[newIndex]);
      window.scrollTo(0, 0);
      setTimeout(() => {
        isNavigating.current = false;
      }, 1000); // Debounce duration to let animations complete
    };

    const handleTouchEnd = () => {
      if (!touchStartY || !touchEndY) return;

      const deltaY = touchStartY - touchEndY;
      const deltaX = touchStartX - touchEndX;

      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      const isAtBottom = scrollHeight - (scrollY + clientHeight) <= 60;
      const isAtTop = scrollY <= 60;

      // Vertical Swipe (Bottom only)
      if (Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) > 50) {
        if (deltaY > 0 && isAtBottom && currentIndex < routes.length - 1) {
          triggerNavigation(currentIndex + 1);
        }
      } 
      // Horizontal Swipe (Disabled as requested to only allow bottom swipe)
      // else if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
      //   if (deltaX > 0 && currentIndex < routes.length - 1) {
      //     triggerNavigation(currentIndex + 1);
      //   } else if (deltaX < 0 && currentIndex > 0) {
      //     triggerNavigation(currentIndex - 1);
      //   }
      // }

      touchStartY = 0;
      touchEndY = 0;
      touchStartX = 0;
      touchEndX = 0;
    };

    const handleWheel = (e: WheelEvent) => {
      if (isNavigating.current) return;
      
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      const isAtBottom = scrollHeight - (scrollY + clientHeight) <= 20;
      const isAtTop = scrollY <= 20;

      if (e.deltaY > 20 && isAtBottom && currentIndex < routes.length - 1) {
        triggerNavigation(currentIndex + 1);
      }
    };

    // Use passive: false where possible for future-proofing, though not strictly needed here
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    window.addEventListener('wheel', handleWheel, { passive: true });

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('wheel', handleWheel);
    };
  }, [location.pathname, navigate]);
}
