import { ArrowRight, Shield, DollarSign, Users } from "lucide-react";

export const HowItWorksSection = () => {
  const steps = [
    {
      icon: Users,
      number: "01",
      title: "Parceria",
      description: "A cooperativa aluga sua usina e repassa os créditos para os cooperados",
    },
    {
      icon: DollarSign,
      number: "02",
      title: "Remuneração",
      description: "Você recebe uma remuneração mensal pelos créditos injetados na rede",
    },
    {
      icon: Shield,
      number: "03",
      title: "Gestão Completa",
      description: "COGEDE gerencia todo o processo com segurança e respaldo regulatório",
    },
  ];

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Como <span className="text-secondary">Funciona</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Um processo simples e transparente para começar a lucrar com sua energia solar
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <div className="bg-card rounded-xl p-6 shadow-lg border-2 border-transparent hover:border-secondary/50 transition-all duration-300 text-center h-full">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-eco rounded-full flex items-center justify-center relative">
                      <Icon className="h-8 w-8 text-secondary-foreground" />
                      <span className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow between steps */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <ArrowRight className="h-8 w-8 text-primary" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Important Note */}
          <div className="bg-energy-blue/10 border border-energy-blue/30 rounded-lg p-6 text-center">
            <h4 className="font-semibold text-lg mb-3 text-foreground">
              📋 Informação Importante
            </h4>
            <p className="text-muted-foreground">
              As concessionárias como <span className="font-semibold text-energy-blue">Cemig e Equatorial Energia</span> podem levar alguns dias para efetivar os créditos, mas a COGEDE gerencia esse processo com experiência e transparência.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
