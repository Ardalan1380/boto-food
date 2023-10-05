import Attributes from "components/modules/Attributes";
import Banner from "components/modules/Banner";
import Companies from "components/modules/Companies";
import Definition from "components/modules/Definition";
import Guid from "components/modules/Guid";
import Instruction from "components/modules/Instruction";
import Restrictions from "components/modules/Restrictions";
import styles from "./HomePage.module.css";

const HomePage = () => {
    return (
        <div className={styles.container}>
            <Banner />
            <Attributes />
            <Definition />
            <Companies />
            <Instruction />
            <Guid />
            <Restrictions />
        </div>
    );
};

export default HomePage;