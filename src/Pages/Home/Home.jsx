/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Banner from "../../components/HomeComponents/HomeBanner/HomeBanner/Banner";
import Jobs from "../../components/HomeComponents/Jobs/Jobspage/Jobs";
import Container from "../../components/Container/Container";
import Sidebar from "../../components/HomeComponents/HomeSidebar/Sidebar";
import { FaSpinner } from "react-icons/fa6";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentPage, setcurrentPag] = useState(1);

  const [finalFilteredJobsData, setFinalFilteredJobsData] = useState([]);
  const itemsPerPage = 6;

  const fetchJobsData = async () => {
    try {
      setLoading(true);
      const result = await fetch("jobsData.json");
      const data = await result.json();

      setJobs(data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobsData();
  }, []);
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  // filter jobs data by title
  const filteredItems = jobs?.filter(
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
  // calculate page index range

  // function for next page
  const nextPage = () => {
    if (currentPage < Math.ceil(filteredItems.length / itemsPerPage)) {
      setcurrentPag(currentPage + 1);
    }
  };

  // function for previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setcurrentPag(currentPage - 1);
    }
  };
  const calculatePageRange = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    // console.log(startIndex, endIndex, "inside calculatePageRange");
    return { startIndex, endIndex };
  };
  // filtering main function
  const filteredData = (jobs, selected, query) => {
    let filteredJobs = jobs;
    //filtering search input items
    if (query) {
      filteredJobs = filteredItems;
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
    }

    // slice data based on current page
    const { startIndex, endIndex } = calculatePageRange();
    filteredJobs = filteredJobs.slice(startIndex, endIndex);

    setFinalFilteredJobsData(filteredJobs);
  };

  useEffect(() => {
    filteredData(jobs, selectedCategory, query);
  }, [jobs, selectedCategory, query]);

  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange} />
      <Container></Container>
    </div>
  );
};

export default Home;
