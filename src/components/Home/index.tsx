import { Wrapper, CardListWrapper, Loader } from "./styles";

import ProductCard from "./ProductCard";
import Cart from "../Cart";
import { useGetPrice } from "../utils/hooks";

const Home = () => {
  const { listData, isLoading } = useGetPrice();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Wrapper>
        <CardListWrapper>
          {listData.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </CardListWrapper>
        <Cart />
      </Wrapper>
    </>
  );
};

export default Home;
