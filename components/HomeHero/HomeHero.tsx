import Image from 'next/image';
import logo from '../../public/images/headless-logo.svg';
import styles from './HomeHero.module.scss';
import Strapline from './Strapline';
import type { StraplineProps } from './Strapline/types';

const HomeHero = ({ icon, text }: StraplineProps) => (
    <div className={styles.hero}>
        <div className={styles.logo}>
            <Image src={logo} alt="" />
        </div>
        <div className={styles.hero__body}>
            <h1 className={styles.title}>
                Are we <br aria-hidden />
                <strong className={styles.title__emphasis}>
                    headless
                </strong>{' '}
                yet?
            </h1>
            <Strapline icon={icon} text={text} />
        </div>
    </div>
);

export default HomeHero;
