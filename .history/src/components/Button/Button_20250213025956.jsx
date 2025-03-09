

const Button = ({ title }) => {
  return (
    <div>
      <button className="bg-yellow-500 text-blue-950  p-4 flex items-center gap-x-2 ">
        {title}
       
      </button>
    </div>
  );
};

export default Button;