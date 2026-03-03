type Props = React.InputHTMLAttributes<HTMLInputElement>

const Input = (props: Props) => {
  return (
    <input {...props} className="border border-gray-300 p-2 rounded w-full" />
  );
};

export default Input;
