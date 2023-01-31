import React from 'react'
import { Link } from 'react-router-dom'
import { HeartIcon } from '../../assets/icon'
import './ProductItem.scss'

const ProductItem = ({ story }) => {
    return (
        <>
            <div className="product-info-container product-item">
                <div className="product-info">
                    <Link to='/' className='product__link'>
                        <div className="product__link__image">
                            <img src={story.avatar} alt="iPhone 14 Pro Max 128GB | Chính hãng VN/A" className="product__link__image__img" />
                        </div>
                        <div className="product__link__name">
                            <h3>{story.name}</h3>
                        </div>

                        <div className="product__link__author">
                            <p>{story.author}</p>
                            <p className='product__link__author__total-chapter'>{story.total_chapter && story.total_chapter} chapter</p>
                        </div>
                        <div className="box-price">
                            <div className="box-price__box-info">
                                {/* <p className="box-price__box-info--show">
                                    33.290.000&nbsp;₫
                                </p>
                                <p className="box-price__box-info--through">
                                    34.990.000&nbsp;₫
                                </p> */}
                                <div className="box-price__box-info--percent">
                                    <p className="box-price__box-info--percent-detail">
                                        Hot
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* <div className="product__link__badge">
                            <p className="product__link__badge--info__item">Huyền huyễn</p>
                            <p className="product__link__badge--info__item">Kiếm hiệp</p>
                            <p className="product__link__badge--info__item">Ngôn tình</p>
                        </div> */}

                    </Link>
                </div>
                <div className="btn-wish-list">
                    <span>Yêu thích &nbsp;</span>
                    <div className="wishListBtn">
                        <button className="btn__effect">
                            <HeartIcon width='18' height='18' />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductItem