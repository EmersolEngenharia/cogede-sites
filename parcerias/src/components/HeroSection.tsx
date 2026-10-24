import { SolarButton } from "./ui/button-variants";
import { Zap, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-solar-panels.jpg";
export const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{
    backgroundImage: `url(${heroImage})`
  }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/90 to-background/95"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <img src="/lovable-uploads/ede5ea1f-a3b7-4bfb-9e34-2565180f61f5.png" alt="COGEDE - Cooperativa de Geração Distribuída Emersol" className="h-24 w-auto animate-solar-pulse" />
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-solar bg-clip-text text-transparent leading-tight">
            Oportunidade Imperdível
          </h1>

          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Lucre com sua Usina Solar!
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Transforme sua energia excedente em uma <span className="text-secondary font-semibold">fonte de renda mensal</span> com a COGEDE.
          </p>

          {/* CTA Button */}
          <div className="mb-12">
            <SolarButton onClick={() => window.open('https://wa.me/5564992079961', '_blank')} className="text-xl">
              <Zap className="mr-3 h-6 w-6" />
              Quero Monetizar Minha Energia
              <ArrowRight className="ml-3 h-6 w-6" />
            </SolarButton>
          </div>

          {/* Stats or highlights */}
          <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto text-center">
            <div className="bg-card/80 backdrop-blur-sm rounded-lg p-4 border shadow-lg">
              <div className="text-2xl font-bold text-primary mb-2">300kWh/mês</div>
              <div className="text-sm text-muted-foreground">Excedente mínimo aceito</div>
            </div>
            <div className="bg-card/80 backdrop-blur-sm rounded-lg p-4 border shadow-lg">
              <div className="text-2xl font-bold text-secondary mb-2">100% Legal</div>
              <div className="text-sm text-muted-foreground">Seguimos ANEEL e  OCB</div>
            </div>
            <div className="bg-card/80 backdrop-blur-sm rounded-lg p-4 border shadow-lg">
              <div className="text-2xl font-bold text-solar-orange mb-2">Renda Mensal</div>
              <div className="text-sm text-muted-foreground">Retorno garantido</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
