
import { Card } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Who We Are</h2>
            <p className="text-lg text-muted-foreground">
              We're a team of passionate technologists, designers, and strategists dedicated to creating exceptional digital experiences that drive business growth.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center">
                <h3 className="text-3xl font-bold mb-2">100+</h3>
                <p className="text-muted-foreground">Projects Delivered</p>
              </Card>
              <Card className="p-6 text-center">
                <h3 className="text-3xl font-bold mb-2">50+</h3>
                <p className="text-muted-foreground">Happy Clients</p>
              </Card>
            </div>
          </div>
          <div className="relative aspect-square">
            <img
              src="/public/who-we-are.png"
              alt="Team collaboration"
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
