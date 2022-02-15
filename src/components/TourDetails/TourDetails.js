import { useParams } from 'react-router-dom';
import { useState } from 'react';
import data from '../../data/db.json';
import '../TourDetails/TourDetails.css'
function TourDetails() {
    const [readMore, setreadMore] = useState(false);
    let { id } = useParams();
    const result = data.filter((value) => value.id === id);

    return (
        <>
            <h2>{result[0].name}</h2>

            <p className='inf'>{readMore ? `description : ${result[0].info}`
                : `description : ${result[0].info.substring(0, 200)}...`}
                <button onClick={() => setreadMore(!readMore)}>
                    {readMore ? "show more" : "show less"}
                </button>
            </p>
            <div className='inf2'>
            <p>{result[0].price}</p>
            <img src={result[0].image} />
            </div>
            
        </>

    );
}
export default TourDetails;