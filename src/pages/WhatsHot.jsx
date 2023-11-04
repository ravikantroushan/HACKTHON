import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Typography } from "@material-ui/core";

const WhatsHot = () => {
  const [whatsHotData, setWhatsHotData] = useState([]);

  useEffect(() => {
    const fetchWhatsHot = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movies/get-popular-movies",
          {
            params: {
              api_key: "YOUR_TMDB_API_KEY", // Replace with your TMDB API key
            },
          }
        );

        setWhatsHotData(response.data.results);
      } catch (error) {
        console.error("Error fetching what's hot data:", error);
      }
    };

    fetchWhatsHot();
  }, []);

  return (
    <Container>
      <Typography variant="h4">{"What's Hot"}</Typography>
      {/* Add code to display what's hot data */}
    </Container>
  );
};

export default WhatsHot;
