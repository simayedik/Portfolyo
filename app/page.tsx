import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

export default function Portfolio() {
  const skills = [
    "React Native",
    "JavaScript",
    "TypeScript",
    "Firebase",
    "Redux",
    // "Victory Native",
    "React Navigation",
    "Python",
    "Java",
    "Kotlin",
    "Node.js",
    "Express.js",
    "HTML",
    "CSS",
  
  ];

  const projects = [
    {
      title: "Code Talks",
      description:
        "React Native ile geliştirilen, kullanıcıların odalar oluşturabildiği ve var olan odalara girip sohbet edebildiği gerçek zamanlı bir uygulama.",
      tech: ["React Native", "Firebase"],
      features: [
        "Gerçek zamanlı mesajlaşma",
        "Kullanıcılar oda oluşturabilir",
        "Her oda için ayrı sohbet alanı"
      ],
      github: "https://github.com/simayedik/codeTalks",
      image: "/images/code-talks.png",
      demo: "https://code-talks-demo.vercel.app"
    },
    {
      title: "Hisse Tahmin App",
      description:
        "Hisselerin kapanış fiyatlarını tahmin eden ve sonuçları grafikler ile gösteren bir mobil uygulama.",
      tech: ["React Native", "Firebase", "Victory Native"],
      features: [
        "Hisse senedi fiyat tahmini",
        "Veri görselleştirme (grafik)",
        "Kullanıcı dostu arayüz"
      ],
      github: "https://github.com/simayedik/Portfolyo",
      image: "/images/hisse-tahmin.png"
      // demo: "https://hisse-tahmin-demo.vercel.app"
    },
    // {
    //   title: "Konum Tabanlı Notlar",
    //   description: "Google Maps API ile konum işaretleyip, o konuma özel notlar ekleyebilen uygulama.",
    //   tech: ["React Native", "react-native-maps", "Firebase"],
    //   features: [
    //     "Harita üzerinde konum işaretleme",
    //     "Konuma özel not ekleme",
    //     "Harita üzerinde not listeleme"
    //   ],
    //   github: "https://github.com/simayedik/konum-notlari",
    //   image: "/images/konum-notlar.png"
    //   // demo: "https://konum-notlar-demo.vercel.app"
    // }
  ];

  return (
    <div className="p-8 max-w-4xl mx-auto space-y-12">
      <header className="space-y-2 text-center">
        <h1 className="text-4xl font-bold">Merhaba, ben Simay</h1>
        <p className="text-muted-foreground text-lg">
          React Native ile mobil uygulamalar geliştiriyorum. Kullanıcı deneyimi, performans ve sade tasarımlara odaklanıyorum.
        </p>
        <div className="flex justify-center space-x-4 pt-4">
         <a href="https://github.com/simayedik" target="_blank" rel="noopener noreferrer">
            <Github />
          </a>
          <a href="https://www.linkedin.com/in/simay-edik-4237b3272/" target="_blank" rel="noopener noreferrer">
            <Linkedin />
          </a>
          <a href="mailto:ediksimay@gmail.com">
            <Mail />
          </a>
        </div>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Yetenekler</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, i) => (
            <span key={i} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Projelerim</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <Card key={i} className="rounded-2xl shadow-md hover:scale-[1.03] transition-transform">
              <CardContent className="p-4 space-y-3">

                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2 text-sm">
                  {project.tech.map((tech, j) => (
                    <span key={j} className="bg-gray-100 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                {project.features && (
                  <ul className="list-disc pl-5 text-sm text-gray-700">
                    {project.features.map((f, idx) => (
                      <li key={idx}>{f}</li>
                    ))}
                  </ul>
                )}
                <div className="flex gap-2 pt-2">
                  <Button asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-1" /> GitHub
                    </a>
                  </Button>
                  
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <footer className="pt-10 text-center text-sm text-muted-foreground">
        &copy; 2025 Simay Edik. Tüm hakları saklıdır.
      </footer>
    </div>
  );
}