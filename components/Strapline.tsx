import styles from './Strapline.module.scss';

type IconChoice = 'thumbs up' | 'thumbs down';

type StraplineProps = {
    icon: IconChoice;
    text: string;
};

const getIconDisplay = (icon: IconChoice) =>
    icon === 'thumbs up' ? '👍 Yes!' : '👎 No!';

export const Strapline = ({ icon, text }: StraplineProps) => (
    <div className={styles.strapline}>
        <strong className={styles.strapline__icon}>
            {getIconDisplay(icon)}
        </strong>
        <div
            className={styles.strapline__text}
            dangerouslySetInnerHTML={{ __html: text }}
        />
    </div>
);

export default Strapline;
