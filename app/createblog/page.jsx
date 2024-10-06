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

export const description =
  "A product edit page. The product edit page has a form to edit the product details, stock, product category, product status, and product images. The product edit page has a sidebar navigation and a main content area. The main content area has a form to edit the product details, stock, product category, product status, and product images. The sidebar navigation has links to product details, stock, product category, product status, and product images.";

const page = () => {
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
            <Input placeholder="Enter title here..." />
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
            <Input placeholder="Enter description here..." />
          </form>
        </CardContent>
      </Card>
      <Card className="my-3">
        <CardHeader>
          <CardTitle>Content</CardTitle>
          <CardDescription>Write your blog post here.</CardDescription>
        </CardHeader>
        <CardContent>
          <ReactQuill />
        </CardContent>
        <CardFooter className="border-t px-6 py-4">
          <Button>Save</Button>
        </CardFooter>
      </Card>
    </div>
  );
};
export default page;
