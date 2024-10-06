'use client'
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
import { Label } from "@/components/ui/label";


const page = () => {
  const [title,setTitle] = useState("");
  const [description,setDescription] = useState("");
  const [content,setContent] = useState("");
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]

  return (
    <div className="lg:px-20 mt-10 lg:mt-20">
      <div>
        <h1 className="bold-52 my-5 lg:mt-20">Create Blog</h1>
      </div>
      <Card className="my-3">
        <CardHeader>
          <CardTitle>Blog Title</CardTitle>
          <CardDescription>
            Give a short, descriptive title to your blog post.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <Input placeholder="Enter title here..." value={title} onChange={e=>setTitle(e.target.value)} />
          </form>
        </CardContent>
        {/* <CardFooter className="border-t px-6 py-4">
          <Button>Save</Button>
        </CardFooter> */}
      </Card>
      <Card className="my-3">
        <CardHeader>
          <CardTitle>Blog description</CardTitle>
          <CardDescription>
            Give a short description to your blog post.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <Input placeholder="Enter description here..." value={description} onChange={e=>setDescription(e.target.value)} />
          </form>
        </CardContent>
      </Card>
      <Card className="my-3">
        <CardHeader>
          <CardTitle>Upload Image</CardTitle>
          <CardDescription>
            Upload an image for your blog post.
          </CardDescription>
        </CardHeader>
        <CardContent>

      <Input id="picture" type="file" />
        </CardContent>
      </Card>
    
      <Card className="my-3">
        <CardHeader>
          <CardTitle>Content</CardTitle>
          <CardDescription>Write your blog post here.</CardDescription>
        </CardHeader>
        <CardContent>
          <ReactQuill value={content} modules={modules} formats={formats} onChange={newValue =>setContent(newValue)}  />
        </CardContent>
        <CardFooter className="border-t px-6 py-4">
          <Button>Save</Button>
        </CardFooter>
      </Card>
    </div>
  );
};
export default page;
