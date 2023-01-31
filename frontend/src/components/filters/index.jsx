import React from 'react'
import ListProduct from './ListProduct'

const index = ({dataStory}) => {
    return (
        <>
            <div className="container">
                <ListProduct dataStory={dataStory} />
            </div>
        </>
    )
}

export default index