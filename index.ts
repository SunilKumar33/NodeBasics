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
