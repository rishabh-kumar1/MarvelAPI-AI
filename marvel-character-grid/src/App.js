import React, { useEffect, useState } from 'react';
import axios from 'axios';
import md5 from 'md5';
import './App.css';


function App() {
  const [characters, setCharacters] = useState([]); //stateful character value with setter
  const [page, setPage] = useState(1); // Initialize page number to 1


  useEffect(() => {
    // Define Marvel API public and private keys 
    // In a real prod env we would need to hide these keys behind encryption
    const publicKey = 'ed0d1ef9be26a5cd0799c4d22b473468';
    const privateKey = '4dd21eaa43edac6bd795410af035dc6bc697c770';

    // Generate a timestamp
    const timestamp = new Date().getTime();

    // Create an MD5 hash digest of timestamp, private key, and public key
    const hash = md5(timestamp + privateKey + publicKey);

    // Calculate the offset based on the current page number
    const offset = (page - 1) * 20;


    // Make the API request with offset to allow us to implement user 
    //driven pagination
    axios
      .get('http://gateway.marvel.com/v1/public/characters', {
        params: {
          ts: timestamp,
          apikey: publicKey,
          hash: hash,
          offset: offset, // Include offset
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

        /* This url might change based on the local port that you end up hosting the flask endpoint at! 
        In an actual dev environment we would most likely want to host that endpoint in a docker image on the cloud*/
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
  }, [page]); // Adding 'page' as a dependency to this hook!
      //we need these api's to be called in order
      //and catch any errors along the way
      //thus this .then .catch chain is necessary
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
      {/* Pagnination component at the bottom of each page */}
      <div className="pagination">
        <button onClick={() => setPage(prevPage => Math.max(prevPage - 1, 1))}>Previous Page</button>
        <span>Page {page}</span>
        <button onClick={() => setPage(prevPage => prevPage + 1)}>Next Page</button>
      </div>
    </div>
  );
}

export default App;