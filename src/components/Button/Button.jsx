function Button({ label, onClick, disabled, notRoundedStart }) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={` bg-primaryColor text-white py-2 px-5 font-medium rounded  transition-colors duration-300 hover:bg-btnHoverBg
        ${notRoundedStart ? "md:rounded-s-none" : "rounded-md"}
        
        
        
        `}
    >
      {label}
    </button>
  );
}

export default Button;
//  border rounded-md font-semibold bg-btnPrimaryColor text-white transition-colors
//  duration-300 hover:bg-hover

// md:rounded-s-none rounded-e-md
