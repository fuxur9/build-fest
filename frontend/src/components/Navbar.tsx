import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className='fixed top-0 w-full z-50 bg-background border-b border-border'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <Link href='/' className='flex items-center space-x-3'>
            <span className='text-xl font-bold text-foreground'>
              Badger Hackathon
            </span>
          </Link>

          {/* Navigation */}
          <Button asChild>
            <Link href='/application'>Apply Now</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
