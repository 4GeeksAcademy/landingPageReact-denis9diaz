import React from 'react'

const imageStyles = {
    width: "100%",
    objectFit: "cover",
};

const Card = (props) => {
    return (
        <div className="card col-xs-12 col-sm-6 col-md-6 col-lg-3">
            <img src={props.image} style={imageStyles} className="card-img-top single-card-image" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                <a href="#" className="btn btn-primary">Find Out More!</a>
            </div>
        </div>
    )
}

export default Card;