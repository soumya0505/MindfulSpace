
import React from 'react';
import ResourceCard from './ResourceCard';
import { Brain, Headphones, Book, Lightbulb } from 'lucide-react';

const ResourceSection: React.FC = () => {
  return (
    <section id="resources" className="py-16">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">Mental Health Resources</h2>
          <p className="text-muted-foreground">
            Explore our collection of resources to better understand mental health and develop helpful coping strategies.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ResourceCard 
            icon={<Brain className="h-6 w-6" />}
            title="Understanding Anxiety"
            description="Learn about the different types of anxiety and evidence-based strategies to manage symptoms."
            linkText="Read our guide"
          />
          
          <ResourceCard 
            icon={<Headphones className="h-6 w-6" />}
            title="Guided Meditations"
            description="Access a library of guided meditations designed to reduce stress and improve mindfulness."
            linkText="Start listening"
          />
          
          <ResourceCard 
            icon={<Lightbulb className="h-6 w-6" />}
            title="Stress Management"
            description="Discover practical techniques to identify stressors and develop healthy coping mechanisms."
            linkText="Explore techniques"
          />
          
          <ResourceCard 
            icon={<Book className="h-6 w-6" />}
            title="Self-Care Practices"
            description="Build a personalized self-care routine with activities that promote mental wellbeing."
            linkText="Create your plan"
          />
        </div>
      </div>
    </section>
  );
};

export default ResourceSection;
