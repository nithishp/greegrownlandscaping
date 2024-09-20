import { Client, Account, Databases, Storage, Avatars,ID } from "appwrite";

export const appwriteConfig = {
  url: process.env.NEXT_PUBLIC_APPWRITE_URL,
  projectId: process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID,
  databaseId: process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
  storageId: process.env.NEXT_PUBLIC_APPWRITE_STORAGE_ID,
  collectionId: process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID,
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