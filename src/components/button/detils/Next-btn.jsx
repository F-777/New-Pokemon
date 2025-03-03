import  "react-bootstrap";

const [page, setPage] = useState(1);
const totalPages = Math.ceil(1200 / limit);

export default function Next(){
    <button 
      onClick={() => setPage(page + 1)}
      disabled={page === totalPages}
      className='next-btn'
      style={{
         color: 'gold',
         fontFamily: 'sans-serif',
         fontWeight: 'normal',
         fontSize: '15px',
         padding: '10px 20px',
         borderColor: 'gold'
      }}>Next</button>
}