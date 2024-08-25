const CampaignIntakeForm = () => {
  return (
    <div>
      <form className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
        <div className="relative">
          <label
            className={`absolute ${
              focus ? "top-1" : ""
            }  left-3 bg-white px-1 text-sm font-medium text-gray-700`}
          >
            Stad
          </label>
          <input
            type="text"
            className="w-full mt-3 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </form>
    </div>
  );
};

export default CampaignIntakeForm;
