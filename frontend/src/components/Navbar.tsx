import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className='fixed top-0 w-full z-50 bg-white'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <Link href='/' className='flex items-center'>
            <span className='text-xl font-bold text-black'>
              Badger Build Fest
            </span>
          </Link>

          {/* Navigation */}
          <div className='flex items-center space-x-8'>
            <Link
              href='#sponsors'
              className='text-black font-bold hover:text-gray-600 transition-colors'
            >
              SPONSORS
            </Link>
            <Link
              href='#tracks'
              className='text-black font-bold hover:text-gray-600 transition-colors'
            >
              TRACKS
            </Link>
            <Link
              href='#about'
              className='text-black font-bold hover:text-gray-600 transition-colors'
            >
              ABOUT
            </Link>

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
        </div>
        {/* Separator line */}
        <div className='w-full h-px bg-primary'></div>
      </div>
    </nav>
  );
}
