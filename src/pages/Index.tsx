
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import DailyCheckIn from '@/components/DailyCheckIn';
import BreathingExercise from '@/components/BreathingExercise';
import ResourceSection from '@/components/ResourceSection';
import TestimonialCard from '@/components/TestimonialCard';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main>
        <Hero />
        
        <Separator />
        
        <ResourceSection />
        
        <DailyCheckIn />
        
        <BreathingExercise />
        
        <section id="community" className="py-16 bg-gradient-to-b from-background to-secondary/50">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center mb-10">
              <h2 className="text-3xl font-bold mb-3">Community Voices</h2>
              <p className="text-muted-foreground">
                Hear from others who have found support and growth through their mental health journey.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <TestimonialCard 
                quote="The breathing exercises helped me manage my anxiety attacks. I'm grateful for finding such a supportive community."
                author="Jamie R."
                initials="JR"
              />
              
              <TestimonialCard 
                quote="Learning about different mental health conditions gave me the language to express what I was experiencing and seek proper help."
                author="Alex M."
                initials="AM"
              />
              
              <TestimonialCard 
                quote="The daily check-ins created accountability for my self-care routine. It's become an essential part of my day."
                author="Sam T."
                initials="ST"
              />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
