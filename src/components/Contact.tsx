import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Github } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section id="contact" className="py-20 px-6 bg-card/20">
      <div className="max-w-4xl mx-auto text-center">
        <div 
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`space-y-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Vamos <span className="text-gradient">Conversar?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Estou sempre aberta a discutir novos projetos, ideias criativas ou oportunidades para fazer parte da sua visão.
          </p>

          <Card className="p-8 bg-card/50 backdrop-blur border-border/50 mt-12">
            <div className="grid md:grid-cols-3 gap-6">
              <a 
                href="mailto:thaliaadani@gmail.com"
                className="flex flex-col items-center gap-3 p-6 rounded-lg hover:bg-primary/10 transition-colors group"
              >
                <Mail className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-sm text-muted-foreground">thaliaadani@gmail.com</p>
                </div>
              </a>

              <a 
                href="https://www.linkedin.com/in/thaliadani/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-6 rounded-lg hover:bg-primary/10 transition-colors group"
              >
                <Linkedin className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-semibold">LinkedIn</p>
                  <p className="text-sm text-muted-foreground">/thaliadani</p>
                </div>
              </a>

              <a 
                href="ttps://github.com/thaliadani"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-6 rounded-lg hover:bg-primary/10 transition-colors group"
              >
                <Github className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-semibold">GitHub</p>
                  <p className="text-sm text-muted-foreground">/thaliadani</p>
                </div>
              </a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;