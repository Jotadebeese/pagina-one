import styles from '@/src/styles/Button.module.css'

export function MainButton(
    {title, accept, setStep, setAlert, setAccept}:
    {
        title: string,
        accept: boolean,
        setStep: (value: number) => void,
        setAlert: (value: boolean) => void,
        setAccept: (value: boolean) => void
    }
) {
    return (
        <button 
            className={styles.button}
            onClick={(e) => {
                e.preventDefault();
                if(accept) { 
                    setStep(1)
                    setAlert(false)
                    setAccept(false)
                } else {
                    setAlert(true)
                }
            }}
        >
            {title}
        </button>
    )
}
export function SwitchButton(
    {title, handleSwitch, value, style, setSwitchError}
    :
    {
        title: string,
        handleSwitch: (value: number) => void,
        value: number,
        style?: React.CSSProperties,
        setSwitchError: (value: boolean) => void
    }
) {
    return(
        <button
            className={`${styles.button} ${styles.backButton}`}
            style={style}
            onClick={(event) => {
                event.preventDefault();
                handleSwitch(value);
                setSwitchError(false);
            }}
        >
                {title}
        </button>
    )
}
export function FormBack(
    {handleBack, title= 'Atrás'}:
    {
        handleBack: () => void,
        title?: string
    }
) {
    return (
        <button 
            className={`${styles.button} ${styles.backButton}`}
            onClick={(e) => {
                e.preventDefault();
                handleBack();
            }}
        >
            {title}
        </button>
    )
}
export function FormNext(
    {handleNext, title = 'Siguiente'}:
    {
        handleNext: () => void,
        title?: string
    }
) {
    return (
        <button 
            className={styles.button}
            onClick={(e) => {
                e.preventDefault();
                handleNext();
            }}
        >
            {title}
        </button>
    )
}
export function FormSubmit() {
    return (
        <button type='submit' className={styles.button}>Enviar</button>
    )
}