
import { Globe, Smartphone, Lightbulb } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      icon: <Globe className="w-10 h-10 mb-4" />,
      title: "Web App Development",
      description: "Building scalable and modern web applications with cutting-edge technologies."
    },
    {
      icon: <Smartphone className="w-10 h-10 mb-4" />,
      title: "Mobile Development",
      description: "Creating powerful native and cross-platform mobile applications."
    },
    {
      icon: <Lightbulb className="w-10 h-10 mb-4" />,
      title: "Product Design & Strategy",
      description: "Strategic planning and intuitive design solutions for digital products."
    }
  ];

  return (
    <section id="services" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover-scale">
              <CardHeader className="text-center">
                <div className="flex justify-center">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                {service.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
