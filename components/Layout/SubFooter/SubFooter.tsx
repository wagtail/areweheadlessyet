import Link from 'next/link';
import { AreWeHeadlessYetLogo } from '../../SVG';
import { getYear } from '../../../lib';
import styles from './SubFooter.module.scss';
import type SubFooterProps from './types';
import variables from '../../../styles/variables.module.scss';

export const SubFooter = ({ lastPublishedAt }: SubFooterProps) => (
    <div className={styles.subfooter}>
        <div className={styles.subfooter__text}>
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
            <Link href="/">
                <AreWeHeadlessYetLogo color={variables.accentColor} />
            </Link>
        </div>
    </div>
);

export default SubFooter;
