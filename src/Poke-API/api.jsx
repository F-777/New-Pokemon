import React, { useState, useEffect } from 'react';
import { Form, Button, Card, Modal, ProgressBar } from 'react-bootstrap';


const PokeApi = () => {
  const [query, setQuery] = useState('');
  const [pokemon, setPokemon] = useState(null);
  const [page, setPage] = useState(1);
  const [recommendedPokemon, setRecommendedPokemon] = useState([]);
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [pokemonDescription, setPokemonDescription] = useState(''); // new state about description pokemon
  const limit = 24;
  const totalPages = Math.ceil(1200 / limit);

  // pulls pokemon recomended
  const fetchRecommendedPokemon = async () => {
    const recommendedIds = Array.from({ length: 1000 }, (_, i) => i + 1); // added firstly pokemon recomendation
    const promises = recommendedIds.map(async (id) => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      return response.json();
    });
    const results = await Promise.all(promises); // code from importing the all pokemon component
    setRecommendedPokemon(results);
  };

  // input recomended page in firstly 
  useEffect(() => {
    fetchRecommendedPokemon();
  }, []);

  const fetchPokemonSpecies = async (id) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
    const data = await response.json();

    // pull description in english language
    const flavorTextEntry = data.flavor_text_entries.find(entry => entry.language.name === 'en');
    return flavorTextEntry ? flavorTextEntry.flavor_text : 'No description available for this Pokémon.';
  };

  const searchPokemon = async () => {
    try {
      setError('');
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`);
      if (!response.ok) throw new Error('Pokémon not found!');
      const data = await response.json();
      setPokemon(data);

      // add descriptor of pokemon
      const description = await fetchPokemonSpecies(data.id);
      setPokemonDescription(description);

    } catch (err) {
      setError(err.message);
      setPokemon(null);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (query) searchPokemon();
  };

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const getStatColor = (value) => {
    if (value <= 50) return 'success'; // gold
    if (value <= 80) return 'warning'; // gold
    if (value <= 100) return 'danger'; // gold
    return 'danger'; // gold
  };


  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const displayedPokemon = recommendedPokemon.slice(startIndex, endIndex);

};

export default PokeApi;