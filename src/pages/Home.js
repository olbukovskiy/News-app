import { Container } from "components/Container/Container";
import { FilterBar } from "components/Filter/FilterBar";

export const Home = function () {
  return (
    <section style={{ padding: "60px 0" }}>
      <Container>
        <FilterBar />
      </Container>
    </section>
  );
};
