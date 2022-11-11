export const Button = ({ onClick, children, type }) => {
  if (type === 'secondary') {
    return (
      <button onClick={onClick} className='bg-transparent py-3 px-8 rounded-full border hover:text-black hover:bg-white'>
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
