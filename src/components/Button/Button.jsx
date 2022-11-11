export const Button = ({ onClick, children, type, size }) => {
  if (type === 'secondary') {
    return (
      <button onClick={onClick} className={`bg-transparent ${size === "small"? "py-2 px-[20px] text-sm":"py-3"} px-8 rounded-full border hover:text-black hover:bg-white`}>
        {children}
      </button>
    );
  } else {
    return (
      <button onClick={onClick} className='bg-primary py-3 px-8 rounded-full hover:bg-blue-700'>
        {children}
      </button>
    );
  }
};
