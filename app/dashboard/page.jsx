'use client'
import Image from "next/image";
import Link from "next/link";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
 
  MoreHorizontal,
  Pencil,
  PlusCircle,
  Trash2Icon,

} from "lucide-react";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import EditProject from "@/components/EditProject";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useEffect, useState } from "react";
import { deletePostById, getPost } from "../../services/GlobalApi";

const Dashboard =()=> {
      const [projects, setProjects] = useState([]);
      const [error, setError] = useState(null);
      const [loading, setLoading] = useState(true); // Initial loading state

      // Function to get projects from the API
      const getPosts = async () => {
        try {
          setLoading(true);
          const projectList = await getPost();
          setProjects(projectList.documents); // Set the 'documents' array to the state
          console.log(projects,"projects")
        } catch (err) {
          console.error("Error fetching projects:", err);
          setError("Failed to fetch projects. Please try again later.");
        } finally {
          setLoading(false); // Set loading to false after fetching data
        }
      };

      // Fetch projects on component mount
      useEffect(() => {
        getPosts();
      }, []);

      const handleDelete = async (projectId,projectImage) => {
        try {
         const result = await deletePostById(projectId, projectImage);
          console.log(result,"post deleted")
          toast.success("Project deleted Successfully.");
          await getPosts();
        } catch (err) {
          console.error("Error deleting project:", err);
         toast.error("Project cannot be deleted try again");
        }
      };

  return (
    <TooltipProvider>
      <div className="flex min-h-screen w-full flex-col bg-muted/40">
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
          <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
            <Card x-chunk="dashboard-06-chunk-0">
              <CardHeader className="flex flex-row justify-between">
                <div>
                  <CardTitle>Projects</CardTitle>
                  <CardDescription>
                    View and manage your projects here.
                  </CardDescription>
                </div>
                <Link href="/admin">
                  <Button className="gap-3 bg-[#30af5b] hover:bg-[#248143]">
                    {" "}
                    <PlusCircle /> Add Project
                  </Button>
                </Link>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="hidden w-[100px] sm:table-cell">
                        <span className="sr-only">Image</span>
                      </TableHead>
                      <TableHead>Title</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead className="hidden md:table-cell">
                        Created at
                      </TableHead>
                      <TableHead className="hidden md:table-cell">
                        Edit
                      </TableHead>
                      <TableHead className="hidden md:table-cell">
                        Delete
                      </TableHead>
                      <TableHead>
                        <span className="sr-only">Actions</span>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {loading && (
                      <TableRow>
                        <TableCell colSpan={5}>Loading...</TableCell>
                      </TableRow>
                    )}
                    {error && (
                      <TableRow>
                        <TableCell colSpan={5}>{error}</TableCell>
                      </TableRow>
                    )}
                    {projects.map((project, index) => (
                      <TableRow key={index}>
                        <TableCell className="hidden sm:table-cell">
                          <Image
                            alt="Product image"
                            className="aspect-square rounded-md object-cover"
                            height="64"
                            src={project.image}
                            width="64"
                          />
                        </TableCell>
                        <TableCell className="font-medium truncate">
                          {project.title}
                        </TableCell>
                        <TableCell>{project.excerpt}</TableCell>
                        <TableCell className="hidden md:table-cell">
                          {new Date(project.$createdAt).toLocaleString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                              hour: "2-digit",
                              minute: "2-digit",
                            }
                          )}
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">
                          <Dialog>
                            <DialogTrigger>
                              <Button className="bg-neutral-100 hover:bg-neutral-300 gap-3 text-sm text-gray-700">
                                {" "}
                                <Pencil className="p-1" /> Edit
                              </Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>Edit Project</DialogTitle>
                                <DialogDescription>
                                  Edit the project details and images here.
                                </DialogDescription>
                              </DialogHeader>
                              <EditProject projectId={project.$id} />
                            </DialogContent>
                          </Dialog>
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">
                          <Button
                            onClick={() =>
                              handleDelete(project.$id, project.image)
                            }
                            className="bg-red-400 hover:bg-red-500 gap-3 text-sm"
                          >
                            {" "}
                            <Trash2Icon className="" /> Delete
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </main>
        </div>
      </div>
    </TooltipProvider>
  );
}
export default Dashboard