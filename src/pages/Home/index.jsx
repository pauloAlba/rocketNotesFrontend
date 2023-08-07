import { FiPlus, FiSearch } from "react-icons/fi"
import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Section } from"../../components/Section"
import { Note } from "../../components/Note";

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText isActive title={"Todos"} />
        </li>
        <li>
          <ButtonText title={"React"} />
        </li>
        <li>
          <ButtonText title={"Nodejs"} />
        </li>


      </Menu>

      <Search>
        <Input placeholder="pesquisar pelo titulo" icon={FiSearch}/>
      </Search>

      <Content>
        <Section title="Minhas Notas">
          <Note data={{
            title: 'React', 
            tags: [
              {id: "1", name:"react"},
              {id: "2", name:"rocketseat"}
            ]
            }}/>
        </Section>
      </Content>

      <NewNote>
        <FiPlus>
         
        </FiPlus>
        Criar nota
      </NewNote>
    </Container>
  );
}
