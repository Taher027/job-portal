/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Banner from "../../components/HomeBanner/Banner";
import Jobs from "../Jobspage/Jobs";
import Container from "../../components/Container/Container";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const [finalFilteredJobsData, setFinalFilteredJobsData] = useState([]);

  const fetchJobsData = async () => {
    try {
      const result = await fetch("jobsData.json");
      const data = await result.json();

      setJobs(data);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchJobsData();
  }, []);
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  // filter jobs data by title
  const filteredItem = jobs?.filter(
    (job) =>
      job.jobTitle.toLowerCase().indexOf(query.toLocaleLowerCase()) !== -1
  );

  // radio item value getting
  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };
  // button based filtering
  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  };
  // filtering main function
  const filteredData = (jobs, selected, query) => {
    let filteredJobs = jobs;
    //filtering search input items
    if (query) {
      filteredJobs = filteredItem;
    }
    //if selected any category
    if (selected) {
      filteredJobs = filteredJobs.filter(
        ({ jobLocation, maxPrice, salaryType, employmentType }) =>
          jobLocation.toLowerCase() === selected.toLowerCase() ||
          parseInt(maxPrice) <= parseInt(selected) ||
          salaryType.toLowerCase() === selected.toLowerCase() ||
          employmentType.toLowerCase() === selected.toLowerCase()
      );
      console.log(filteredJobs);
    }

    setFinalFilteredJobsData(filteredJobs);
    return filteredJobs;
  };

  useEffect(() => {
    filteredData(jobs, selectedCategory, query);
  }, [jobs, selectedCategory, query]);
  console.log(finalFilteredJobsData);

  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange} />
      <Container>
        <div className=" md:grid grid-cols-4 gap-8 py-12">
          <div className="bg-white p-4 rounded">left side</div>
          <div className="col-span-2 bg-white rounded-sm">
            <Jobs datas={finalFilteredJobsData} />
          </div>
          <div className="bg-white p-4 rounded">right side </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
