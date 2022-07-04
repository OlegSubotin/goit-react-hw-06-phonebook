import Section from "components/Section";
import Form from "components/Form";
import Filter from "components/Filter";
import ContactsList from "components/ContactsList";

function App() {
  return (
    <>
      <Section title={"Phonebook"}>
        <Form />
      </Section>
      <Section title={"Contacts"}>
        <Filter/>
        <ContactsList/>
      </Section>
    </>
  );
};

export default App;