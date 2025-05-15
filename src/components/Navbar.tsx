
import React from 'react';
import { Button } from '@/components/ui/button';
import { Book, Heart, Lightbulb, MessageCircle } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border py-3">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Heart className="h-6 w-6 text-purple-400" />
          <span className="font-bold text-xl">MindfulSpace</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#resources" className="font-medium text-foreground/80 hover:text-foreground transition-colors">
            Resources
          </a>
          <a href="#check-in" className="font-medium text-foreground/80 hover:text-foreground transition-colors">
            Daily Check-in
          </a>
          <a href="#exercises" className="font-medium text-foreground/80 hover:text-foreground transition-colors">
            Exercises
          </a>
          <a href="#community" className="font-medium text-foreground/80 hover:text-foreground transition-colors">
            Community
          </a>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="hidden sm:flex gap-2">
            <MessageCircle className="h-4 w-4" />
            <span>Get Support</span>
          </Button>
          <Button size="sm" className="gradient-bg border-0">Join Now</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
