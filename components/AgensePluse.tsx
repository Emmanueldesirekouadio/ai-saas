type AgensePluseProps = {
  size?: "small" | "medium" | "large";
  color?: "blue" | "green" | "yellow" | "red";
};

export default function AgensePluse({
  size = "medium",
  color = "blue",
}: AgensePluseProps) {
  const sizeClasses = {
    small: "w-4 h-4",
    medium: "w-12 h-12",
    large: "w-16 h-16",
  };
  const colorClasses = {
    blue: "bg-blue-700 shadow-[0_0_8px_4px_rgba(20,61,96,0.5)]",
    green: "bg-green-500 shadow-[0_0_8px_4px_rgba(34,197,94,0.5)]",
    yellow: "bg-yellow-500 shadow-[0_0_8px_4px_rgba(234,179,8,0.5)]",
    red: "bg-red-500 shadow-[0_0_8px_4px_rgba(239,68,68,0.5)]",
  };
  return (
    <div
      className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full`}
    ></div>
  );
}
