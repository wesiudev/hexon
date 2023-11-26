import { useUserData } from "@/app/hooks/useUserData";
import { updateUserHistory } from "@/common/firebase";
import { openai } from "@/common/openai/config";
import { FaImage } from "react-icons/fa";
export default function GenerateButton(props: any) {
  const {
    setIsGenerationPending,
    setImageLoaded,
    setImageResponse,
    setHasImage,
    userPrompt,
    size,
    isGenerationPending,
    setIsGenerationTriggered,
    setIsError,
    isError,
    displayError,
    place,
    dictionary,
  } = props;
  const { userData } = useUserData();
  const generateImage = async () => {
    let accountHistory;
    try {
      setIsError(false);
      setIsGenerationPending(true);
      setImageLoaded(false);
      const imageParameters: any = {
        prompt: userPrompt,
        //n: parseInt(number),
        n: 1,
        size: size,
        response_format: "b64_json",
      };
      const response = await openai.createImage(imageParameters);
      const image = response.data.data[0].b64_json;
      setImageResponse(image);
      if (response)
        accountHistory = {
          creationTime: Date.now(),
          action: "Rendered image",
        };
      updateUserHistory({
        email: userData.email,
        accountHistory: accountHistory,
      });
      setIsGenerationPending(false);
      setHasImage(true);
    } catch (error: any) {
      if (error.response)
        accountHistory = { creationTime: Date.now(), action: "Render failed" };
      updateUserHistory({
        email: userData.email,
        accountHistory: accountHistory,
      });
      setIsGenerationPending(false);
      setIsError(true);
      displayError(error.response.data.error.message);
    }
  };

  const handleImageGeneration = async () => {
    generateImage();
    setIsGenerationTriggered(true);
  };

  return (
    <>
      {place === "generator" && (
        <button
          disabled={isGenerationPending || isError}
          className={`disabled:${
            isError ? "bg-red-500" : ""
          } disabled:opacity-50 h-max z-[51] disabled:cursor-not-allowed flex flex-row bg-gradient-to-t from-rose-600  to-purple-700 hover:from-rose-700 hover:to-purple-700 duration-75 ease-in  items-center justify-center shadow-sm shadow-black w-full p-2 text-center mx-auto lg:mx-0 text-gray-50 hover:transition-transform cursor-pointer py-4 px-8 rounded-b-xl text-2xl `}
          onClick={handleImageGeneration}
        >
          {!isGenerationPending && (
            <>
              <FaImage className="mr-1 mt-1" />
              <span>{dictionary.Generator.generate}</span>{" "}
            </>
          )}

          {isGenerationPending && (
            <div role="status">
              <svg
                aria-hidden="true"
                className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">
                {dictionary.Technical.loading_please_wait}
              </span>
            </div>
          )}
        </button>
      )}
      {place === "popup" && (
        <button
          disabled={isGenerationPending || isError}
          className={`disabled:${
            isError ? "bg-red-500" : ""
          } disabled:opacity-50 `}
          onClick={handleImageGeneration}
        >
          Try again
        </button>
      )}
    </>
  );
}
