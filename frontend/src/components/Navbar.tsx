"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='fixed top-0 w-full z-50 bg-background border-b border-border'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <Link href='/' className='flex items-center space-x-3'>
            <Image
              src='/BadgerBlockchainLogo.png'
              alt='Badger Blockchain'
              width={40}
              height={40}
              className='rounded-lg'
            />
            <span className='text-xl font-bold text-foreground'>
              Badger Hackathon
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex space-x-4'>
            <Button asChild>
              <Link href='/application'>Apply Now</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <Button
              variant='ghost'
              size='icon'
              onClick={toggleMenu}
              aria-label='Toggle menu'
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className='md:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border'>
              <Button className='w-full' asChild>
                <Link href='/application' onClick={() => setIsMenuOpen(false)}>
                  Apply Now
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
