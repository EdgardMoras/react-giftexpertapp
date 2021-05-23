import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    //const categories = ['One Punch', 'Samuray X', 'Dragon Ball Z']
    const [categories, setCategories] = useState(['One Punch']);
    // const handlerAdd = () =>{
    //     setCategories(cats => [...cats, 'HunterxHunter']);
    // }
    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory
                setCategories={setCategories}></AddCategory>
            <hr></hr>

            <ol>
                {categories.map((item, i) => {
                    return <GifGrid key={i} category={item}></GifGrid>
                })}
            </ol>
        </div>
    )
}
