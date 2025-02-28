interface ButtonProps {
    text: string;
    onClick?: () => void;
    type?: "submit" | "button";
  }
  
  export default function Button({ text, onClick, type = "button" }: ButtonProps) {
    return (
      <button
        type={type}
        onClick={onClick}
        className="w-full py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition duration-200 ease-in-out"
      >
        {text}
      </button>
    );
  }
  