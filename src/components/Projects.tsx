import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import project1 from "@/assets/project-1.png";
import project2 from "@/assets/project-2.png";
import project3 from "@/assets/project-3.png";

const Projects = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: projectsRef, isVisible: projectsVisible } = useScrollAnimation();
  const projects = [
    {
      title: "Bichinho Virtual",
      description: "Cuide do seu bichinho virtual e ganhe moedas em mini-games para personalizar seu pet com acessórios incríveis.",
      image: project1,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/thaliadani/bichinho-virtual-web",
      demo: "https://bichinho-virtual-web.vercel.app/"
    },
    {
      title: "Bento grid",
      description: "Um site que exibe uma grade de imagens com layout responsivo.",
      image: project2,
      tags: ["HTML", "CSS"],
      github: "https://github.com/thaliadani/bento-grid",
      demo: "https://bento-grid-phi-peach.vercel.app/"
    },
    {
      title: "Landing Page Stranger Things",
      description: "Site sobre a série Stranger Things, com informações sobre a trama, temporada 4 e um formulário para entrar no clube.",
      image: project3,
      tags: ["HTML", "CSS", "JvaScript", "FireBase"],
      github: "https://github.com/thaliadani/landing-page-stranger-things",
      demo: "https://landing-page-stranger-things.vercel.app/"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div 
          ref={titleRef as React.RefObject<HTMLDivElement>}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meus <span className="text-gradient">Projetos</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Alguns dos trabalhos que desenvolvi
          </p>
        </div>

        <div 
          ref={projectsRef as React.RefObject<HTMLDivElement>}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <Card 
              key={index}
              className={`overflow-hidden bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all duration-700 hover:shadow-xl hover:shadow-primary/10 group ${
                projectsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: projectsVisible ? `${index * 100}ms` : '0ms' }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button 
                    variant="secondary" 
                    size="sm"
                    className="flex-1"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Código
                    </a>
                  </Button>
                  <Button 
                    size="sm"
                    className="flex-1"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;