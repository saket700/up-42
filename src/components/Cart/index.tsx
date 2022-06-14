import { IProductDetails } from "../utils/constants";
import { useAppContext } from "../utils/hooks";
import {
  CartWrapper,
  CartItemWrapper,
  Title,
  Credits,
  CartHeader,
  Total,
  Button,
  IconWrapper,
  TitleWrapper,
  ErrorMessage,
} from "./styles";
import { AiTwotoneDelete } from "react-icons/ai";

const CartItem = (item: IProductDetails) => {
  const { removeFromCart } = useAppContext();
  return (
    <CartItemWrapper>
      <TitleWrapper>
        <Title>{item.displayName}</Title>
        <IconWrapper>
          <AiTwotoneDelete size={28} onClick={() => removeFromCart(item)} />
        </IconWrapper>
      </TitleWrapper>
      <Credits>Credits : {item.credits} </Credits>
    </CartItemWrapper>
  );
};

const Cart = () => {
  const { cartData, total, clearCart, errorMessage } = useAppContext();
  return (
    <CartWrapper>
      <CartHeader>Cart</CartHeader>
      {cartData.map((item) => (
        <CartItem {...item} />
      ))}
      <Total>Total credits: {total}</Total>
      {<ErrorMessage>{errorMessage}</ErrorMessage>}
      <Button onClick={clearCart}>Checkout</Button>
    </CartWrapper>
  );
};

export default Cart;
