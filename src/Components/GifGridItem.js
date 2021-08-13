import React from 'react'

const GifGridItem = ({img}) => {
    return (
        <>
            <div className="card">
                <img src={img.url}/>
                <p>{img.title}</p>
            </div>
        </>
    )
}

export default GifGridItem
