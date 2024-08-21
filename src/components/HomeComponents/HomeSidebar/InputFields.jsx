const InputFields = ({ handleChange, value, title, name }) => {
  return (
    <div>
      <label className="block  pl-9 mb-3 cursor-pointer ">
        <input type="radio" name={name} value={value} onChange={handleChange} />
        <span className="top-0 left-0 h-5 w-5 rounded-full bg-[#eee] mr-2"></span>
        {title}
      </label>
    </div>
  );
};

export default InputFields;
