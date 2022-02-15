import data from '../../data/db.json';
import Tours from '../tours/Tours';
function Home() {
    return (
        <>
            <Tours data={data} />
        </>
    );
}
export default Home;