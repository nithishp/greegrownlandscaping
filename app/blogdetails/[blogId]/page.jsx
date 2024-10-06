"use client";
import { getBlogPostById } from "@/services/GlobalApi";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const SkeletonLoader = () => (
  <div className="space-y-4">
    <div className="h-10 bg-gray-300 animate-pulse rounded"></div>
    <div className="h-[40vh] bg-gray-300 animate-pulse rounded"></div>
    <div className="h-4 bg-gray-300 animate-pulse rounded w-1/2"></div>
    <div className="h-6 bg-gray-300 animate-pulse rounded w-3/4"></div>
  </div>
);

const BlogPage = ({ params }) => {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const blogId = params.blogId;

  const getBlog = async () => {
    try {
      const blogDetails = await getBlogPostById(blogId);
      setBlog(blogDetails);
      setLoading(false);
    } catch (err) {
      setError("Failed to load blog");
      setLoading(false);
    }
  };

  useEffect(() => {
    getBlog();
  }, []);

  if (loading) {
    return (
      <div className="w-screen h-screen flex flex-col items-center justify-center text-green-50">
        <SkeletonLoader />
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <Link href="/blogs" className="flex gap-3">
        <ArrowLeft /> Back
      </Link>
      <h1 className="bold-32 lg:bold-52 mt-4">{blog?.title}</h1>
      <img
        src={blog?.image}
        alt={blog?.title}
        className="w-full h-[40vh] object-cover my-4"
      />
      <div style={{ fontSize: "12px", color: "#888" }}>
        Created at: {new Date(blog?.$createdAt).toLocaleDateString()}
      </div>
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: blog?.content }}
        style={{ marginTop: "20px" }}
      />
    </div>
  );
};

export default BlogPage;
