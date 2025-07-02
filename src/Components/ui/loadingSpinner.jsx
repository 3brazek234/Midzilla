const LoadingSpinner = ({ size = "md", color = "blue" }) => {
  const sizes = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
    xl: "w-16 h-16"
  };

  const colors = {
    blue: "border-blue-500",
    green: "border-green-500",
    red: "border-red-500",
    yellow: "border-yellow-500",
    purple: "border-purple-500",
    white: "border-white"
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div
        className={`
          ${sizes[size] || sizes.md}
          ${colors[color] || colors.blue}
          animate-spin
          rounded-full
          border-2
          border-t-transparent
          border-r-transparent
        `}
      />
    </div>
  );
};

export default LoadingSpinner;
