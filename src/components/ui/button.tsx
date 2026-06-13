type ButtonProps = {
  type?: "submit" | "reset" | "button";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger" | "contact" | "access";
  size?: "sm" | "md" | "lg" | "back" | "get";
};

const variants = {
  primary: "bg-[#CA9C72] text-white  ",
  secondary: "bg-white text-[#CA9C72]",
  danger: "bg-red-500 text-white",
  contact: "bg-[#CA9C72] text-black",
  access: "bg-[1F8AEE] text-white",
};
const sizes = {
  sm: "px-4 py-1 text-[12px] w-full rounded-full",
  md: "px-6 py-2 text-[14px] w-full rounded-lg",
  lg: "px-8 py-2 text-[16px] w-[450px] rounded-lg ",
  get: "px-4 py-2 w-[450px] rounded-[30px] rounded-full",
  back: "w-fit",
};

export const Button = ({
  children,
  type,
  className = "",
  onClick,
  variant = "primary",
  size = "sm",
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`px-[30px] py-[10px]   cursor-pointer font-bold text-[20px] ${variants[variant]} ${sizes[size]} ${className} `}
    >
      {children}
    </button>
  );
};
