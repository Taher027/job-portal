import Card from "../../Card/Card";

const HomeFeaturesJobs = () => {
  const dumyData = [
    {
      _id: 1,
      title: "Frontend Developer",
      companyName: "Tech Solutions Inc.",
      minPrice: 60000,
      maxPrice: 80000,
      salaryType: "Annual",
      location: "New York, NY",
      postingDate: "2024-08-01",
      experienceLevel: "Mid-level",
      employmentType: "Full-time",
      tags: [
        "react js",
        "next js",
        "node js",
        "express js",
        "website developer",
        "mern developer",
        "web design",
        "web redesign",
      ],
      description:
        "We are looking for a Frontend Developer skilled in React and Tailwind CSS to join our dynamic team. The ideal candidate will have experience in building responsive and user-friendly web applications.",
    },
    {
      _id: 2,
      title: "Backend Engineer",
      companyName: "Innovatech",
      minPrice: 70000,
      maxPrice: 90000,
      salaryType: "Annual",
      location: "San Francisco, CA",
      postingDate: "2024-07-25",
      experienceLevel: "Senior-level",
      employmentType: "Full-time",
      description:
        "Innovatech is seeking a Senior Backend Engineer with expertise in Node.js, Express, and MongoDB. The role involves designing and implementing scalable backend services for our cloud-based solutions.",
    },
    {
      _id: 3,
      title: "UI/UX Designer",
      companyName: "Creative Minds Studio",
      minPrice: 50000,
      maxPrice: 70000,
      salaryType: "Annual",
      location: "Remote",
      postingDate: "2024-08-15",
      experienceLevel: "Junior-level",
      employmentType: "Contract",
      description:
        "Creative Minds Studio is looking for a talented UI/UX Designer to create engaging and user-centric designs. This is a remote position, ideal for someone with a passion for design and a strong portfolio.",
    },
  ];

  return (
    <div>
      <h2 className="text-center text-3xl md:text-5xl font-bold text-secondaryColor pt-20">
        Features Jobs
      </h2>
      <p className="text-center pt-3 text-md">
        Chose your perfect matching jobs and apply now
      </p>
      <div className="py-16 grid lg:grid-cols-2 gap-10">
        {dumyData.map((data) => (
          <Card key={data._id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default HomeFeaturesJobs;
