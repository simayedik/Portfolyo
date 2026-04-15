"use client";

import React from "react";
import Modal from "react-modal";
import { Github, Linkedin, Mail } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";
import { useProjectModal } from "@/hooks/useProjectModal";
import ProjectModal from "@/components/ProjectModals";

export default function Portfolio() {

  React.useEffect(() => {
    // Next.js'te ana sarmalayıcı genellikle body'dir
    if (document.body) {
      Modal.setAppElement(document.body);
    }
  }, []);


  const { modalIsOpen, selectedProject, currentIndex, setCurrentIndex, openModal, closeModal } = useProjectModal();


  return (

    <div className="p-8 max-w-6xl mx-auto space-y-16 text-slate-900">
      <header className="space-y-4 text-center py-10">
        <h1 className="text-5xl font-extrabold tracking-tighter">Merhaba, ben Simay</h1>
        <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
          React Native ile yüksek performanslı, modern ve kullanıcı odaklı mobil uygulamalar geliştiriyorum. Sade tasarımlara ve kusursuz bir kullanıcı deneyimine odaklanıyorum.
        </p>
        <div className="flex justify-center space-x-6 pt-6">
          <a
            href="https://github.com/simayedik"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-black transition"
          >
            <Github size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/simay-edik-4237b3272/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-blue-700 transition"
          >
            <Linkedin size={28} />
          </a>
          <a href="mailto:ediksimay@gmail.com" className="text-slate-600 hover:text-red-600 transition">
            <Mail size={28} />
          </a>
        </div>
      </header>

        

      <section className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">Yetenekler</h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, i) => (
            <span
              key={i}
              className="bg-gray-500 text-blue-800 px-4 py-1.5 rounded-full text-sm font-medium border border-blue-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

     

      <section className="space-y-8">
        <h2 className="text-3xl font-bold tracking-tight">Öne Çıkan Projeler</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ProjectCard
              key={i}
              project={project}
              onClick={() => openModal(project)}
            />
          ))}
        </div>
      </section>

      <ProjectModal
        isOpen={modalIsOpen}
        onClose={closeModal}
        project={selectedProject}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />

   <footer className="pt-10 text-center text-slate-500 border-t border-slate-200 space-y-2">
  <p>&copy; {new Date().getFullYear()} Simay. Tüm hakları saklıdır.</p>
  <div className="text-xs space-x-4">
    <a href="/delete-account" className="hover:text-slate-900 underline">MiVocabulario Hesap Silme</a>
  </div>
</footer>
    </div>
  );
}