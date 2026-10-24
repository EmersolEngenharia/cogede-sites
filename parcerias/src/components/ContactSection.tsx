import { SolarButton, EcoButton } from "./ui/button-variants";
import { MessageCircle, Mail, Phone, Zap } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-eco">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Pronto para <span className="text-primary">Começar?</span>
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como monetizar sua energia solar hoje mesmo
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main CTA */}
          <div className="text-center mb-12">
            <SolarButton
              onClick={() => window.open('https://wa.me/5564992079961', '_blank')}
              className="text-2xl px-12 py-6 mb-6 shadow-2xl"
            >
              <MessageCircle className="mr-4 h-8 w-8" />
              Falar no WhatsApp Agora
              <Zap className="ml-4 h-8 w-8" />
            </SolarButton>
            <p className="text-white/80 text-lg">
              Resposta rápida e atendimento personalizado
            </p>
          </div>

          {/* Contact Options */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <MessageCircle className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">WhatsApp</h3>
                <p className="text-white/80 text-sm mb-3">(64) 99207-9961</p>
                <EcoButton
                  onClick={() => window.open('https://wa.me/5564992079961', '_blank')}
                  className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30"
                >
                  Conversar
                </EcoButton>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">E-mail</h3>
                <p className="text-white/80 text-sm mb-3">emersonluizdemiranda@gmail.com</p>
                <EcoButton
                  onClick={() => window.open('mailto:emersonluizdemiranda@gmail.com', '_blank')}
                  className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30"
                >
                  Enviar E-mail
                </EcoButton>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">Telefone</h3>
                <p className="text-white/80 text-sm mb-3">(64) 99207-9961</p>
                <EcoButton
                  onClick={() => window.open('tel:+5564992079961', '_blank')}
                  className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30"
                >
                  Ligar Agora
                </EcoButton>
              </CardContent>
            </Card>
          </div>

          {/* Urgency Message */}
          <div className="bg-primary/20 border border-primary/30 rounded-lg p-6 text-center">
            <h4 className="font-bold text-xl mb-3 text-white">
              ⚡ Não perca mais tempo desperdiçando energia!
            </h4>
            <p className="text-white/90 text-lg">
              Cada dia sem monetizar sua usina solar é dinheiro deixado na mesa.
              Entre em contato agora e comece a lucrar ainda este mês.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
