const Input = ({ placeholder, icon: Icon, handleInputChange, name, id }) => {
  return (
    <div className="flex  rounded-md shadow-sm w-full">
      <input
        onChange={handleInputChange}
        type="text"
        name={name}
        id={id}
        className="block relative w-full rounded-sm md:rounded-e-none border-0 py-2 pl-7 pr-20 text-gray-700 font-medium ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primaryColor sm:text-sm sm:leading-6"
        placeholder={placeholder}
      />
      <Icon className="absolute mt-2.5 ml-2 text-gray-400" />
    </div>
  );
};

export default Input;
