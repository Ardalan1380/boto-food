import Dollar from 'components/icons/Dollar';
import Location from 'components/icons/Location';
import Link from 'next/link';
import styles from './Card.module.css';

const Card = (props) => {
    // console.log(props)
    const {id , name, price, details, discount} = props
    return (
        <div className={styles.container}>
            <img src={`/images/${id}.jpeg`} alt={name} />
            <div className={styles.detailes}>
                <h4>{name}</h4>
                <div>   
                    <Location />   
                    {details[0].Cuisine}
                </div>
            </div>
                <div className={styles.price}>
                    <Dollar />
                    {
                        discount ? (
                        <span className={styles.discount}>{
                            (price * (100 - discount) / 100)
                        } $</span>  
                        ) : (<span>{price} $</span>)
                    }
                    
                    {
                        discount ? <div className={styles.badge}>{discount} %</div> :null
                    }
                </div>
                    <Link href={`/menu/${id}`}>See Details</Link>
        </div>
    );
};

export default Card;