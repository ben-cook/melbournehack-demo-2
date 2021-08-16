import { Typography } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks";

const CoinPage = () => {
  const { id } = useParams();

  const { data, status } = useFetch(
    `https://api.coingecko.com/api/v3/coins/${id}`
  );

  if (status !== "succeeded") {
    return <Typography>Loading...</Typography>;
  }

  const { name, description } = data;

  return (
    <>
      <Typography variant="h3">{name}</Typography>
      <div dangerouslySetInnerHTML={{ __html: description.en }}></div>
    </>
  );
};

export default CoinPage;
