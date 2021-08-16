import { Typography, Grid } from "@material-ui/core";
import { useFetch } from "../hooks";
import CoinCard from "./CoinCard";

const HomePage = () => {
  const { data, status } = useFetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc"
  );

  if (status === "fetching") {
    return <Typography>Loading...</Typography>;
  }

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
    </>
  );
};

export default HomePage;
