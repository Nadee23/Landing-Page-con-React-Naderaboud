export const Carta = ({ title, description, image }) => {
    return (
        <div className="card col-md-3 col-sm-12 d-flex mx-auto justify-content-center m-3" style={{ width: "18rem" }}>
            <img src={image} className="card-img-top" alt="..." style={{ height: "500px"}} />
            <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href="#" className="btn btn-primary mx-auto">Go somewhere</a>
            </div>
        </div>
    )
};