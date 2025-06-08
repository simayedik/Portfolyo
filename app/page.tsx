// react-native-portfolio

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      title: "Not Defteri App",
      description: "React Native ile geliştirilen, kategori ve renk destekli basit not alma uygulaması.",
      tech: ["React Native", "AsyncStorage", "React Navigation"],
      github: "https://github.com/kullanici/not-defteri"
    },
    {
      title: "Harcama Takip App",
      description: "Aylık gelir-gider takibi, Firebase Auth ve grafik destekli harcama yönetimi.",
      tech: ["React Native", "Firebase", "Victory Native"],
      github: "https://github.com/kullanici/harcama-takip"
    },
    {
      title: "Konum Tabanlı Notlar",
      description: "Google Maps API ile konum işaretleyip, o konuma özel notlar ekleyebilen uygulama.",
      tech: ["React Native", "react-native-maps", "Firebase"],
      github: "https://github.com/kullanici/konum-notlari"
    }
  ];

  return (
    <div className="p-8 max-w-4xl mx-auto space-y-12">
      <header className="space-y-2 text-center">
        <h1 className="text-4xl font-bold">Merhaba, ben Simay </h1>
        <p className="text-muted-foreground text-lg">
          React Native ile mobil uygulamalar geliştiriyorum. Kullanıcı deneyimi, performans ve sade tasarımlara odaklanıyorum.
        </p>
        <div className="flex justify-center space-x-4 pt-4">
          <a href="https://github.com/kullanici" target="_blank"><Github /></a>
          <a href="https://linkedin.com/in/kullanici" target="_blank"><Linkedin /></a>
          <a href="mailto:mail@adres.com"><Mail /></a>
        </div>
      </header>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Projelerim</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <Card key={i} className="rounded-2xl shadow-md">
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
                <Button asChild>
                  <a href={project.github} target="_blank">GitHub</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <footer className="pt-10 text-center text-sm text-muted-foreground">
        &copy; 2025 [Adınız]. Tüm hakları saklıdır.
      </footer>
    </div>
  );
}
