import Apple from 'components/icons/Apple';
import Binance from 'components/icons/Binance';
import SpaceX from 'components/icons/SpaceX';
import Tesla from 'components/icons/Tesla';
import styles from './Companies.module.css';
const Companies = () => {
    return (
        <div className={styles.container}>  
             <Apple />
             <SpaceX />
             <Binance />
             <Tesla />
        </div>
    );
};

export default Companies;