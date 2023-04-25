import React from 'react'
import styles from '../styles/user.module.css'

const User = () => {
    return (
        <div className={styles.user}>
            <div className={styles.wrapper}>
                <div className={styles.left}>
                    <img className={styles.avatar} src="https://images.pexels.com/photos/9213617/pexels-photo-9213617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                </div>
                <div className={styles.right}>
                    <table className={styles.details}>
                        <tr className={styles.detail}>
                            <td className={styles.info}>Name:</td>
                            <td className={styles.info}>Billa</td>
                        </tr>
                        <tr className={styles.detail}>
                            <td className={styles.info}>Email:</td>
                            <td className={styles.info}>admin@email.com</td>
                        </tr>
                        <tr className={styles.detail}>
                            <td className={styles.info}>Address:</td>
                            <td className={styles.info}>Bangalore</td>
                        </tr>
                        <tr className={styles.detail}>
                            <td className={styles.info}>Gender</td>
                            <td className={styles.info}>Male</td>
                        </tr>
                        <tr className={styles.detail}>
                            <td className={styles.info}>Phone Number</td>
                            <td className={styles.info}>+91 7865432109</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default User