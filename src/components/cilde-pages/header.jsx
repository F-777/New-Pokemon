import Button from "../button/header/button-submit"
import Pagination from "./pagination"


const [query, setQuery] = useState('');

const searchPokemon = async () => {
    try {
      setError('');
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`);
      if (!response.ok) throw new Error('Pokémon not found!');
      const data = await response.json();
      setPokemon(data);

      // Ambil deskripsi Pokémon
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

export default function Header(){
    <div className="header">
        <img src="src/assets/LogoPokemon.png" alt="logo" className="logos" />
        <Form onSubmit={handleSearch} className="search-form">
            <Form.Control 
              type="text"
              placeholder="Enter Pokémon name"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="form-control"
              style={{ padding: '20px 40px'}}
            />
            <Button />
        </Form>
        <Pagination/>
    </div>
}