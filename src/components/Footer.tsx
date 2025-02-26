
const Footer = () => {
  return (
    <footer className="bg-secondary/30 py-8 px-6">
      <div className="container mx-auto">
        <div className="text-center">
          <p className="font-semibold text-lg mb-2">Programax Ventures LLC</p>
          <address className="text-muted-foreground not-italic">
            30N Gould st. STE R<br />
            Sheridan, WY 82801
          </address>
        </div>
        <div className="mt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Programax Ventures LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
