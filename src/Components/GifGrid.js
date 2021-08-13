import React from 'react'
import { useFetchGifs } from '../Hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({category}) => {

    const {data, loading} = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {loading && <p>Loading</p>}
            <div className="card-grid animate__fadeIn">
                {
                    data.map( img => (
                        <GifGridItem 
                            key={img.id} 
                            img={img}
                        />
                    )
                )}
            </div>
        </>
    )
}

export default GifGrid;
