"use client";
import { getLimitBlogs } from "@/services/GlobalApi";
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

const BlogSection = () => {
  // State to hold projects and possible error
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Initial loading state

  // Function to get projects from the API
  const getBlogs = async () => {
    try {
      setLoading(true);
      const blogList = await getLimitBlogs();
      console.log(blogList, "project List");
      setBlogs(blogList.documents); // Set the 'documents' array to the state
    } catch (err) {
      console.error("Error fetching projects:", err);
      setError("Failed to fetch projects. Please try again later.");
    } finally {
      setLoading(false); // Set loading to false after fetching data
    }
  };
  const Skeleton = ({ count }) => {
    return (
      <div
        className={`animate-pulse bg-gray-300 rounded-lg h-64 w-full delay-${count}000`}
      ></div>
    );
  };
  // Fetch projects on component mount
  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div>
      <section className="my-10">
        <div className="container max-w-xl p-6 py-12 mx-auto lg:px-8 lg:max-w-7xl">
            
          <div className=" max-container w-full pb-10">
            <Image src="/camp.svg" alt="camp" width={50} height={50} />
            <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
              learn more from us
            </p>
            <div className="flex flex-col">
              <h2 className="bold-40 lg:bold-64 ">Blogs</h2>
              <p className="regular-16 xl:text-left text-gray-30 xl:max-w-[520px]">
                Want to know more about gardern landscaping and designs? Read our
                blog to know more!!
              </p>
            </div>
          </div>
          {/* Error message */}
          {error && <div className="text-red-500 mb-4">{error}</div>}

          {/* If no error, render the project list */}
          {!error && (
            <ul className="mt-4  grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {loading ? (
                // Show skeletons when loading
                Array(3)
                  .fill(0)
                  .map((_, index) => (
                    <li key={index}>
                      <Skeleton count={index} />
                    </li>
                  ))
              ) : blogs.length > 0 ? (
                blogs.map((blog) => (
                  <li className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                    <Link href={`/blogdetails/${blog.$id}`}>
                      <img
                        alt=""
                        src={blog.image}
                        className="absolute inset-0 h-full w-full object-cover"
                      />

                      <div className="relative bg-gradient-to-t from-gray-900/50   to-gray-900/25 h-full pt-32 sm:pt-48 lg:pt-64">
                        <div className="p-4 sm:p-6">
                          <time className="block text-xs text-white/90">
                            {" "}
                            {new Date(blog.$createdAt).toLocaleDateString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              }
                            )}{" "}
                          </time>

                          <a href="#">
                            <h3 className="mt-0.5 text-lg text-white">
                              {blog.title}
                            </h3>
                          </a>

                          <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                            {blog.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))
              ) : (
                <li>No projects found</li>
              )}
            </ul>
          )}
        </div>
        <div className="flex items-center justify-center ">
          <Link href="/blogs">
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

export default BlogSection;
