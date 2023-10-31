import React, { useEffect, useState } from 'react';
import axios from 'axios';
import md5 from 'md5';
import './App.css';


function App() {
 
  useEffect(() => {
    // Define your Marvel API public and private keys
    const publicKey = 'ed0d1ef9be26a5cd0799c4d22b473468';
    const privateKey = '4dd21eaa43edac6bd795410af035dc6bc697c770';

    // Generate a timestamp
    const timestamp = new Date().getTime();

    // Create an MD5 hash of timestamp, private key, and public key
    const hash = md5(timestamp + privateKey + publicKey);


  });


  return (
    <div className="App">
      
    </div>
  );
}


export default App;
