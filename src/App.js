import React, { Component } from 'react';
import Users from './Components/Users';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Users />
      </div>
    );
  }
}

export default App;


//Za pomocą `fetch` zfetchuj dane 10 userów z Random User API ( https://randomuser.me/api/?results=10 ) i wyświetl je (zdjęcie i mail) na stronie jeden pod drugim. Technologia dowolna. Wynik (repo na GitHubie, zip z plikami, link do kodu online (np https://codesandbox.io/s/react) - bez różnicy) prześlij mi w wiadomości prywatnej.
