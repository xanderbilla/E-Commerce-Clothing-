import React from 'react'
import styles from '../styles/miniNavbar.module.css'
import LaunchIcon from '@mui/icons-material/Launch';
import { useNavigate } from 'react-router-dom';

const MiniNavbar = () => {
    const redirect = useNavigate();
    const handleClick = (value) => {
        redirect(`/category/${value}`);
    }
    return (
        <div className={styles.mininavbar}>
            <div className={styles.left}>
                <select className={styles.all_categories} name="categories" title="categories" defaultValue="All" onChange={(e) => handleClick(e.target.value)}>
                    <option className={styles.categories__selectOption} disabled value="All" to>All Categories</option>
                    <option className={styles.categories__selectOption} value="Men">Men</option>
                    <option className={styles.categories__selectOption} value="Women">Women</option>
                    <option className={styles.categories__selectOption} value="Kids">Kids</option>
                    <option className={styles.categories__selectOption} value="Accessories">Accessories</option>
                </select>
            </div>
            <div className={styles.right}>
                <div className={styles.links}>
                    Food <LaunchIcon fontSize='small' />
                </div>
                <div className={styles.links}>
                    Grocery <LaunchIcon fontSize='small' />
                </div>
                <div className={styles.links}>
                    Electronics <LaunchIcon fontSize='small' />
                </div>
            </div>
        </div>
    )
}

export default MiniNavbar