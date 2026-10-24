import { DollarSign, Shield, TrendingUp, HandHeart } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Monetize seus créditos excedentes",
      description: "Transforme energia não utilizada em renda mensal garantida",
      color: "bg-gradient-solar",
    },
    {
      icon: Shield,
      title: "Parceria segura dentro das normas da ANEEL",
      description: "Operação 100% regulamentada e dentro da legislação vigente",
      color: "bg-gradient-eco",
    },
    {
      icon: TrendingUp,
      title: "Renda previsível e recorrente",
      description: "Fluxo de caixa constante e valores acordados previamente",
      color: "bg-energy-blue",
    },
    {
      icon: HandHeart,
      title: "A cooperativa cuida de tudo",
      description: "Gestão completa sem burocracia ou preocupações para você",
      color: "bg-solar-orange",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Por que Vale a <span className="text-primary">Pena</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Benefícios exclusivos para quem escolhe a COGEDE como parceira
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card border-2 hover:border-primary/30">
                <CardContent className="p-6 text-center h-full flex flex-col">
                  <div className={`w-16 h-16 mx-auto mb-6 ${benefit.color} rounded-full flex items-center justify-center group-hover:animate-solar-pulse shadow-lg`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-4 text-foreground leading-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-hero rounded-xl p-8 max-w-4xl mx-auto border border-primary/20">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              🌟 Transforme sua usina solar em um ativo financeiro
            </h3>
            <p className="text-lg text-muted-foreground">
              Deixe de desperdiçar energia excedente e comece a gerar renda mensal com total segurança e transparência
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
