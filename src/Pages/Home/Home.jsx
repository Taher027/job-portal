import { useEffect, useState } from "react";
import Banner from "../../components/HomeBanner/Banner";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [job, setJobs] = useState([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");

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

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };
  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange} />
    </div>
  );
};

export default Home;
