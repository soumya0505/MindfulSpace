
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

type Mood = 'great' | 'good' | 'okay' | 'down' | 'struggling';

const moods: { type: Mood, emoji: string, label: string }[] = [
  { type: 'great', emoji: '😄', label: 'Great' },
  { type: 'good', emoji: '🙂', label: 'Good' },
  { type: 'okay', emoji: '😐', label: 'Okay' },
  { type: 'down', emoji: '😔', label: 'Down' },
  { type: 'struggling', emoji: '😞', label: 'Struggling' },
];

const DailyCheckIn: React.FC = () => {
  const [selectedMood, setSelectedMood] = useState<Mood | null>(null);
  const { toast } = useToast();

  const handleSubmit = () => {
    if (!selectedMood) return;
    
    toast({
      title: "Check-in recorded",
      description: `You're feeling ${selectedMood} today. Thank you for sharing.`,
      variant: "default",
    });
  };

  return (
    <section id="check-in" className="py-16 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">Daily Check-In</h2>
          <p className="text-muted-foreground">
            How are you feeling today? Regular check-ins help you track your mental wellbeing over time.
          </p>
        </div>
        
        <Card className="mx-auto max-w-md">
          <CardHeader>
            <CardTitle>Track Your Mood</CardTitle>
            <CardDescription>Select the option that best describes how you're feeling right now</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-5 gap-2">
              {moods.map((mood) => (
                <div 
                  key={mood.type}
                  onClick={() => setSelectedMood(mood.type)}
                  className={`flex flex-col items-center justify-center p-3 rounded-lg cursor-pointer transition-all
                    ${selectedMood === mood.type 
                      ? 'bg-purple-100 border-2 border-purple-400' 
                      : 'bg-muted hover:bg-muted/80 border-2 border-transparent'
                    }
                  `}
                >
                  <span className="text-3xl mb-1">{mood.emoji}</span>
                  <span className="text-xs font-medium">{mood.label}</span>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button 
              onClick={handleSubmit} 
              disabled={!selectedMood}
              className="w-full gradient-bg border-0"
            >
              Save Today's Check-in
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default DailyCheckIn;
