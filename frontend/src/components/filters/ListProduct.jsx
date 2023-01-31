import React from 'react'
import ProductItem from '../products/ProductItem'
import './ListProduct.css'

const listProduct = ({dataStory}) => {

    return (
        <>
            <div className="block-filter-sort">
                <div className="filter-sort__title">Chọn theo tiêu chí</div>
                <div className="filterModule"></div>
                <div className="filter-sort__title">Sắp xếp theo</div>
                <div className="filter-sort__list-filter"></div>
                <div className="filter-sort__list-product">
                    <div className="block-product-list-filter">
                        <div className="product-list-filter">
                            { 
                            dataStory ? dataStory.map(story => (
                                <ProductItem story={story} />
                            )) : 'No product'
                            }
                        </div>
                        <div className="cps-block-content_btn-showmore"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default listProduct