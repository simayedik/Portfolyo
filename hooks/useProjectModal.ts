import { useState } from "react";

export function useProjectModal() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (project: any) => {
    setSelectedProject(project);
    setCurrentIndex(0);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedProject(null);
  };

  return { modalIsOpen, selectedProject, currentIndex, setCurrentIndex, openModal, closeModal };
}