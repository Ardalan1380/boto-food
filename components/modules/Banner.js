import Link from "next/link";
import styles from "./Banner.module.css";
const Banner = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <h2>Boto Food</h2>
                <p>Food Delivery and Takeout</p>
                <span>
                    BotoFood is an food ordering and delivery platform launched by Uber in 2015. Meals are delivered by couriers useing cars, scooters, bikes or on foot
                </span>
                <Link href='/menu'>See All</Link>
            </div>
            <div className={styles.right}>
                <img src="/images/banner.png" alt='food-img' />
            </div>
        </div>
    );
};

export default Banner;