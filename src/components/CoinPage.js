import { useParams } from "react-router-dom";
import { useFetch } from "../hooks";

const CoinPage = () => {
  const { name } = useParams();

  const { data, status } = useFetch(
    `https://api.coingecko.com/api/v3/coins/${name}`
  );

  return (
    <>
      <h1>Coin Page</h1>
      <pre>{JSON.stringify(data, undefined, 2)}</pre>
    </>
  );
};

export default CoinPage;
