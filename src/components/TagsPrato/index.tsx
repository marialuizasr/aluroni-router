import styles from './TagsPrato.module.scss';
import classNames from 'classnames';
import { Prato } from 'types/prato';

export default function TagsPrato({category, serving, size, price}: Prato) {
    return (
        <div className={styles.tags}>
            <div className={classNames({
                [styles.tags__tipo]: true,
                [styles[`tags__tipo__${category.label.toLocaleLowerCase()}`]]: true
            })}>
                {category.label}
            </div>
            <div className={styles.tags__porcao}>
                {size}g
            </div>
            <div className={styles.tags__qtdpessoas}>
                Serve {serving} pessoa{serving === 1 ? '' : 's'}
            </div>
            <div className={styles.tags__valor}>
                R${price}
            </div>
        </div>
    );
}