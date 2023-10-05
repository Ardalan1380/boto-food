import Link from 'next/link';
import styles from './Layout.module.css';

const Layout = ({children}) => {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.left}>
                    <Link href='/'>Boto Food</Link>
                </div>
                <div className={styles.right}>
                    <Link href='/menu'>Menu</Link>
                    <Link href='/categories'>Categories</Link>
                </div>
            </header>
            <div className={styles.container}>{children}</div>
            <footer className={styles.footer}>
                Next.js training project  &copy;
            </footer>
        </>
    );
};

export default Layout;