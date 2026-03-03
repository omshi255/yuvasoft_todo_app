// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ children, ...props }: Props) => {
  return (
    <button
      {...props}
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
    >
      {children}
    </button>
  );
};

export default Button;
