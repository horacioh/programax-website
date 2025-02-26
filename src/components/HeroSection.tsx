
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up">
            Transforming Ideas Into
            <span className="block mt-2">Digital Excellence</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            We craft innovative digital solutions that elevate your business to new heights.
          </p>
          <div className="flex justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <Button size="lg" className="hover-scale">Get Started</Button>
            <Button size="lg" variant="outline" className="hover-scale">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
