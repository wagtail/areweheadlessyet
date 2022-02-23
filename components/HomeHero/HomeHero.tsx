import styles from './HomeHero.module.scss';
import Strapline from './Strapline';
import type { StraplineProps } from './Strapline/types';
import { AreWeHeadlessYetLogo } from '../SVG';

const HomeHero = ({ icon, text }: StraplineProps) => (
    <div className={styles.hero}>
        <div className={styles.logo}>
            <AreWeHeadlessYetLogo color="#3BECCD" />
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
