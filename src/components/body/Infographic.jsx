export default function Profile() {

    <div className="search-result">
        <Card className="pokemon-card" onClick={handleShow} style={{ cursor: 'pointer', marginTop: '20px' }}>
            <Card.Body>
                <Card.Title
                    style={{
                        fontFamily: 'sans-serif',
                        fontSize: '30px',
                        fontWeight: '600',
                        color: 'gold'
                    }}>{pokemon.name}</Card.Title>
                <Card.Img variant="top" src={pokemon.sprites.front_default} alt={pokemon.name} />
                <Card.Text className='height' style={{ fontFamily: 'sans-serif', fontSize: '18px', fontWeight: '500', color: 'gold' }}>
                    Height : <text style={{ color: 'maroon', background: 'gold', borderRadius: '8px', paddingLeft: '8px', paddingRight: '8px', paddingTop: '8px', paddingBottom: '8px', fontWeight: '600' }}>{pokemon.height}</text>
                </Card.Text>
                <Card.Text className='weight' style={{ fontFamily: 'sans-serif', fontSize: '18px', fontWeight: '500', color: 'gold' }}>
                    Weight : <text style={{ color: 'maroon', background: 'gold', borderRadius: '8px', paddingLeft: '8px', paddingRight: '8px', paddingTop: '8px', paddingBottom: '8px', fontWeight: '600' }}>{pokemon.weight}</text>
                </Card.Text>
                <Card.Text className='types' style={{ fontFamily: 'sans-serif', fontSize: '18px', fontWeight: '500', color: 'gold' }}>
                    Type : <text style={{ color: 'maroon', background: 'gold', borderRadius: '8px', paddingLeft: '8px', paddingRight: '8px', paddingTop: '8px', paddingBottom: '8px', fontWeight: '600' }}>{pokemon.types.map((type) => type.type.name).join(', ')}</text>
                </Card.Text>
            </Card.Body>
        </Card>

        {/* modal about present pokemon information details */}
        <Modal show={showModal} onHide={handleClose} className='show-detils' style={{
            alignItems: 'center',
            border: '3px solid gold',
            borderRadius: '8px',
            backgroundColor: 'maroon',
            paddingLeft: '3rem',
            paddingRight: '5rem',
            marginLeft: '1.5rem',
            marginRight: '1.8rem',
            marginBottom: '3.5rem',
            boxShadow: '0 0 12px gold'
        }}
        >
            <Modal.Header>
                <Modal.Title className='title-detils' style={{
                    fontFamily: 'sans-serif',
                    fontWeight: '700',
                    fontSize: '40px',
                    textAlign: 'left',
                    color: 'gold',
                    marginTop: '2rem',
                    marginLeft: '2rem'
                }}
                >
                    {pokemon.name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='body-view' style={{
                display: 'flex',
                flexDirection: 'column',
            }}
            >
                <img
                    src={pokemon.sprites.front_default}
                    alt={pokemon.name}
                    style={{
                        width: '180px',
                        height: '180px',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                />
                <p style={{ color: 'maroon', fontFamily: 'sans-serif', marginLeft: '20px', marginRight: '20px', fontSize: '18px', background: 'gold', paddingTop: '8px', paddingBottom: '8px', borderRadius: '9px', paddingRight: '12px' }}><strong style={{ marginLeft: '10px', marginRight: '5px' }}>Height :</strong> <text style={{ background: 'maroon', color: 'gold', paddingTop: '5.5px', paddingBottom: '5.5px', paddingLeft: '5.5px', paddingRight: '5.5px', borderRadius: '8px' }}>{pokemon.height}</text></p>
                <p style={{ color: 'maroon', fontFamily: 'sans-serif', marginLeft: '20px', marginRight: '20px', fontSize: '18px', background: 'gold', paddingTop: '8px', paddingBottom: '8px', borderRadius: '9px', paddingRight: '12px' }}><strong style={{ marginLeft: '10px', marginRight: '5px' }}>Weight :</strong> <text style={{ background: 'maroon', color: 'gold', paddingTop: '5.5px', paddingBottom: '5.5px', paddingLeft: '5.5px', paddingRight: '5.5px', borderRadius: '8px' }}>{pokemon.weight}</text></p>
                <p style={{ color: 'maroon', fontFamily: 'sans-serif', marginLeft: '20px', marginRight: '20px', fontSize: '18px', background: 'gold', paddingTop: '8px', paddingBottom: '8px', borderRadius: '9px', paddingRight: '12px' }}><strong style={{ marginLeft: '10px', marginRight: '5px' }}>Type :</strong> <text style={{ background: 'maroon', color: 'gold', paddingTop: '5.5px', paddingBottom: '5.5px', paddingLeft: '5.5px', paddingRight: '5.5px', borderRadius: '8px' }}>{pokemon.types.map((type) => type.type.name).join(', ')}</text></p>
                <p style={{ color: 'maroon', fontFamily: 'sans-serif', marginLeft: '20px', marginRight: '20px', fontSize: '18px', background: 'gold', paddingTop: '8px', paddingBottom: '8px', borderRadius: '9px', paddingRight: '12px' }}><strong style={{ marginLeft: '10px', marginRight: '5px' }}>Abilities :</strong> <text style={{ background: 'maroon', color: 'gold', paddingTop: '5.5px', paddingBottom: '5.5px', paddingLeft: '5.5px', paddingRight: '5.5px', borderRadius: '8px' }}>{pokemon.abilities.map((ability) => ability.ability.name).join(', ')}</text></p>
                <p style={{ color: 'maroon', fontFamily: 'sans-serif', marginLeft: '20px', marginRight: '20px', fontSize: '18px', background: 'gold', paddingTop: '8px', paddingBottom: '8px', borderRadius: '9px', paddingRight: '12px' }}><strong style={{ marginLeft: '10px', marginRight: '5px' }}>Description :</strong> {pokemonDescription}</p> {/* present the pokemon description*/}
                <p style={{ color: 'gold', fontFamily: 'sans-serif', marginLeft: '20px', marginRight: '20px', fontSize: '18px', paddingTop: '8px', paddingBottom: '8px', borderRadius: '9px', paddingRight: '12px' }}><strong style={{ marginLeft: '10px', marginRight: '5px' }}>Stats :</strong></p>
                <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                    {pokemon.stats.map((stat) => (
                        <li key={stat.stat.name} style={{ marginBottom: '10px', marginLeft: '20px', color: 'gold' }}>
                            <strong>{stat.stat.name}:</strong>
                            <ProgressBar
                                now={stat.base_stat}
                                max={150}
                                label={`${stat.base_stat}`}
                                style={{
                                    height: '25px',
                                    marginTop: '5px',
                                    border: '2px solid gold',
                                    marginLeft: '15px',
                                    width: '120px',
                                    paddingLeft: '20px',
                                    paddingRight: '20px',
                                    borderRadius: '20px'
                                }}
                                variant={getStatColor(stat.base_stat)}
                            />
                        </li>
                    ))}
                </ul>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose} className='close-btn-detils' style={{
                    padding: '10px 30px ',
                    backgroundColor: 'transparent',
                    border: '3px solid gold',
                    marginBottom: '1.5rem',
                    marginTop: '0.5rem',
                    marginLeft: '2rem'
                }}
                >
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    </div>

}