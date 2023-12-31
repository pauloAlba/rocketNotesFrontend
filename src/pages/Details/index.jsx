import { Container, Links, Content } from "./styles";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title={"Excluir nota"} />

          <h1>Introdução ao Ract</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, ipsum maiores consequuntur quo dolorem eveniet distinctio cum placeat consectetur temporibus, tempore quod, reprehenderit officiis recusandae ducimus nostrum ipsa magnam omnis.</p>

          <Section title={"Links úteis"}>
            <Links>
              <li>
                <a href="#">https://www.rocketseat.com.br</a>
              </li>
              <li>
                <a href="#">https://www.rocketseat.com.br</a>
              </li>
            </Links>
          </Section>

          <Section title={"Marcadores"}>
            <Tag title={"express"} />
            <Tag title={"nodejs"} />
          </Section>

          <Button title={"Voltar"} />
        </Content>
      </main>
    </Container>
  );
}

export default Details;
