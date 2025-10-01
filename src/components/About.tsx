import { Card } from "@/components/ui/card";
import { Code2, Sparkles, Zap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation();
  const principles = [
    {
      icon: Code2,
      title: "Código Limpo",
      description: "Escrevo código legível, manutenível e seguindo as melhores práticas da indústria."
    },
    {
      icon: Sparkles,
      title: "Design Primeiro",
      description: "Acredito que ótimas experiências começam com design pensado e intuitivo."
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Otimização e velocidade são prioridades em todos os meus projetos."
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          ref={titleRef as React.RefObject<HTMLDivElement>}
          className={`text-center mb-16 transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Sobre <span className="text-gradient">Mim</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Desenvolvedora apaixonada por tecnologia, focada em criar soluções que fazem a diferença.
          </p>
        </div>

        <div
          ref={cardsRef as React.RefObject<HTMLDivElement>}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {principles.map((principle, index) => (
            <Card
              key={index}
              className={`p-6 bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all duration-700 hover:shadow-lg hover:shadow-primary/10 ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              style={{ transitionDelay: cardsVisible ? `${index * 100}ms` : '0ms' }}
            >
              <principle.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{principle.title}</h3>
              <p className="text-muted-foreground">{principle.description}</p>
            </Card>
          ))}
        </div>

        <div
          ref={textRef as React.RefObject<HTMLDivElement>}
          className={`bg-card/30 backdrop-blur border border-border/50 rounded-lg p-8 transition-all duration-700 ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <p className="text-lg leading-relaxed text-foreground/90">
            Sou uma desenvolvedora apaixonada por tecnologia e estou sempre em busca de novos conhecimentos e desafios. Adoro criar e desenvolver sites, transformando ideias em soluções digitais funcionais e atraentes. Quando não estou imersa no mundo da programação, dedico meu tempo livre a jogar games, o que me ajuda a manter a mente afiada e criativa.
            <br/>
            <br/>
            Estou sempre aberta(o) a novas oportunidades e conexões na área de tecnologia, buscando colaborar em projetos inovadores e expandir minhas habilidades.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;