"use client";

/**
 * Navbar Component
 *
 * Responsive navigation bar with mobile menu, scroll detection, and smooth animations.
 * Features:
 * - Desktop: Horizontal navigation with logo and links
 * - Mobile: Full-screen slide-in menu with backdrop overlay
 * - Scroll detection: Adds shadow/background change on scroll
 * - Body scroll lock when mobile menu is open
 */

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Navigation links
  const navLinks = [
    { href: "/schedule", label: "SCHEDULE" },
    { href: "/tracks", label: "TRACKS" },
    { href: "/project-showcase", label: "SHOWCASE" },
  ];

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-white"
        }`}
      >
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-16'>
            {/* Logo */}
            <Link
              href='/'
              className='flex items-center z-50'
              onClick={handleLinkClick}
            >
              <span className='text-xl font-bold text-black'>
                Badger Build Fest
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className='hidden md:flex items-center space-x-8'>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className='text-black font-bold hover:text-gray-600 transition-colors'
                >
                  {link.label}
                </Link>
              ))}

              <Button
                asChild
                className='bg-primary text-white hover:bg-primary/90'
              >
                <Link
                  href='https://forms.gle/V41KWM2T9SjHj1cG9'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  REGISTER
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={toggleMobileMenu}
              className='md:hidden z-50 p-2 text-black hover:text-gray-600 transition-colors'
              aria-label='Toggle menu'
            >
              {isMobileMenuOpen ? (
                <X className='w-6 h-6' />
              ) : (
                <Menu className='w-6 h-6' />
              )}
            </button>
          </div>
          {/* Separator line */}
          <div className='w-full h-px bg-primary'></div>
        </div>
      </nav>

      {/* Mobile Menu Backdrop Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMobileMenu}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className='flex flex-col h-full pt-20 px-6'>
          {/* Mobile Navigation Links */}
          <nav className='flex flex-col space-y-6 flex-1'>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className='text-2xl font-bold text-black hover:text-gray-600 transition-colors py-2'
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Register Button - Fixed at Bottom */}
          <div className='pb-8 pt-6 border-t border-gray-200'>
            <Button
              asChild
              className='w-full bg-primary text-white hover:bg-primary/90 text-lg py-6'
            >
              <Link
                href='https://forms.gle/V41KWM2T9SjHj1cG9'
                target='_blank'
                rel='noopener noreferrer'
                onClick={handleLinkClick}
              >
                REGISTER
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
