

function Cards(props) {
    return (
            <div className="col-md-4 d-flex">
                <div className="card my-4" style={{ width: "18rem" }}>
                    <img src={props.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">{props.info}</p>
                    </div>
                </div>
            </div>
    );
}
export default Cards;

