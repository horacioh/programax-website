
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

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
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Input placeholder="Name" className="bg-white/50" />
              <Input placeholder="Email" type="email" className="bg-white/50" />
            </div>
            <Input placeholder="Subject" className="bg-white/50" />
            <Textarea placeholder="Message" className="bg-white/50 min-h-[150px]" />
            <Button size="lg" className="w-full hover-scale">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
