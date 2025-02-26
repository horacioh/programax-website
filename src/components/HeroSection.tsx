import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding relative">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className="absolute inset-0 bg-background/80 dark:bg-background/90 z-10" aria-hidden="true" />
      <div className="container mx-auto relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up text-foreground"
            style={{ 
              letterSpacing: '-0.02em'
            }}
          >
            Transforming Ideas Into
            <span className="block mt-2">Digital Excellence</span>
          </h1>
          <p 
            className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-up" 
            style={{ 
              animationDelay: '0.2s'
            }}
          >
            We craft innovative digital solutions that elevate your business to new heights.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
