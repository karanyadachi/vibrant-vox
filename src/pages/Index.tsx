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
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-fade-in-up">
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
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
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
          <button className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold text-lg hover:shadow-[0_0_40px_hsl(263_70%_60%/0.6)] transition-all duration-300 hover:scale-105">
            Get Started Now
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
