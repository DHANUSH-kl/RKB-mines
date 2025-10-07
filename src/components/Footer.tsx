const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-2xl font-bold">
              RKB<span className="text-primary">Mines</span>
            </p>
            <p className="text-sm text-background/70 mt-1">
              Building Foundations That Last
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-background/70">
              © {new Date().getFullYear()} RKBMines. All rights reserved.
            </p>
            <p className="text-sm text-background/70 mt-1">
              Quality Materials • Reliable Service • On-Time Delivery
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
