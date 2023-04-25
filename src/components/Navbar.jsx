import React, { useEffect, useState } from 'react';
import { Auth } from 'aws-amplify';
import styles from '../styles/navbar.module.css'
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom';
import Logout from './Logout'
import Menu from './Menu';

const Navbar = ({ isOpen, setIsOpen }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            document.body.classList.add(styles.noScroll);
        } else {
            document.body.classList.remove(styles.noScroll);
        }
    };

    useEffect(() => {
        checkAuth();
    }, [isAuthenticated]);

    const checkAuth = async () => {
        try {
            await Auth.currentAuthenticatedUser();
            setIsAuthenticated(true);
        } catch (error) {
            setIsAuthenticated(false);
        }
    };

    const handleLogout = async () => {
        try {
            await Auth.signOut();
            setIsAuthenticated(false);
        } catch (error) {
            console.log('Error signing out: ', error);
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.toggleButton}>
                    <div className={styles.hamburger} onClick={handleClick}>
                        <span className={`${styles.lines} ${isOpen ? styles.open : ''}`}></span>
                        <span className={`${styles.lines} ${isOpen ? styles.hide : ''}`}></span>
                        <span className={`${styles.lines} ${isOpen ? styles.close : ''}`}></span>
                    </div>
                </div>
                <Link to='/'><img src="https://i.imgur.com/S5awLwi.png" alt="" height="40px" /></Link>
                <div className={styles.left}>
                    <div className={styles.search__container}>
                        <input type="search" name="" id="" placeholder='Search...' className={styles.search__input} />
                        <SearchOutlinedIcon style={{ color: "gray", fontSize: 25 }} />
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.menu_item}>
                        <Link style={{ textDecoration: "none", color: "inherit" }} to='/cart'>
                            <Badge badgeContent={4} color="primary">
                                <ShoppingCartOutlinedIcon color="black" />
                            </Badge>
                        </Link>
                    </div>
                    {isAuthenticated ? (
                        <>
                            <Logout handleLogout={handleLogout} />
                        </>
                    ) : (
                        <>
                            <Link to='/signup' className={styles.menu_auth}>REGISTER</Link>
                            <Link to='/signin' className={styles.menu_auth}>SIGN IN</Link>
                        </>
                    )}
                </div>
            </div>
            <div className={styles.menuContainer}>
                <Menu isOpen={!isOpen} setIsOpen={!setIsOpen} />
            </div>
        </div>
    )
}

export default Navbar;
