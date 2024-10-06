"use client";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Label } from "@/components/ui/label"; // Assuming this is where the function is
import { useRouter } from "next/navigation";
import { createBlog } from "@/services/GlobalApi";

const CreateBlogPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null); // Image state
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

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

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file); // Set selected image
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    try {
      const blogData = {
        title,
        description,
        content,
        image, // Include image file
      };

      // Call the createBlog function (passing form data including the image)
      await createBlog(blogData);

      // Redirect or give success feedback
      router.push("/blogs"); // Redirect to blog listing page
    } catch (err) {
      setError("Failed to create blog");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="lg:px-20 mt-10 lg:mt-20">
      <div>
        <h1 className="bold-52 my-5 lg:mt-20">Create Blog</h1>
      </div>
      {error && <div className="text-red-500">{error}</div>}
      <Card className="my-3">
        <CardHeader>
          <CardTitle>Blog Title</CardTitle>
          <CardDescription>
            Give a short, descriptive title to your blog post.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Input
            placeholder="Enter title here..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </CardContent>
      </Card>

      <Card className="my-3">
        <CardHeader>
          <CardTitle>Blog Description</CardTitle>
          <CardDescription>
            Give a short description to your blog post.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Input
            placeholder="Enter description here..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </CardContent>
      </Card>

      <Card className="my-3">
        <CardHeader>
          <CardTitle>Upload Image</CardTitle>
          <CardDescription>Upload an image for your blog post.</CardDescription>
        </CardHeader>
        <CardContent>
          <Input id="picture" type="file" onChange={handleImageChange} />
        </CardContent>
      </Card>

      <Card className="my-3">
        <CardHeader>
          <CardTitle>Content</CardTitle>
          <CardDescription>Write your blog post here.</CardDescription>
        </CardHeader>
        <CardContent>
          <ReactQuill
            value={content}
            modules={modules}
            formats={formats}
            onChange={(newValue) => setContent(newValue)}
          />
        </CardContent>
        <CardFooter className="border-t px-6 py-4">
          <Button onClick={handleSubmit} disabled={loading}>
            {loading ? "Saving..." : "Save"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CreateBlogPage;
