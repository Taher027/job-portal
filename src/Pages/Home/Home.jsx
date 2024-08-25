/* eslint-disable react-hooks/exhaustive-deps */

import Container from "../../components/Container/Container";
import Banner from "../../components/HomeComponents/HomeBanner/HomeBanner/Banner";
import { useState } from "react";
import HomeFeaturesJobs from "../../components/HomeComponents/HomeFeaturesJobs/HomeFeaturesJobs";

const Home = () => {
  const [queryValues, setQueryValues] = useState({
    searchTerm: "",
    location: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setQueryValues({
      ...queryValues,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("searchTerm", queryValues.searchTerm);
    console.log("location", queryValues.location);
  };

  return (
    <div>
      <Banner
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
      />
      <section>
        <Container>
          <HomeFeaturesJobs />
        </Container>
      </section>
    </div>
  );
};

export default Home;
