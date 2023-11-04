import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Typography } from "@material-ui/core";

const NewReleases = () => {
  const [newReleasesData, setNewReleasesData] = useState([]);

  useEffect(() => {
    const fetchNewReleases = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movies/get-now-playing",
          {
            params: {
              api_key: "YOUR_TMDB_API_KEY", // Replace with your TMDB API key
            },
          }
        );

        setNewReleasesData(response.data.results);
      } catch (error) {
        console.error("Error fetching new releases:", error);
      }
    };

    fetchNewReleases();
  }, []);

  return (
    <Container>
      <Typography variant="h4">New Releases</Typography>
      {/* Add code to display new releases data */}
    </Container>
  );
};

export default NewReleases;
