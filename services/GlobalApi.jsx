import { Account, Client,Databases } from "appwrite";
const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(process.env.PROJECT_ID);

const databases = new Databases(client);
const account = new Account(client);

export const login = async()=>{
const promise = account.createEmailPasswordSession(
  "email@example.com",
  "password"
);

promise.then(
  function (response) {
    console.log(response); // Success
  },
  function (error) {
    console.log(error); // Failure
  }
);
}

export const listProjects = async() =>{
     await databases.listDocuments(process.env.DATABASE_ID,process.env.COLLECTION_ID).then(resp=>{
        console.log(resp)
    })
}

