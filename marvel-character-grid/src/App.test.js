const React = require('react');
const { render, screen } = require('@testing-library/react');
const App = require('./App').default;

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
const mock = new MockAdapter(axios);


test('renders character names', () => {
  // Mocking characters data for testing
  const characters = [
    { name: '3-D Man', thumbnail: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg' },
    { name: 'Abyss', thumbnail: 'http://i.annihil.us/u/prod/marvel/i/mg/9/30/535feab462a64.jpg' },
  ];

  // Render the App component with the mocked characters
  render(<App />);
  
  // Check if the character names are rendered
  for (const character of characters) {
    const characterElement = screen.getByText(character.name);
    expect(characterElement).toBeInTheDocument();
  }
});


test('renders characters after authenticated API call', async () => {
  const publicKey = 'ed0d1ef9be26a5cd0799c4d22b473468';
    const privateKey = '4dd21eaa43edac6bd795410af035dc6bc697c770';
    const timestamp = new Date().getTime();
    const hash = md5(timestamp + privateKey + publicKey);

  // Mock the API call with authentication parameters
  mock.onGet('http://gateway.marvel.com/v1/public/characters', {
    params: {
      ts: timestamp,
      apikey: publicKey,
      hash: hash, 
    },
  });

  render(<App />);

  // Wait for the API call to complete
  await screen.findByText(/3-D Man/i);
  await screen.findByText(/Abyss/i);

  // Check if the characters are rendered
  expect(screen.getByText(/3-D Man/i)).toBeInTheDocument();
  expect(screen.getByText(/Abyss/i)).toBeInTheDocument();
});
