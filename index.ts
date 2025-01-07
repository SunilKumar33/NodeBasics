import { promises as fs } from "fs";

const getMessagePromise = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    const message: string = "Hello, this is a Promise example!";
    if (message) {
      resolve(message);
    } else {
      reject("No message found.");
    }
  });
};

getMessagePromise()
  .then((message: string) => console.log(message))
  .catch((error: string) => console.error(error));

const createFile = async (): Promise<void> => {
  try {
    const data: string =
      "This is a new file created using fs module and async/await in TypeScript.";
    await fs.writeFile("example.txt", data, "utf-8");
    console.log("File created successfully!");
  } catch (error) {
    console.error("Error creating file:", error);
  }
};

// Call the file creation function
createFile();
