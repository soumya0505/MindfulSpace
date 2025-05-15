
import React, { useState, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Play, Pause, SkipForward, SkipBack, Volume2 } from 'lucide-react';

interface Track {
  id: number;
  title: string;
  artist: string;
  src: string;
}

const tracks: Track[] = [
  {
    id: 1,
    title: "Calm Waters",
    artist: "MindfulSpace",
    src: "https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0cc5190d5.mp3"
  },
  {
    id: 2,
    title: "Forest Ambience",
    artist: "MindfulSpace",
    src: "https://cdn.pixabay.com/download/audio/2022/02/11/audio_cb2fad3e50.mp3"
  },
  {
    id: 3,
    title: "Meditation",
    artist: "MindfulSpace",
    src: "https://cdn.pixabay.com/download/audio/2022/03/09/audio_cb1fdf9627.mp3"
  }
];

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(0);
  const [volume, setVolume] = useState<number>(80);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const currentTrack = tracks[currentTrackIndex];

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const playNextTrack = () => {
    const nextIndex = (currentTrackIndex + 1) % tracks.length;
    setCurrentTrackIndex(nextIndex);
    setIsPlaying(true);
    if (audioRef.current) {
      audioRef.current.load();
      audioRef.current.play();
    }
  };

  const playPrevTrack = () => {
    const prevIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    setCurrentTrackIndex(prevIndex);
    setIsPlaying(true);
    if (audioRef.current) {
      audioRef.current.load();
      audioRef.current.play();
    }
  };

  const handleVolumeChange = (value: number[]) => {
    const newVolume = value[0];
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume / 100;
    }
  };

  return (
    <section id="music-player" className="py-16 bg-gradient-to-b from-background to-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">Calming Sounds</h2>
          <p className="text-muted-foreground">
            Enhance your mood with soothing music designed to promote relaxation and mindfulness.
          </p>
        </div>
        
        <Card className="mx-auto max-w-md">
          <CardHeader>
            <CardTitle>Music Therapy</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-xl font-medium">{currentTrack.title}</h3>
                <p className="text-sm text-muted-foreground">{currentTrack.artist}</p>
              </div>
              
              <audio
                ref={audioRef}
                src={currentTrack.src}
                onEnded={playNextTrack}
              />
              
              <div className="flex items-center justify-center gap-4">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={playPrevTrack}
                >
                  <SkipBack className="h-5 w-5" />
                </Button>
                
                <Button 
                  className="gradient-bg border-0 h-12 w-12 rounded-full"
                  onClick={togglePlay}
                >
                  {isPlaying ? (
                    <Pause className="h-5 w-5" />
                  ) : (
                    <Play className="h-5 w-5 ml-1" />
                  )}
                </Button>
                
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={playNextTrack}
                >
                  <SkipForward className="h-5 w-5" />
                </Button>
              </div>
              
              <div className="flex items-center gap-3">
                <Volume2 className="h-4 w-4 text-muted-foreground" />
                <Slider
                  value={[volume]}
                  min={0}
                  max={100}
                  step={1}
                  onValueChange={handleVolumeChange}
                  className="flex-1"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default MusicPlayer;
