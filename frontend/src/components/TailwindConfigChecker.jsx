import axios from "axios";
import { useEffect } from "react";

const TailwindConfigChecker = () => {
  //remove the following useEffect. Its just a basic check if your axios versions is working or not.
  // please check the console and make sure you have a response like
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos/1",
        );
        if (response.status === 200) {
          console.log("Yes. Axios is installed");
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <main className="flex justify-center items-center w-full h-screen">
      <div className="w-1/2 bg-purple-500 h-95 flex justify-center p-2 rounded-2xl flex-col">
        <h1 className="text-4xl leading-tight text-white text-center">
          You are seeing this text as white color and the background is purple
          then are ready to go. Your project is already configured with the
          tailwindcss version 4.
        </h1>
        <p className="text-lg font-semibold mt-10 text-white">
          I have also installed the axios package. You can check the console and
          it shows a response "Yes. Axios is installed".
        </p>
      </div>
    </main>
  );
};

export default TailwindConfigChecker;
