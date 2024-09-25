"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { getProjectById, updateProject } from "@/services/GlobalApi"; // Import necessary functions
import SkeletonLoader from "./SkeletonLoader"; // Import SkeletonLoader

const EditProject = ({ projectId }) => {
  const router = useRouter(); // Initialize router
  const [form, setForm] = useState({
    title: "",
    description: "",
    image: null, // For the new image file
    previousImageUrl: "", // Store current image URL
  });
  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // State for data loading

  // Fetch project details when the component mounts
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const project = await getProjectById(projectId); // Fetch project by ID
        if (project) {
          setForm({
            title: project.title || "",
            description: project.excerpt || "",
            previousImageUrl: project.image || "", // Set existing image URL
          });
        }
      } catch (error) {
        toast.error("Failed to load project details.");
        console.error("Error fetching project:", error);
      } finally {
        setIsLoading(false); // Set loading to false after fetching
      }
    };

    fetchProject();
  }, [projectId]);

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

  // Handle form submission to update the project
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Update the project with new title, description, and image
      const response = await updateProject(projectId, {
        title: form.title,
        excerpt: form.description, // Note: Assuming backend expects 'excerpt'
        image: form.image, // Pass the new image file
        previousImageUrl: form.previousImageUrl, // Pass current image URL for deletion if needed
      });

      if (response.success) {
        toast.success("Project updated successfully!");
        router.push("/dashboard"); // Redirect to the dashboard after success
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      toast.error("Failed to update project.");
      console.error("Error updating project:", error);
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
              placeholder="Update the project title"
            />
          </div>

          <div className="grid w-full my-3 gap-1.5">
            <Label htmlFor="description">Update Description</Label>
            <Textarea
              id="description"
              name="description"
              value={form.description}
              onChange={handleInputChange}
              placeholder="Update the project description"
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
                alt="Current Project"
                className="mt-2 w-48"
              />
            </div>
          )}

          <Button type="submit" className="my-3" disabled={loading}>
            {loading ? "Updating..." : "Update Project"}
          </Button>
        </form>
      )}
    </div>
  );
};

export default EditProject;
