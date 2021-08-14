import { Typography, Grid } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import CoinCard from "./CoinCard";

const API_URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc";

const HomePage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios(API_URL).then((res) => setData(res.data.slice(0, 30)));
  }, []);

  return (
    <>
      <Typography variant="h3">Cryptocurrencies!</Typography>

      <Grid container spacing={2}>
        {data &&
          data.map((coin) => (
            <Grid item key={coin.name} xs={3}>
              <CoinCard {...coin} />
            </Grid>
          ))}
      </Grid>

      <pre>{JSON.stringify(data, undefined, 2)}</pre>
    </>
  );
};

export default HomePage;
