import React from 'react'
import Product from './Product'
import styles from '../styles/featuredProducts.module.css'
import { featuredProducts } from '../static/data'

const FeaturedProduct = () => {
    return (
        <div className={styles.featured_products}>
            <div className={styles.top}>
                <h1 className={styles.title}>Featured Products</h1>
                <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum necessitatibus iure excepturi harum, sed ab odio rerum saepe. Harum iure pariatur minima corporis officia natus laborum consequuntur ducimus commodi! Veniam?</p>
            </div>
            <div className={styles.bottom}>
                {
                    featuredProducts.map(item => (
                        <Product item={item} key={item._id} />
                    ))
                }
            </div>
        </div>
    )
}

export default FeaturedProduct