"use client";
import { createPost } from "@/services/GlobalApi";
import React, { useState } from "react";

const Page = () => {
  const [form, setForm] = useState({
    name: "",
    image: null,
  });
  const [uploading, setUploading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state
  const [success, setSuccess] = useState(null); // Success state

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  // Handle image file change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setForm({
      ...form,
      image: file,
    });
  };

  // Submit form data
  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);
    setError(null);
    setSuccess(null);

    try {
      // Perform validation
      if (!form.name || !form.image) {
        throw new Error("Please provide both a name and an image.");
      }
      console.log(form,"form")

      // Call your createPost function (assuming it accepts name and image file)
      const response = await createPost(form);

      if (response.success) {
        setSuccess("Post created successfully!");
        setForm({ name: "", image: null }); // Reset form
      } else {
        throw new Error(response.message || "Failed to create post.");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <section className="relative flex flex-wrap lg:h-screen lg:items-center">
      <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Upload Project</h1>
          
        </div>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mb-0 mt-8 max-w-md space-y-4"
        >
          <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleInputChange}
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter your name"
            />
          </div>
            
          <div>
            <label htmlFor="image" className="text-lg ml-3 text-gray-600">
              Upload Image
            </label>
            <input
              type="file"
              name="image"
              onChange={handleFileChange}
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              accept="image/*"
            />
          </div>

          <button
            type="submit"
            className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            disabled={uploading}
          >
            {uploading ? "Uploading..." : "Submit"}
          </button>

          {/* Show error or success messages */}
          {error && <p className="mt-4 text-red-500">{error}</p>}
          {success && <p className="mt-4 text-green-500">{success}</p>}
        </form>
      </div>

      <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
        <img
          alt="Landscape"
          src="https://plus.unsplash.com/premium_photo-1673141390230-8b4a3c3152b1?q=80&w=3773&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </section>
  );
};

export default Page;
