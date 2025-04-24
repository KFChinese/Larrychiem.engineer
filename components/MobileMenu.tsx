import cn from 'classnames';
import Link from 'next/link';
// import useDelayedRender from 'use-delayed-render'; // REMOVE THIS
import { useState, useEffect } from 'react';
import styles from 'styles/mobile-menu.module.css'; // Make sure this CSS handles transitions

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // We might still need a 'mounted' state if the initial render differs
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true); // Component has mounted client-side
    // Cleanup function for body overflow
    return () => {
      document.body.style.overflow = '';
    };
  }, []); // Empty dependency array means this runs once on mount, cleanup on unmount

  function toggleMenu() {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    } else {
      setIsMenuOpen(true);
      document.body.style.overflow = 'hidden';
    }
  }

  // Important: Only attempt to access document client-side
  // We'll handle the body overflow purely in toggleMenu and cleanup useEffect

  return (
    <>
      <button
        className={cn(styles.burger, 'visible md:hidden')}
        aria-label="Toggle menu"
        type="button"
        onClick={toggleMenu}
      >
        <MenuIcon data-hide={isMenuOpen} />
        <CrossIcon data-hide={!isMenuOpen} />
      </button>

      {/* Conditionally render based on isMenuOpen, apply transition classes */}
      {/* You'll need to adjust styles.menu and add styles.menuOpen (or similar) */}
      {/* in mobile-menu.module.css to handle the actual transition */}
      <ul
        className={cn(
          styles.menu, // Base styles
          'flex flex-col absolute bg-gray-100 dark:bg-gray-900', // Tailwind classes
          isMenuOpen ? styles.menuOpen : styles.menuClosed // State-based classes for transition
        )}
      >
        {/* Your Link items */}
         <li className="border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold">
            <Link href="/" className="flex w-auto pb-4" onClick={() => setIsMenuOpen(false)}> Home </Link>
         </li>
         {/* Add onClick={() => setIsMenuOpen(false)} to other links too */}
         {/* ... other list items ... */}
      </ul>
    </>
  );
}

// MenuIcon and CrossIcon functions remain the same...
function MenuIcon(props: JSX.IntrinsicElements['svg']) { /* ... */ }
function CrossIcon(props: JSX.IntrinsicElements['svg']) { /* ... */ }