"use client";
import React, { useEffect, useState } from "react";
import { getPost } from "../../services/GlobalApi";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ProjectModal from "@/components/ProjectModal";
import Image from "next/image";

// Skeleton Loader Component
const Skeleton = () => {
  return (
    <div className="animate-pulse bg-gray-300 rounded-lg h-64 w-full"></div>
  );
};

const Page = () => {
  // State to hold projects and possible error
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Initial loading state

  // Function to get projects from the API
  const getPosts = async () => {
    try {
      setLoading(true);
      const projectList = await getPost();
      setProjects(projectList.documents); // Set the 'documents' array to the state
    } catch (err) {
      console.error("Error fetching projects:", err);
      setError("Failed to fetch projects. Please try again later.");
    } finally {
      setLoading(false); // Set loading to false after fetching data
    }
  };

  // Fetch projects on component mount
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header className="mb-5">
          <div className="relative">
            <Image
              src="/camp.svg"
              alt="camp"
              width={50}
              height={50}
              className="absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]"
            />
            <h2 className="bold-40 lg:bold-64">Our Services</h2>
          </div>

          <p className="mt-4 regular-18 max-w-md text-gray-30">
            Not sure about our ability? Take a look at our previous projects to
            get to know us more!
          </p>
        </header>

        {/* Error message */}
        {error && <div className="text-red-500 mb-4">{error}</div>}

        {/* If no error, render the project list */}
        {!error && (
          <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {loading ? (
              // Show skeletons when loading
              Array(3)
                .fill(0)
                .map((_, index) => (
                  <li key={index}>
                    <Skeleton />
                  </li>
                ))
            ) : projects.length > 0 ? (
              projects.map((project) => (
                <Dialog >
                  <DialogTrigger asChild>
                    <li key={project.$id} className="cursor-pointer">
                      <div
                        style={{
                          backgroundImage: `url(${project.image})`,
                          backgroundPosition: "center",
                        }}
                        className="outline-card flex aspect-square w-full flex-col justify-end overflow-hidden rounded-lg bg-neutral-400 shadow-xl shadow-neutral-900/30 transition-[background-size] bg-no-repeat bg-cover duration-500"
                      >
                        <div className="pointer-events-none flex flex-col items-start justify-between bg-gradient-to-t from-black to-black/0 p-6 pt-8 text-xl font-medium text-white md:text-2xl">
                          <h3 className="text-left bold-20 lg:bold-32">
                            {project.title}
                          </h3>
                          <h6 className="regular-16 text-neutral-200 text-left mt-1 md:mt-2 line-clamp-1">
                            {project.excerpt}
                          </h6>
                        </div>
                      </div>
                    </li>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle className=" bold-20 mb-3">
                        Take a closer look!!
                      </DialogTitle>
                      <DialogDescription>
                        <ProjectModal project={project} />
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              ))
            ) : (
              <li>No projects found</li>
            )}
          </ul>
        )}
      </div>
    </section>
  );
};

export default Page;
