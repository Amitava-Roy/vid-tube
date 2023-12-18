"use client";

interface ButtonProps {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}
const IconButton: React.FC<
  React.PropsWithChildren<ButtonProps>
> = ({ children, className = "", onClick }) => {
  return (
    <div
      className={`cursor-pointer p-2 rounded-full hover:bg-stone-800 ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default IconButton;
