
import React from 'react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 glass">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-semibold">Programax Ventures</div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <Button variant="outline" className="hover-scale">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
