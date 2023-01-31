import React from 'react'
import './Header.scss'
import { LogoIcon, MenuIcon, UserIcon } from '../../assets/icon/index';
import { Link } from 'react-router-dom';
import Search from './Search';

const header = () => {
    return (
        <>
            <header className='s-header'>
                <div className='container'>
                    <div className='s-nav'>
                        <Link to='/' className='navbar-brand'>
                            <div className="navbar-item">
                                <LogoIcon />
                            </div>
                        </Link>
                        <div className='header-item btn-menu'>
                            <div className='box__icon-menu'>
                                <MenuIcon />
                            </div>
                            <div className='box__content'>
                                <p>Danh mục</p>
                            </div>
                        </div>
                        <div className='header-item btn-menu'>
                            <div className='box__icon-menu'>
                                <MenuIcon />
                            </div>
                            <div className='box__content'>
                                <p>Thể loại</p>
                            </div>
                        </div>
                        <div className='header-item btn-menu'>
                            <div className='box__icon-menu'>
                                <MenuIcon />
                            </div>
                            <div className='box__content'>
                                <p>Phân loại theo chương</p>
                            </div>
                        </div>
                        <div className='box-search s-nav__search'>
                            <Search />
                        </div>

                        <div>
                            <div class="header-item about-5 about-smember cta-smember">
                                <div class="about__box-icon">
                                    <UserIcon />
                                </div>
                                <div class="about__box-content">
                                    <span class="title">Đăng nhập</span>
                                </div>
                            </div></div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default header