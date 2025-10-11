import { Mic } from "lucide-react";
import { useState } from "react";

export const VoiceButton = () => {
  const [isListening, setIsListening] = useState(false);

  const handleClick = () => {
    setIsListening(!isListening);
  };

  return (
    <div className="relative flex items-center justify-center">
      {isListening && (
        <>
          <div className="absolute inset-0 rounded-full bg-primary/20 animate-pulse-glow" />
          <div className="absolute inset-0 rounded-full bg-primary/10 animate-pulse-glow delay-75" style={{ animationDelay: '0.15s' }} />
        </>
      )}
      
      <button
        onClick={handleClick}
        className="relative z-10 group w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_40px_hsl(263_70%_60%/0.6)]"
      >
        <Mic 
          className={`w-10 h-10 text-primary-foreground transition-transform duration-300 ${
            isListening ? 'scale-110' : 'group-hover:scale-110'
          }`}
        />
      </button>

      {isListening && (
        <div className="absolute -bottom-20 flex gap-1 items-end">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-1 bg-primary rounded-full animate-wave"
              style={{
                height: '20px',
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};
