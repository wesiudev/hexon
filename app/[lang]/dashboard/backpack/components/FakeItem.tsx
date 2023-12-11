import { FaImage } from "react-icons/fa";

export const FakeItem = () => {
  return (
    <div
      className="bg-gradient-to-r 
            from-purple-600
            vie-purple-800
            to-purple-900
            animate-gradient-x aspect-square flex items-center justify-center"
    >
      <FaImage className="w-10 h-10 text-white opacity-70" />
    </div>
  );
};
