import { Container, Typography } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";

const API_URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios(API_URL).then((res) => setData(res.data));
  }, []);

  return (
    <Container>
      <Typography variant="h3">Cryptocurrencies!</Typography>
      <pre>{JSON.stringify(data, undefined, 2)}</pre>
    </Container>
  );
}

export default App;
