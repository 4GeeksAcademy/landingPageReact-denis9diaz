import React from 'react'

const styles = {
    width: "18rem"
}

const imageStyles = {
    width: "100%",
    objectFit: "cover",
};

const Card = (props) => {
    return (
        <div className="card col" style={styles}>
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