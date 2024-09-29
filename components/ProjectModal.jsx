'use client'
import { useState } from "react";
import Link from "next/link";
import { Lens } from "./ui/lens";
const ProjectModal = ({ project }) => {
  const [imageLoaded, setImageLoaded] = useState(false); // State to track image load

  const handleImageLoad = () => {
    setImageLoaded(true);
  };
const [hovering, setHovering] = useState(false);
  return (
    <div>
      <div className="space-y-4">
        <div className="space-y-2 relative">
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-200 rounded-md h-72 animate-pulse">
              {/* Placeholder skeleton */}
              <span className="text-gray-500">Loading...</span>
            </div>
          )}
          <Lens hovering={hovering} setHovering={setHovering} zoomFactor={2}>
            <img
              src={project.image}
              alt={project.title}
              className={`block object-cover object-center w-full rounded-md h-96 xl:h-[500px] transition-opacity duration-300 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
              onLoad={handleImageLoad} // Image load handler
            />
          </Lens>
          <div className="flex items-center text-xs">
            <span>
              {new Date(project.$createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
        </div>
        <Link href="#" className="block">
          <h3 className="text-xl bold-20 lg:bold-40 text-[#29954d]">
            {project.title}
          </h3>
        </Link>
        <p className="leading-relaxed regular-16 text-neutral-800">{project.excerpt}</p>
      </div>
    </div>
  );
};

export default ProjectModal;
