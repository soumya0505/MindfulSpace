
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface ResourceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link?: string;
  linkText?: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({
  icon,
  title,
  description,
  link = "#",
  linkText = "Learn more"
}) => {
  return (
    <Card className="card-hover">
      <CardHeader className="pb-2">
        <div className="mb-2 w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-500">
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="text-sm">{description}</CardDescription>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">
        <p>Discover strategies, techniques, and professional advice to help you navigate this topic.</p>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" className="p-0 h-auto text-purple-500 hover:text-purple-600 hover:bg-transparent">
          <a href={link} className="flex items-center gap-1">
            {linkText} <ArrowRight className="h-4 w-4 ml-1" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ResourceCard;
