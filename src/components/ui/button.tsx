import cls from "classnames";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

export default function Button({ className, ...props }: ButtonProps) {
  return (
    <button
      className={cls(
        "border border-alto w-full py-[21px] bg-bright-gray text-md rounded-2xl shadow-button-shadow hover:bg-primary active:bg-primary hover:text-white active:text-white px-4",
        className
      )}
      {...props}
    />
  );
}
