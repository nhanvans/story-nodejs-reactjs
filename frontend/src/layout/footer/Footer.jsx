import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    return (
        <footer className='s-footer'>
            <div className="footer-top">
                <div className="container">
                    <div className="columns is-flex">
                        <div className="column" style={{'width': '40%'}}>
                            <p className='description'>
                                <strong>Truyện Full</strong> - Đọc truyện online, đọc truyện chữ, truyện hay. Website luôn cập nhật những bộ truyện mới thuộc các thể loại đặc sắc như truyện tiên hiệp, truyện kiếm hiệp, hay truyện ngôn tình một cách nhanh nhất. Hỗ trợ mọi thiết bị như di động và máy tính bảng.
                            </p>
                        </div>
                        <div className="column">
                            <div className="footer-box">
                                <div className="footer__box-title">
                                    <p className='title'>Category</p>
                                </div>
                                <div className="footer__box-content">
                                    <ul className='list-link'>
                                        <li className='link'><Link to='/'>Link </Link> </li>
                                        <li className='link'><Link to='/'>Link </Link> </li>
                                        <li className='link'><Link to='/'>Link </Link> </li>
                                        <li className='link'><Link to='/'>Link </Link> </li>
                                        <li className='link'><Link to='/'>Link </Link> </li>
                                        <li className='link'><Link to='/'>Link </Link> </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="footer-box">
                                <div className="footer__box-title">
                                    <p className='title'>Category</p>
                                </div>
                                <div className="footer__box-content">
                                    <ul className='list-link'>
                                        <li className='link'><Link to='/'>Link </Link> </li>
                                        <li className='link'><Link to='/'>Link </Link> </li>
                                        <li className='link'><Link to='/'>Link </Link> </li>
                                        <li className='link'><Link to='/'>Link </Link> </li>
                                        <li className='link'><Link to='/'>Link </Link> </li>
                                        <li className='link'><Link to='/'>Link </Link> </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="footer-box">
                                <div className="footer__box-title">
                                    <p className='title'>Category</p>
                                </div>
                                <div className="footer__box-content">
                                    <ul className='list-link'>
                                        <li className='link'><Link to='/'>Link </Link> </li>
                                        <li className='link'><Link to='/'>Link </Link> </li>
                                        <li className='link'><Link to='/'>Link </Link> </li>
                                        <li className='link'><Link to='/'>Link </Link> </li>
                                        <li className='link'><Link to='/'>Link </Link> </li>
                                        <li className='link'><Link to='/'>Link </Link> </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer