'use client'
import { getLimitPost } from "@/services/GlobalApi";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ProjectModal from "./ProjectModal";
import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";


const PreviousProjects = () => {
  // State to hold projects and possible error
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Initial loading state

  // Function to get projects from the API
  const getPosts = async () => {
    try {
      setLoading(true);
      const projectList = await getLimitPost();
      console.log( projectList, "project List")
      setProjects(projectList.documents); // Set the 'documents' array to the state
    } catch (err) {
      console.error("Error fetching projects:", err);
      setError("Failed to fetch projects. Please try again later.");
    } finally {
      setLoading(false); // Set loading to false after fetching data
    }
  };
const Skeleton = ({count}) => {
  return (
    <div className={`animate-pulse bg-gray-300 rounded-lg h-64 w-full delay-${count}000`}></div>
  );
};
  // Fetch projects on component mount
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <section className="my-10">
        <div className="container max-w-xl p-6 py-12 mx-auto  lg:px-8 lg:max-w-7xl">
          <div className=" max-container w-full pb-10">
            <Image src="/camp.svg" alt="camp" width={50} height={50} />
            <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
              our experience speaks
            </p>
            <div className="flex flex-col">
              <h2 className="bold-40 lg:bold-64 ">Previous Projects</h2>
              <p className="regular-16 xl:text-left text-gray-30 xl:max-w-[520px]">
                We have worked on some amazing projects. Take a look at some of our previous projects.
              </p>
            </div>
          </div>
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
                      <Skeleton count={index} />
                    </li>
                  ))
              ) : projects.length > 0 ? (
                projects.map((project) => (
                  <Dialog>
                    <DialogTrigger asChild>
                      <li
                        key={project.$id}
                        className="cursor-pointer hover:scale-105 duration-300"
                      >
                        <div
                          style={{
                            backgroundImage: `url(${project.image})`,
                            backgroundPosition: "center",
                          }}
                          className="outline-card flex aspect-square w-full flex-col justify-end overflow-hidden rounded-lg bg-neutral-400  shadow-xl shadow-neutral-900/30 transition-[background-size] bg-no-repeat bg-cover duration-500"
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
                    <DialogContent className="h-[80vh]">
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
        <div className="flex items-center justify-center ">
          <Link href="/projects">
            <Button className="bg-[#30af5b] hover:bg-[#268b48] bold-20 gap-3">
              View More
              <MoveRight />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};




export default PreviousProjects;
