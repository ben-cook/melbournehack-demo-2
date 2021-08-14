import {
  Container,
  Typography,
  Card,
  Grid,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";

const API_URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios(API_URL).then((res) => setData(res.data.slice(0, 15)));
  }, []);

  return (
    <Container>
      <Typography variant="h3">Cryptocurrencies!</Typography>

      <Grid container spacing={2}>
        {data &&
          data.map((coin) => (
            <Grid item key={coin.name} xs={3}>
              <Card>
                <CardMedia
                  image={coin.image}
                  style={{ height: 250 }}
                ></CardMedia>
                <CardContent>
                  <Typography variant="h6">{coin.name}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>

      <pre>{JSON.stringify(data, undefined, 2)}</pre>
    </Container>
  );
}

export default App;
