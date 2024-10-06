"use client";
import { getAllBlogs } from "@/services/GlobalApi";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const page = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Initial loading state

  // Function to get projects from the API
  const getBlogs = async () => {
    try {
      setLoading(true);
      const blogList = await getAllBlogs();
      setBlogs(blogList.documents); // Set the 'documents' array to the state
      console.log(blogList);
    } catch (err) {
      console.error("Error fetching projects:", err);
      setError("Failed to fetch projects. Please try again later.");
    } finally {
      setLoading(false); // Set loading to false after fetching data
    }
  };

  // Fetch projects on component mount
  useEffect(() => {
    getBlogs();
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
            <h2 className="bold-40 lg:bold-64">Our Blogs</h2>
          </div>

          <p className="mt-4 regular-18 max-w-md text-gray-30">
            Want to know more about gardern landscaping and designs? Read our blog to know more!!
          </p>
        </header>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {loading && <p>Loading...</p>}
          {blogs.map((blog, index) => (
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
                      {new Date(blog.$createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}{" "}
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
          ))}
        </ul>
      </div>
    </section>
  );
};

export default page;
