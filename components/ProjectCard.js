import { Card, CardContent } from "@/components/ui/card";

export default function ProjectCard({ project, onClick }) {
  return (
    <Card
      onClick={onClick}
      className="cursor-pointer rounded-3xl shadow-lg border-slate-200 overflow-hidden hover:scale-[1.02] hover:shadow-2xl transition-all duration-300"
    >
      <div className="aspect-[16/10] bg-slate-100 relative overflow-hidden">
        <img
          src={project.images[0]}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-6 space-y-4">
        <span className="text-blue-600 font-semibold uppercase text-xs tracking-wider">
          {project.category || "Mobil Uygulama"}
        </span>
        <h3 className="text-2xl font-extrabold tracking-tight">{project.title}</h3>
        <p className="text-muted-foreground line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2 text-sm pt-2">
          {project.tech.map((tech, j) => (
            <span
              key={j}
              className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}