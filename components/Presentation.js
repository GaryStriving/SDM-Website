import styles from '../styles/Presentation.module.css';
import Image from 'next/image';
import { useMediaQuery } from "../functions/hooks.js";

export default function Presentation(props) {
    const isWide = useMediaQuery("(min-width: 1200px)");
    return (
        <div className={styles.presentation}>
            <div className={styles.presentation__main_wrapper}>
                <div className={styles.presentation__main_wrapper__text} style={
                    {
                        width: isWide && props.imgSrc ? "60%" : "100%",
                        textAlign: isWide && props.imgSrc ? "right" : "center",
                    }
                }>
                    <h1 className={styles.presentation__main_title}>{props.title}</h1>
                    <h2 className={styles.presentation__main_subtitle}>{props.subtitle}</h2>
                </div>
                {props.imgSrc && <div className={styles.presentation__main_wrapper__logo}>
                    <Image alt="logo" src={props.imgSrc} width={350} height={350} />
                </div>}
            </div>
        </div>
    );
}

