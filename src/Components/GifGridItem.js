import React from 'react'
import PropTypes  from "prop-types";

const GifGridItem = ({img}) => {
    return (
        <>
            <div className="card">
                <img src={img.url} />
                <p>{img.title}</p>
            </div>
        </>
    )
}

GifGridItem.protoTypes = {
    img: PropTypes.object.isRequired
}

export default GifGridItem
