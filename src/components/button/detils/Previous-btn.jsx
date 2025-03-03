import 'react-bootstrap';

const [page, setPage] = useState(1);

export default function Prev(){
    <button 
      onClick={() => setPage(page - 1)}
      disabled={page ===1}
      className='previous-btn'
      style={{
        color: 'gold',
        fontFamily: 'sans-serif',
        fontWeight: 'normal',
        fontSize: '15px',
        padding: '10px 20px',
        borderColor: 'gold'
      }}>Prev</button>
}