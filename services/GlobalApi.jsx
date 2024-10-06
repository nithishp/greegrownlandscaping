import { Client, Account, Databases, Storage, Avatars,ID, Query } from "appwrite";

export const appwriteConfig = {
  url: process.env.NEXT_PUBLIC_APPWRITE_URL,
  projectId: process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID,
  databaseId: process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
  storageId: process.env.NEXT_PUBLIC_APPWRITE_STORAGE_ID,
  collectionId: process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID,
  BlogId: process.env.NEXT_PUBLIC_APPWRITE_BLOG_COLLECTION_ID,
};


const client = new Client();
const account = new Account(client);
const databases = new Databases(client);
const storage = new Storage(client);
const avatars = new Avatars(client);

client.setEndpoint(appwriteConfig.url);
client.setProject(appwriteConfig.projectId);

export async function getPost() {
  try {
    const posts = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.collectionId
    );

    if (!posts) throw Error;
    console.log(posts)
    return posts;
  } catch (error) {
    console.log(error);
  }
}
export async function getLimitPost() {
  try {
    // Passing the limit as an option directly to listDocuments
    const posts = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.collectionId,
      [Query.limit(3)]
    );

    if (!posts) throw new Error("No posts found");
    console.log(posts);
    return posts;
  } catch (error) {
    console.error("Error fetching limited posts:", error);
  }
}

export async function createPost(post) {
  try {

    console.log(post,"Post Create Post ")
    // Upload the file to Appwrite storage
    const uploadedFile = await uploadFile(post.image);
    console.log(uploadedFile, "Uploaded file");
    if (!uploadedFile) {
      throw new Error("File upload failed.");
    }

    // Get the file URL for preview
    const fileUrl = getFilePreview(uploadedFile.$id);

    console.log(fileUrl,"File URL")
    if (!fileUrl) {
      await deleteFile(uploadedFile.$id);
      throw new Error("Failed to generate file preview URL.");
    }

    // Create the new post with name and image URL
    const newPost = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.collectionId,
      ID.unique(),
      {
        title: post.name,
        image: fileUrl,
        excerpt: post.excerpt
      }
    );

    if (!newPost) {
      await deleteFile(uploadedFile.$id); // Cleanup in case of failure
      throw new Error("Failed to create a new post.");
    }

     return { success: true, newPost };
  } catch (error) {
    console.error("Error creating post:", error);
     return { success: false, message: error.message };
  }
}

// ============================== UPLOAD FILE
export async function uploadFile(file) {
  try {
    // Use Appwrite Storage to upload the file
    const uploadedFile = await storage.createFile(
      appwriteConfig.storageId,
      ID.unique(),
      file
    );

    return uploadedFile;
  } catch (error) {
    console.error("Error uploading file:", error);
    return null;
  }
}

// ============================== GET FILE URL
export function getFilePreview(fileId) {
  try {
    // Get the preview URL of the uploaded file
    const fileUrl = storage.getFilePreview(
      appwriteConfig.storageId,
      fileId,
      2000,
      2000,
      "top",
      100
    );

    if (!fileUrl) {
      throw new Error("Failed to get file preview.");
    }

    return fileUrl;
  } catch (error) {
    console.error("Error getting file preview:", error);
    return null;
  }
}


export async function deletePostById(projectId, imageUrl) {
  try {
    // Delete the document (post)
    const result = await databases.deleteDocument(
      appwriteConfig.databaseId,
      appwriteConfig.collectionId,
      projectId
    );
    console.log("Post deleted", result);

    // Extract file ID from image URL
    const fileId = extractFileIdFromUrl(imageUrl);

    if (fileId) {
      // Delete the image from storage
      const deleteFileResult = await storage.deleteFile(
        appwriteConfig.storageId, // Make sure this is the correct bucket ID
        fileId
      );
      console.log("Image deleted", deleteFileResult);
    } else {
      console.log("No valid file ID found in the image URL.");
    }
  } catch (error) {
    console.log("Error deleting post or image:", error);
  }
}
export async function getProjectById(projectId) {
  try {
    const project = await databases.getDocument(
      appwriteConfig.databaseId,
      appwriteConfig.collectionId,
      projectId
    );
    return project;
  } catch (error) {
    console.error("Error fetching project:", error);
    throw new Error("Could not retrieve project");
  }
}

export async function deleteFile(fileId) {
  try {
    await storage.deleteFile(appwriteConfig.storageId, fileId);
    console.log("File deleted successfully");
  } catch (error) {
    console.error("Error deleting file:", error);
    throw new Error("Failed to delete file");
  }
}

const extractFileIdFromUrl = (url) => {
  const regex = /files\/([a-zA-Z0-9]+)\//;
  const match = url.match(regex);
  return match ? match[1] : null;
};
// Update existing project
export async function updateProject(projectId, updatedPost) {
  try {
    let fileUrl = updatedPost.image; // Assume the image URL is provided initially

    // If a new image is provided as a File, upload it
    if (updatedPost.image instanceof File) {
      // Upload the new image
      const uploadedFile = await uploadFile(updatedPost.image);
      if (!uploadedFile) {
        throw new Error("File upload failed.");
      }

      // Get the URL for the new uploaded image
      fileUrl = getFilePreview(uploadedFile.$id);

      // Delete the old image if an image URL was previously provided
      if (updatedPost.previousImageUrl) {
        const oldFileId = extractFileIdFromUrl(updatedPost.previousImageUrl);
        if (oldFileId) {
          await deleteFile(oldFileId); // Delete the old image from Appwrite storage
        }
      }
    }

    // Update the document with the new title, description, and image URL
    const updatedProject = await databases.updateDocument(
      appwriteConfig.databaseId,
      appwriteConfig.collectionId,
      projectId,
      {
        title: updatedPost.title,
        image: fileUrl,
        excerpt: updatedPost.excerpt,
      }
    );

    return { success: true, updatedProject };
  } catch (error) {
    console.error("Error updating project:", error);
    return { success: false, message: error.message };
  }
}

export async function getAllBlogs() {
  try {
    const posts = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.BlogId
    );

    if (!posts) throw Error;
    console.log(posts)
    return posts;
  } catch (error) {
    console.log(error);
  }
}

// ============================== CREATE BLOG POST
export async function createBlog(blog) {
  try {
    console.log(blog, "Creating Blog Post");

    // Upload the image file to Appwrite storage
    const uploadedImage = await uploadBlogFile(blog.image);
    console.log(uploadedImage, "Uploaded Image");
    if (!uploadedImage) {
      throw new Error("Image upload failed.");
    }

    // Generate the preview URL of the uploaded image
    const imageUrl = getBlogFilePreview(uploadedImage.$id);
    console.log(imageUrl, "Image URL");
    if (!imageUrl) {
      await deleteFile(uploadedImage.$id);
      throw new Error("Failed to generate image preview URL.");
    }

    // Create a new blog post with title, description, content, and image URL
    const newBlogPost = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.BlogId,
      ID.unique(),
      {
        title: blog.title,
        description: blog.description,
        content: blog.content,
        image: imageUrl,
      }
    );

    if (!newBlogPost) {
      await deleteFile(uploadedImage.$id); // Cleanup if blog creation fails
      throw new Error("Failed to create the blog post.");
    }

    return { success: true, newBlogPost };
  } catch (error) {
    console.error("Error creating blog post:", error);
    return { success: false, message: error.message };
  }
}

// ============================== UPLOAD FILE
export async function uploadBlogFile(file) {
  try {
    // Upload the file using Appwrite Storage
    const uploadedFile = await storage.createFile(
      appwriteConfig.storageId,
      ID.unique(),
      file
    );

    return uploadedFile;
  } catch (error) {
    console.error("Error uploading file:", error);
    return null;
  }
}

// ============================== GET FILE PREVIEW URL
export function getBlogFilePreview(fileId) {
  try {
    // Get the preview URL of the uploaded image
    const fileUrl = storage.getFilePreview(
      appwriteConfig.storageId,
      fileId,
      2000, // Image width
      2000, // Image height
      "top", // Focus on top for preview
      100 // Quality percentage
    );

    if (!fileUrl) {
      throw new Error("Failed to get image preview URL.");
    }

    return fileUrl;
  } catch (error) {
    console.error("Error getting image preview URL:", error);
    return null;
  }
}




export async function getBlogPostById(blogId) {
  return databases.getDocument(
    appwriteConfig.databaseId,
    appwriteConfig.BlogId,
    blogId
  );
}

export async function updateBlog(blogId, updatedBlog) {
  try {
    let fileUrl = updatedBlog.image; // Assume the image URL is provided initially

    // If a new image is provided as a File, upload it
    if (updatedBlog.image instanceof File) {
      // Upload the new image
      const uploadedFile = await uploadBlogFile(updatedBlog.image);
      if (!uploadedFile) {
        throw new Error("File upload failed.");
      }

      // Get the URL for the new uploaded image
      fileUrl = getBlogFilePreview(uploadedFile.$id);

      // Delete the old image if an image URL was previously provided
      if (updatedBlog.previousImageUrl) {
        const oldFileId = extractFileIdFromUrl(updatedBlog.previousImageUrl);
        if (oldFileId) {
          await deleteFile(oldFileId); // Delete the old image from Appwrite storage
        }
      }
    }

    // Update the document with the new title, description, content, and image URL
    const updatedBlogData = await databases.updateDocument(
      appwriteConfig.databaseId,
      appwriteConfig.BlogId,
      blogId,
      {
        title: updatedBlog.title,
        image: fileUrl,
        description: updatedBlog.description, // Short description
        content: updatedBlog.content, // Full blog content
      }
    );

    return { success: true, updatedBlogData };
  } catch (error) {
    console.error("Error updating blog:", error);
    return { success: false, message: error.message };
  }
}


export async function deleteBlogById(blogId, imageUrl) {
  try {
    // Delete the document (post)
    const result = await databases.deleteDocument(
      appwriteConfig.databaseId,
      appwriteConfig.BlogId,
      blogId
    );
    console.log("Post deleted", result);

    // Extract file ID from image URL
    const fileId = extractFileIdFromUrl(imageUrl);

    if (fileId) {
      // Delete the image from storage
      const deleteFileResult = await storage.deleteFile(
        appwriteConfig.storageId, // Make sure this is the correct bucket ID
        fileId
      );
      console.log("Image deleted", deleteFileResult);
    } else {
      console.log("No valid file ID found in the image URL.");
    }
  } catch (error) {
    console.log("Error deleting post or image:", error);
  }
}
export async function getLimitBlogs() {
  try {
    // Passing the limit as an option directly to listDocuments
    const posts = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.BlogId,
      [Query.limit(3)]
    );

    if (!posts) throw new Error("No posts found");
    console.log(posts);
    return posts;
  } catch (error) {
    console.error("Error fetching limited posts:", error);
  }
}