import Modal from "react-modal";
import Slideshow from "./Slideshow";
import { X, CheckCircle, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
    title: string;
    description: string;
    longDescription?: string;
    tech: string[];
    features: string[];
    github: string;
    images: string[];
    category: string;
    demo?: string;
}

interface ProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
    project: Project | null; 
    currentIndex: number;
    setCurrentIndex: (index: number | ((prev: number) => number)) => void;
}




export default function ProjectModal({ isOpen, onClose, project, currentIndex, setCurrentIndex }: ProjectModalProps) {
    if (!project) return null;

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="Proje İnceleme Modalı"
            className="bg-white p-0 rounded-3xl max-w-4xl mx-auto my-12 outline-none shadow-2xl overflow-hidden relative"
            overlayClassName="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50"
        >
            <button
                onClick={onClose}
                className="absolute top-4 right-4 bg-white/80 p-2 rounded-full text-slate-600 hover:text-black hover:bg-white z-10 transition"
            >
                <X size={24} />
            </button>

            {project && (
                <div className="grid md:grid-cols-2 gap-0">
                    <div className="bg-slate-100 flex items-center justify-center p-6">
                        <div className="bg-slate-100 flex items-center justify-center p-6 min-h-[400px]">
                            <Slideshow
                                images={project.images}
                                currentIndex={currentIndex}
                                nextImage={() => setCurrentIndex((prev) => (prev + 1) % project.images.length)}
                                prevImage={() => setCurrentIndex((prev) => (prev - 1 + project.images.length) % project.images.length)}
                            />
                        </div>
                    </div>
                    <div className="p-10 space-y-8 overflow-y-auto max-h-[90vh]">
                        <div className="space-y-3">
                            <span className="text-blue-600 font-semibold uppercase text-xs tracking-wider">
                                {project.category || "Mobil Uygulama"}
                            </span>
                            <h2 className="text-4xl font-extrabold tracking-tight">
                                {project.title}
                            </h2>
                        </div>

                        <p className="text-slate-700 text-lg leading-relaxed">
                            {project.longDescription || project.description}
                        </p>

                        <div className="space-y-4">
                            <h4 className="text-xl font-bold tracking-tight">Öne Çıkan Özellikler</h4>
                            <ul className="space-y-3 text-slate-700">
                                {project.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-3">
                                        <CheckCircle size={20} className="text-green-600" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-4 pt-4 border-t border-slate-200">
                            <h4 className="text-xl font-bold tracking-tight">Kullanılan Teknolojiler</h4>
                            <div className="flex flex-wrap gap-2.5 text-sm">
                                {project.tech.map((tech, j) => (
                                    <span
                                        key={j}
                                        className="bg-slate-100 text-slate-700 px-3.5 py-1.5 rounded-full font-semibold border border-slate-200"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex gap-4 pt-8">
                            <Button size="lg" className="bg-slate-900 text-white w-full" asChild>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Github className="w-5 h-5 mr-2" /> GitHub Repo
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </Modal>
    );
}