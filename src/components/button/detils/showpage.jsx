import 'react-bootstrap'

const [page, setPage] = useState(1);
const totalPages = Math.ceil(1200 / limit);

export default function ShowPage(){
    <span className='page-slide' style={{
        alignItems: 'center',
        fontFamily: 'sans-serif',
        fontSize: '2rem',
        color: 'gold'
    }}>{page} / {totalPages}</span>
}