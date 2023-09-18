import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import {
  PriceHightLight,
  TransactionsTable,
  TrasactionsContainer,
} from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TrasactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de software</td>
              <td>
                <PriceHightLight variant="income">R$ 12.000,00</PriceHightLight>
              </td>
              <td>venda</td>
              <td>16/09/2023</td>
            </tr>
            <tr>
              <td width="50%">monitor</td>
              <td>
                <PriceHightLight variant="outcome">
                  - R$ 2.000,00
                </PriceHightLight>
              </td>
              <td>alimentação</td>
              <td>11/02/2023</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TrasactionsContainer>
    </div>
  );
}
