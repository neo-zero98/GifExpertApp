import React, { useState } from 'react'
import { AddCategory } from './AddCategory';
import GifGrid from './GifGrid';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Naruto']);

    return (
        <>
            <h1>GifExpertApp</h1>   
            <AddCategory setCategories={setCategories}/>
            <hr></hr>

            <ol>
                {
                    categories.map((category) => (
                        // return <li key={categorie}>{categorie}</li>
                        <GifGrid 
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>
        </>
    )
}
