function Button({ label, onClick, disabled, notRoundedStart, type, width }) {
  console.log(disabled);
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={`   whitespace-nowrap  py-2 px-5 font-medium rounded  transition-all duration-200 
        ${notRoundedStart ? "md:rounded-s-none" : "rounded-md"}
        ${width ? "w-full" : ""}
        ${
          disabled
            ? "bg-gray-200 text-primaryColor cursor-not-allowed"
            : "bg-primaryColor hover:bg-btnHoverBg text-white "
        }
        
        
        
        `}
    >
      {label}
    </button>
  );
}

export default Button;
