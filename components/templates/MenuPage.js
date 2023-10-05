import Card from 'components/modules/Card';
import styles from './MenuPage.module.css';

const MenuPage = ({data}) => {
    console.log(data)
    return (
        <div className={styles.container}>
            <h2>Menu</h2>
            <div className={styles.subContainer}>
                {
                    data.map(food => (
                        <Card key={food.id} {...food} />
                        // <p key={food.id}>{food.name}</p>
                    ))
                }
            </div>
        </div>
    );
};

export default MenuPage;