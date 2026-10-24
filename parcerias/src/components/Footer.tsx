import { Zap, Sun, Leaf } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          {/* Logo */}
          <div className="mb-8">
            <img
              src="/lovable-uploads/ede5ea1f-a3b7-4bfb-9e34-2565180f61f5.png"
              alt="COGEDE - Cooperativa de Geração Distribuída Emersol"
              className="h-16 w-auto mx-auto filter brightness-0 invert"
            />
          </div>

          {/* Inspirational message */}
          <div className="mb-8">
            <div className="flex justify-center items-center gap-4 mb-4">
              <Sun className="h-8 w-8 text-primary animate-solar-pulse" />
              <Zap className="h-8 w-8 text-primary" />
              <Leaf className="h-8 w-8 text-secondary" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
              "Juntos, vamos impulsionar o uso da energia solar e levar economia limpa para mais brasileiros!"
            </h3>
            <p className="text-lg text-background/80 max-w-2xl mx-auto">
              COGEDE - Cooperativa de Geração Distribuída Emersol
            </p>
          </div>

          {/* Contact info */}
          <div className="border-t border-background/20 pt-8">
            <div className="grid md:grid-cols-3 gap-4 text-sm text-background/70">
              <div>
                <strong>WhatsApp:</strong> (64) 99207-9961
              </div>
              <div>
                <strong>E-mail:</strong> emersonluizdemiranda@gmail.com
              </div>
              <div>
                <strong>Regulamentado pela</strong> ANEEL
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-4 border-t border-background/20 text-background/60 text-sm">
            <p>&copy; {new Date().getFullYear()} COGEDE - Cooperativa de Geração Distribuída Emersol. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
