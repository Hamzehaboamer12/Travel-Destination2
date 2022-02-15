import '../tour/Tour.css'


function Tour(props) {
  
    
    return (
        <>
            <div className="tour">
                <img src={props.tour.image} alt={props.tour.name} />
                <h3>Name : {props.tour.name}</h3>
            </div>
        </>
    );
}

export default Tour;