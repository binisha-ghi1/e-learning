

const Button = ({ title }) => {
  return (
    <div>
      <button className="bg-yellow-800 text-white rounded-full p-4 flex items-center gap-x-2 ">
        {title}
       
      </button>
    </div>
  );
};

export default Button;