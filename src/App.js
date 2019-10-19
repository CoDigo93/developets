import React, { useState, useEffect } from 'react';
import { Container, Card, Header, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import { PetCard } from './components/PetCard';
import fetchPets from './services/pets';

function App() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await fetchPets();
      setPets(result);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Header as="h1" icon textAlign="center" className="App-title">
          <Icon name="paw" />
          <Header.Content>DeveloPets</Header.Content>
        </Header>
      </header>
      <div className="App-content">
        <Container>
          <Card.Group stackable>{pets.map(pet => PetCard(pet))}</Card.Group>
        </Container>
      </div>
    </div>
  );
}

export default App;
