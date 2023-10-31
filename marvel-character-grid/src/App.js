import React, { useEffect, useState } from 'react';
import axios from 'axios';
import md5 from 'md5';
import './App.css';


function App() {
 
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // Define your Marvel API public and private keys
    const publicKey = 'ed0d1ef9be26a5cd0799c4d22b473468';
    const privateKey = '4dd21eaa43edac6bd795410af035dc6bc697c770';


    // Generate a timestamp
    const timestamp = new Date().getTime();


    // Create an MD5 hash of timestamp, private key, and public key
    const hash = md5(timestamp + privateKey + publicKey);

    axios
      .get('http://gateway.marvel.com/v1/public/characters', {
        params: {
          ts: timestamp,
          apikey: publicKey,
          hash: hash,
        },
      })
      .then((response) => {
        const characterData = response.data.data.results;
        // Clean up data and send it to Flask API
        const cleanedCharacterData = characterData.map(character => {
          return {
            name: character.name,
            description: character.description,
            thumbnail: `${character.thumbnail.path}.${character.thumbnail.extension}`,
            sentiment: ''
          };
        });

        axios.post('http://localhost:5000/classify', cleanedCharacterData, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then((response) => {
            console.log(response.data);
            setCharacters(response.data);
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  });


  //grid ui should look something like this
  return (
    <div className="App">
      <div className="grid-container">
        {characters.map(character => (
          <div className="grid-item" key={character.name}>
            <img src={character.thumbnail} alt={character.name} />
            <div className="overlay">
              {character.name}
              <div>{character.sentiment}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default App;
