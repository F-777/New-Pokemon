import PokeApi from "../../Poke-API/api";
import 'react-bootstrap'
import Header from "../cilde-pages/header";

export default function Recomendation(){
    <>
    <Header/>
          <div className="recommendations" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {displayedPokemon.map((poke) => (
              <Card key={poke.id} className="pokemon-card" style={{ margin: '10px', cursor: 'pointer' }} onClick={async () => {
                setPokemon(poke);
                const description = await fetchPokemonSpecies(poke.id); // Fetch clicked Pokemon description
                setPokemonDescription(description);
                setShowModal(true);
              }}>
                <Card.Img variant="top" src={poke.sprites.front_default} alt={poke.name} />
                <Card.Body>
                  <Card.Title className='front' style={{ fontFamily: 'sans-serif', fontSize: '30px', fontWeight: '700', color: 'gold' }}>{poke.name}</Card.Title>
                  <Card.Text className='height' style={{ fontFamily: 'sans-serif', fontSize: '18px', fontWeight: '500', color: 'gold' }}>
                    Height : <text style={{color: 'maroon', background: 'gold', borderRadius: '8px', paddingLeft: '8px', paddingRight: '8px', paddingTop: '8px', paddingBottom: '8px', fontWeight: '550'}}>{poke.height}</text>
                  </Card.Text>
                  <Card.Text className='weight' style={{ fontFamily: 'sans-serif', fontSize: '18px', fontWeight: '500', color: 'gold'}}>
                    Weight : <text style={{color: 'maroon', background: 'gold', borderRadius: '8px', paddingLeft: '7px', paddingRight: '7px', paddingTop: '7px', paddingBottom: '7px', fontWeight: '550'}}>{poke.weight}</text>
                  </Card.Text>
                  <Card.Text className='types' style={{ fontFamily: 'sans-serif', fontSize: '18px', fontWeight: '500', color: 'gold'}}>
                    Type :  <text style={{color: 'maroon', background: 'gold', borderRadius: '8px', paddingLeft: '8px', paddingRight: '8px', paddingTop: '8px', paddingBottom: '8px', fontWeight: '600'}}>{poke.types.map((type) => type.type.name).join(', ')}</text>
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
        </>
}