"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import SkeletonLoader from "@/components/SkeletonLoader"; // Import SkeletonLoader
import { getBlogPostById, updateBlog } from "@/services/GlobalApi";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const EditBlogPage = ({ params }) => {
  const blogId = params.blogId;
  const router = useRouter(); // Initialize router

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  const [form, setForm] = useState({
    title: "",
    description: "",
    content: "", // New content field
    image: null, // For the new image file
    previousImageUrl: "", // Store current image URL
  });

  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // State for data loading

  // Fetch blog details when the component mounts
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const blog = await getBlogPostById(blogId); // Fetch blog by ID
        if (blog) {
          setForm({
            title: blog.title || "",
            description: blog.description || "",
            previousImageUrl: blog.image || "", // Set existing image URL
            content: blog.content || "", // Set existing blog content
          });
        }
      } catch (error) {
        toast.error("Failed to load blog details.");
        console.error("Error fetching blog:", error);
      } finally {
        setIsLoading(false); // Set loading to false after fetching
      }
    };

    fetchBlog();
  }, [blogId]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Handle image input changes
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setForm({ ...form, image: file });
  };

  // Handle form submission to update the blog
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Update the blog with new title, description, content, and image
      const response = await updateBlog(blogId, {
        title: form.title,
        description: form.description, // Assuming backend expects 'excerpt'
        content: form.content, // Blog content field
        image: form.image, // Pass the new image file
        previousImageUrl: form.previousImageUrl, // Pass current image URL for deletion if needed
      });

      if (response.success) {
        toast.success("Blog updated successfully!");
        router.push("/dashboard"); // Redirect to the dashboard after success
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      toast.error("Failed to update blog.");
      console.error("Error updating blog:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-4 lg:pl-20 mt-5 lg:mt-10">
      <div className="my-3">
        <h1 className="bold-32 lg:bold-58">Edit Blog</h1>
      </div>
      <div className="max-w-3xl mb-10">
        {isLoading ? ( // Conditional rendering for loading
          <SkeletonLoader />
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="grid w-full max-w-sm items-center my-3 gap-1.5">
              <Label htmlFor="title">Update Title</Label>
              <Input
                type="text"
                id="title"
                name="title"
                value={form.title}
                onChange={handleInputChange}
                placeholder="Update the blog title"
              />
            </div>

            <div className="grid w-full my-3 gap-1.5">
              <Label htmlFor="description">Update Description</Label>
              <Textarea
                id="description"
                name="description"
                value={form.description}
                onChange={handleInputChange}
                placeholder="Update the blog description"
                className="h-32"
              />
            </div>

            <div className="grid w-full my-3 gap-1.5">
              <Label htmlFor="image">Update Image</Label>
              <Input
                type="file"
                id="image"
                name="image"
                onChange={handleImageChange}
                accept="image/*"
              />
            </div>

            {form.previousImageUrl && (
              <div className="my-3">
                <Label>Current Image</Label>
                <img
                  src={form.previousImageUrl}
                  alt="Current Blog"
                  className="mt-2 w-48"
                />
              </div>
            )}

            <div className="grid w-full my-3 gap-1.5">
              <Label htmlFor="content">Update Content</Label>
              <ReactQuill
                value={form.content}
                modules={modules}
                formats={formats}
                onChange={(e) => setForm({ ...form, content: e })}
                className="mb-6"
              />
            </div>

            <Button type="submit" className="my-3" disabled={loading}>
              {loading ? "Updating..." : "Update Blog"}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default EditBlogPage;
