import Card from "../../../Card/Card";

const Jobs = ({ datas }) => {
  return (
    <div className="flex flex-col gap-3  ">
      <div>
        <p className="text-2xl text-primary font-semibold">
          {datas?.length > 0 ? (
            `${datas?.length}Jobs`
          ) : (
            <span className="text-2xl text-primary font-semibold">
              No Jobs Found
            </span>
          )}
        </p>
      </div>
      {datas?.map((data, index) => (
        <Card key={index} data={data} length={datas?.length} />
      ))}
    </div>
  );
};

export default Jobs;
