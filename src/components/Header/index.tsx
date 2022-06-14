import { useAppContext } from "../utils/hooks";
import { Header, Text } from "./styles";

export default function HeaderBar() {
  const { total } = useAppContext();
  return (
    <Header>
      <Text>Credits: {10000 - total}</Text>
    </Header>
  );
}
