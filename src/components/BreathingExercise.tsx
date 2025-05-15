
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlayCircle, PauseCircle, RefreshCw } from 'lucide-react';

const BreathingExercise: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState<'inhale' | 'hold' | 'exhale' | 'rest'>('inhale');
  const [seconds, setSeconds] = useState(0);

  const totalCycleDuration = 16; // 4s inhale + 4s hold + 6s exhale + 2s rest
  
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => {
          const newSeconds = (prevSeconds + 1) % totalCycleDuration;
          
          // Update phase based on current second in the cycle
          if (newSeconds === 0) setPhase('inhale');
          else if (newSeconds === 4) setPhase('hold');
          else if (newSeconds === 8) setPhase('exhale');
          else if (newSeconds === 14) setPhase('rest');
          
          return newSeconds;
        });
      }, 1000);
    } else if (interval) {
      clearInterval(interval);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive]);

  const resetExercise = () => {
    setIsActive(false);
    setSeconds(0);
    setPhase('inhale');
  };

  const getInstructions = () => {
    switch (phase) {
      case 'inhale': return 'Breathe in slowly...';
      case 'hold': return 'Hold your breath...';
      case 'exhale': return 'Breathe out slowly...';
      case 'rest': return 'Reset and prepare...';
      default: return '';
    }
  };
  
  const getCircleAnimation = () => {
    switch (phase) {
      case 'inhale': return 'animate-breathe-in';
      case 'hold': return 'scale-[1.2]';
      case 'exhale': return 'animate-breathe-out';
      case 'rest': return 'scale-[1]';
      default: return '';
    }
  };

  return (
    <section id="exercises" className="py-16">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">Mindfulness Exercise</h2>
          <p className="text-muted-foreground">
            Take a moment to calm your mind and regulate your breathing with this simple exercise.
          </p>
        </div>
        
        <Card className="mx-auto max-w-md">
          <CardHeader>
            <CardTitle>4-4-6-2 Breathing Technique</CardTitle>
            <CardDescription>
              This breathing pattern helps reduce anxiety and can improve focus
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center space-y-6">
            <div className="relative flex items-center justify-center">
              <div 
                className={`w-40 h-40 rounded-full bg-gradient-to-br from-purple-300 to-blue-300 transition-transform duration-[4000ms] ease-in-out ${getCircleAnimation()}`}
              />
              <p className="absolute text-lg font-medium">{getInstructions()}</p>
            </div>
            
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={resetExercise}
                className="rounded-full"
              >
                <RefreshCw className="h-5 w-5" />
              </Button>
              
              <Button
                onClick={() => setIsActive(!isActive)}
                className="gradient-bg border-0 px-8"
              >
                {isActive ? (
                  <>
                    <PauseCircle className="mr-2 h-5 w-5" />
                    Pause
                  </>
                ) : (
                  <>
                    <PlayCircle className="mr-2 h-5 w-5" />
                    Start
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BreathingExercise;
