import type { ReactNode } from "react";

type InputProps = {
  label?:string
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  icon1?: ReactNode;
  icon2?: ReactNode;
  required?: boolean;
  accept?:string

  name?: string;
  className?: string;
};

export const Input: React.FC<InputProps> = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  icon1,
  icon2,
  error,
  required,
  accept,
  name,
  className,
}) => {
  return (
    <div className="grid grid-cols-1 justify-between relative gap-3 overflow-y-hidden">
      {icon1 && (
        <span className="absolute  left-1 top-1/2 -translate-y-1/2  hover:-translate-y-3">
          {icon1}
        </span>
      )}
<label htmlFor="">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        accept={accept}
        name={name}
        className={`px-6 py-2 border rounded-md outline-0 hover:focus:border-blue-400 overflow-0  hover:border-3 transition ${
          error ? "border-red-500" : "border-gray-300"
        }  ${className || ""}`}
      />
      {icon2 && (
        <span className="absolute right-3 top-1/2 -translate-y-1/2">
          {icon2}
        </span>
      )}
      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
    </div>
  );
};
