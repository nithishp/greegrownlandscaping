"use client";
import { getBlogPostById } from "@/services/GlobalApi";
import React, { useEffect, useState } from "react";

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
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <img
        src={blog?.image}
        alt={blog?.title}
        className="w-full h-[40vh] object-cover my-4"
        />
        <h1 className="bold-32 lg:bold-52 mt-4">{blog?.title}</h1>
      <div style={{ fontSize: "12px", color: "#888" }}>
        Created at: {new Date(blog?.$createdAt).toLocaleDateString()}
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: blog?.content }}
        style={{ marginTop: "20px" }}
      />
     
    </div>
  );
};

export default BlogPage;
