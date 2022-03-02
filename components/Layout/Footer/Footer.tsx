import { AreWeHeadlessYetLogo } from '../../SVG';
import { getYear } from '../../../lib';
import styles from './Footer.module.scss';
import type FooterProps from './types';

export const Footer = ({ lastPublishedAt }: FooterProps) => (
    <footer className={styles.footer}>
        <div className={styles.footer__text}>
            <div>
                <strong className={styles.copyright}>
                    © Are we headless yet?
                </strong>
                <span>Updated {getYear(lastPublishedAt)}</span>
            </div>
            <span className={styles.delimiter}>-</span>
            <div>
                <a href="https://wagtail.org/" className={styles.link}>
                    Wagtail
                </a>{' '}
                is an open source project
            </div>
        </div>
        <div className={styles.logo}>
            <AreWeHeadlessYetLogo color="#3BECCD" />
        </div>
    </footer>
);

export default Footer;
