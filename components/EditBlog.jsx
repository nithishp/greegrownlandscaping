"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "./ui/button";
import { toast } from "sonner";
import SkeletonLoader from "./SkeletonLoader"; // Import SkeletonLoader
import { getBlogPostById } from "@/services/GlobalApi";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";

const EditBlog = ({ blogId }) => {
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
            content: blog.content || "", // Set existing image URL
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
      // Update the blog with new title, description, and image
      const response = await updateBlog(blogId, {
        title: form.title,
        excerpt: form.description, // Note: Assuming backend expects 'excerpt'
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
            />
          </div>
          <div className="grid w-full my-3 gap-1.5">
            <Label htmlFor="description">Update Description</Label>
            {/* <ReactQuill

              value={form.content}
              modules={modules}
              formats={formats}
              onChange={e=>setForm({...form,content:e})}
            /> */}
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

          <Button type="submit" className="my-3" disabled={loading}>
            {loading ? "Updating..." : "Update Blog"}
          </Button>
        </form>
      )}
    </div>
  );
};

export default EditBlog;
