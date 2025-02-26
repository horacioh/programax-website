
import { Mail } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg text-muted-foreground">
            Ready to start your next project? We'd love to hear from you.
          </p>
        </div>
        <div className="glass rounded-xl p-8">
          <div className="flex flex-col items-center justify-center space-y-4">
            <Mail className="w-12 h-12" />
            <a 
              href="mailto:info@programax.tech" 
              className="text-2xl md:text-3xl lg:text-4xl font-bold hover:text-primary transition-colors hover-scale inline-block"
            >
              info@programax.tech
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
