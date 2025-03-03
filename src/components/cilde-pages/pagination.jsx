import 'react-bootstrap';
import { Prev } from 'react-bootstrap/esm/PageItem';
import ShowPage from '../button/detils/showpage';
import Next from '../button/detils/Next-btn';

export default function Pagination(){
    <div className='pagination-btn' style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: '2rem',
        marginBottom: '3.55rem',
        marginTop: '4.325rem'
    }}>
        <Prev />
        <ShowPage/>
        <Next/>
    </div>
}