import { IProductDetails } from "../utils/constants";
import { useAppContext } from "../utils/hooks";
import { PriceWrapper, Card, Text, Button } from "./styles";

const ProductCard: React.FC<IProductDetails> = (props) => {
  const { displayName, credits, id } = props;
  const { addToCart, isDisable } = useAppContext();
  return (
    <Card id={id}>
      <Text>{displayName}</Text>
      <PriceWrapper>{credits}</PriceWrapper>
      <Button onClick={() => addToCart(props)} disabled={isDisable}>
        Add to cart
      </Button>
    </Card>
  );
};

export default ProductCard;
