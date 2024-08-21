import InputFields from "./InputFields";

const Location = ({ handleChange }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Location</h4>
      <div>
        <label className="block  pl-9 mb-3 cursor-pointer ">
          <input type="radio" name="filter" onChange={handleChange} value="" />
          <span className=" relative top-0 left-0 h-5 w-5 rounded-full bg-[#eee] mr-2"></span>
          All
        </label>
        <InputFields
          handleChange={handleChange}
          name="filter"
          title="London"
          value="London"
        />
        <InputFields
          handleChange={handleChange}
          name="filter"
          title="Boston"
          value="boston"
        />
        <InputFields
          handleChange={handleChange}
          name="filter"
          title="Brussels"
          value="brussels"
        />
        <InputFields
          handleChange={handleChange}
          name="filter"
          title="Seattle"
          value="seattle"
        />
        <InputFields
          handleChange={handleChange}
          name="filter"
          title="North Asia"
          value="north asia"
        />
      </div>
    </div>
  );
};

export default Location;
