import { VoiceButton } from "@/components/VoiceButton";
import { FeatureCard } from "@/components/FeatureCard";
import { Brain, Zap, Shield, Globe } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 animate-gradient-shift" style={{ backgroundSize: '200% 200%' }} />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-fade-in-up animate-shimmer" style={{ backgroundSize: '200% auto' }}>
            Voice Agent AI
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            Experience the future of conversation with our intelligent voice assistant
          </p>

          <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <VoiceButton />
          </div>

          <p className="text-sm text-muted-foreground animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            Click the microphone to start talking
          </p>
        </div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                backgroundColor: i % 2 === 0 ? 'hsl(263 70% 60% / 0.3)' : 'hsl(217 91% 60% / 0.3)',
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
        
        {/* Orbiting circles */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          {[...Array(3)].map((_, i) => (
            <div
              key={`orbit-${i}`}
              className="absolute border border-primary/10 rounded-full animate-pulse"
              style={{
                width: `${300 + i * 200}px`,
                height: `${300 + i * 200}px`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: '4s',
              }}
            />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Powered by Intelligence
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Advanced AI technology that understands context, learns from interactions, and delivers natural conversations
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={Brain}
              title="Smart AI"
              description="Advanced natural language processing for human-like conversations"
              delay={0}
            />
            <FeatureCard
              icon={Zap}
              title="Lightning Fast"
              description="Real-time responses with minimal latency for seamless interaction"
              delay={100}
            />
            <FeatureCard
              icon={Shield}
              title="Secure"
              description="Enterprise-grade security keeping your conversations private"
              delay={200}
            />
            <FeatureCard
              icon={Globe}
              title="Multi-Language"
              description="Communicate in over 50 languages with native-like fluency"
              delay={300}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Experience the Future?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start your journey with AI-powered voice conversations today
          </p>
          <button className="relative px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold text-lg hover:shadow-[0_0_40px_hsl(263_70%_60%/0.6)] transition-all duration-300 hover:scale-105 overflow-hidden group">
            <span className="relative z-10">Get Started Now</span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2025 Voice Agent AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
