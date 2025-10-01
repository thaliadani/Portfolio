import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.png";
import ThemeToggle from "./ThemeToggle";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="absolute top-6 right-6">
        <ThemeToggle />
      </div>
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-slide-up">
          <div className="space-y-4">
            <p className="text-muted-foreground text-lg">Olá, eu sou</p>
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="text-gradient">Thalia Danielle</span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground/90">
              Desenvolvedora
            </h2>
          </div>
          
          <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
            Criando experiências digitais modernas e intuitivas com código limpo e design pensado no usuário.
          </p>
          
          <div className="flex gap-4 pt-4">
            <Button size="lg" className="glow">
              Ver Projetos
            </Button>
            <Button size="lg" variant="secondary">
              Contato
            </Button>
          </div>
          
          <div className="flex gap-4 pt-8">
            <a 
              href="https://github.com/thaliadani" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/thaliadani/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:thaliaadani@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="relative animate-fade-in hidden md:block">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl rounded-full " />
          <img 
            src={heroIllustration} 
            alt="Developer illustration" 
            className="relative z-10 w-full h-auto animate-float rounded-full "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;