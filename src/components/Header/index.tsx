import {
  HeaderContainer,
  HeaderContenet,
  NewTransactionButton,
} from "./styles";

import logoimg from "../../assets/logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContenet>
        <img src={logoimg} />
        <NewTransactionButton>Nova Transação</NewTransactionButton>
      </HeaderContenet>
    </HeaderContainer>
  );
}
