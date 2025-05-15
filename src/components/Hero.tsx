
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-600 mb-4">
              Mental Health Awareness
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Your Journey To Better <span className="text-purple-500">Mental Wellbeing</span> Starts Here
            </h1>
            <p className="text-muted-foreground md:text-xl">
              Discover tools, resources, and community support to help you navigate
              your mental health journey with confidence and compassion.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button className="gradient-bg border-0 gap-2">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/30 via-transparent to-blue-400/30 z-10"></div>
            <img
              alt="Mental health support illustration"
              className="mx-auto aspect-video w-full rounded-xl object-cover"
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
