import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const CoinCard = ({
  name,
  image,
  current_price: price,
  symbol,
  market_cap,
  id,
}) => {
  const history = useHistory();

  return (
    <Card onClick={() => history.push(`/${id}`)}>
      <CardMedia image={image} style={{ height: 250 }}></CardMedia>
      <CardContent>
        <Typography variant="h6">
          {name} ({symbol})
        </Typography>
        <Typography variant="body1">Trading at ${price} AUD</Typography>
        <Typography variant="body1">Market cap of ${market_cap}</Typography>
      </CardContent>
    </Card>
  );
};

export default CoinCard;
