import { Users, Zap, Building2, TrendingUp } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export const ParticipationSection = () => {
  const participants = [
    {
      icon: Users,
      title: "Proprietários Residenciais",
      description: "Donos de usinas solares residenciais com excedente",
    },
    {
      icon: Building2,
      title: "Empresários Comerciais",
      description: "Proprietários de usinas comerciais subutilizadas",
    },
    {
      icon: Zap,
      title: "Geradores com Excedente",
      description: "Pessoas com mais de 300 kWh/mês de sobra",
    },
    {
      icon: TrendingUp,
      title: "Investidores Solares",
      description: "Investidores em energia solar que querem rentabilizar",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Quem Pode <span className="text-primary">Participar</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Se você tem uma usina solar gerando energia excedente, esta é sua oportunidade de monetizar
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {participants.map((participant, index) => {
            const Icon = participant.icon;
            return (
              <Card key={index} className="group hover:shadow-[var(--shadow-solar)] transition-all duration-300 hover:-translate-y-2 bg-card border-2 hover:border-primary/50">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-solar rounded-full flex items-center justify-center group-hover:animate-solar-pulse">
                    <Icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">
                    {participant.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {participant.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="bg-accent/20 border border-primary/30 rounded-lg p-6 max-w-2xl mx-auto">
            <p className="text-lg font-medium text-foreground">
              <span className="text-primary font-bold">Critério mínimo:</span> Usinas que possuam acima de 300 kWh/mês de excedentes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
