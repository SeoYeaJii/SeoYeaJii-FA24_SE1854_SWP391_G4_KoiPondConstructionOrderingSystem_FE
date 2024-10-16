import React, { useState, InputHTMLAttributes } from "react";
import eyeopen from "assets/icons/eyeopen.svg";
import eyeclose from "assets/icons/eyehide.svg";
interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?:
    | "light"
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "dark"
    | "info";
  width?: string | number;
  height?: string | number;
  color?: string;
  fontSize?: string;
  borderRadius?: string;
  outline?: string;
  isPassword?: boolean; // Thêm thuộc tính để xác định nếu input là password
}

export const InputPassword: React.FC<CustomInputProps> = ({
  width,
  variant,
  height,
  color,
  fontSize,
  borderRadius,
  outline,
  isPassword,
  className,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const inputType = isPassword && !showPassword ? "password" : "text";

  const baseStyles = "border px-4 py-2 rounded-lg focus:outline-none";

  let variantStyles: string;

  switch (variant) {
    case "primary":
      variantStyles = "bg-primary text-black px-4 py-2 text-green-500";
      break;
    case "secondary":
      variantStyles = "bg-secondary text-black px-4 py-2 text-green-500";
      break;
    case "success":
      variantStyles = "bg-success text-black px-4 py-2 text-green-500";
      break;
    case "danger":
      variantStyles = "bg-danger text-black px-4 py-2 text-green-500";
      break;
    case "warning":
      variantStyles = "bg-warning text-black px-4 py-2 text-green-500";
      break;
    case "info":
      variantStyles = "bg-info text-black px-4 py-2 text-green-500";
      break;
    case "dark":
      variantStyles = "bg-dark text-white px-4 py-2 text-green-500";
      break;
    case "light":
      variantStyles = "bg-variantStyles text-black px-4 py-2 text-green-500";
      break;

    default:
      variantStyles = " text-black px-4 py-2";
      break;
  }

  return (
    <div className={`relative`}>
      <input
        type={inputType}
        className={`${variantStyles} ${baseStyles} ${className}`}
        style={{
          width,
          height,
          color,
          fontSize,
          borderRadius,
          outline,
        }}
        {...props}
      />
      {isPassword && (
        <div
          className="absolute inset-y-0 right-[12.5%] top-[-8%] flex items-center cursor-pointer transform"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? (
            <img src={eyeclose} alt={""}></img>
          ) : (
            <img src={eyeopen} alt={""}></img>
          )}
        </div>
      )}
    </div>
  );
};
