
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

interface TestimonialCardProps {
  quote: string;
  author: string;
  avatar?: string;
  initials: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  avatar,
  initials,
}) => {
  return (
    <Card className="card-hover h-full bg-gradient-to-br from-white to-purple-50 dark:from-card dark:to-card/80">
      <CardContent className="p-6 flex flex-col h-full">
        <blockquote className="text-lg mb-6 flex-grow">
          "{quote}"
        </blockquote>
        <div className="flex items-center gap-3 mt-auto">
          <Avatar>
            <AvatarImage src={avatar} />
            <AvatarFallback className="bg-purple-200 text-purple-700">{initials}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{author}</p>
            <p className="text-sm text-muted-foreground">Community Member</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
