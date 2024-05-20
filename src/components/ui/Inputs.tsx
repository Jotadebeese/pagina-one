import styles from '@/src/styles/Inputs.module.css'
import React from 'react'
import { SwitchButton } from '@/src/components/ui/Buttons'

const invalidInputStyle = {
    border: '1px solid #F18397',
}
export function Input(
    {label, smallLabel, type, name, handleChange, handleTextAreaChange, placeholder, style, varSpan, error, formData, required = true, min, max}:
    {
        label?: string,
        smallLabel?: string,
        type: string,
        name: string,
        handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
        handleTextAreaChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
        placeholder?: string,
        style?: React.CSSProperties,
        varSpan?: boolean
        error?: string | undefined,
        formData: {},
        required?: boolean,
        min?: string,
        max?: string
    }
) {
    return (
        <div 
            className={varSpan ? 
                `${styles.inputContainer} ${styles.varSpan}` :
                styles.inputContainer
            } 
            style={style}
        >
            <label htmlFor={name}>{label}</label>
            {type === 'textArea' ? 
                <textarea 
                    name={name}
                    value={formData?.[name as keyof typeof formData] || ''}
                    onChange={handleTextAreaChange}
                    placeholder={placeholder}
                    id={name}
                    style={error?.[name as keyof typeof error] ? invalidInputStyle : {}}
                    required={required}
                /> :
                <input 
                    type={type} 
                    name={name}
                    value={formData?.[name as keyof typeof formData] || ''}
                    onChange={handleChange}
                    placeholder={placeholder}
                    id={name}
                    style={error ? invalidInputStyle : {}}
                    required={required}
                    min={min}
                    max={max}
                />
            }
            {smallLabel && <small>{smallLabel}</small>}
        </div>
    )
}
export function InputNumber(
    {label, smallLabel, type, name, handleChange, placeholder, style, varSpan, error, formData, required = true, min, max}:
    {
        label: string,
        smallLabel?: string,
        type: string,
        name: string,
        handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
        placeholder?: string,
        style?: React.CSSProperties,
        varSpan?: boolean
        error?: string | undefined,
        formData: {},
        required?: boolean,
        min?: number,
        max?: number
    }
) {
    return (
        <div 
            className={varSpan ? 
                `${styles.inputContainer} ${styles.varSpan}` :
                styles.inputContainer
            } 
            style={style}
        >
            <label htmlFor={name}>{label}</label>
            <input 
                type={type} 
                name={name}
                value={formData?.[name as keyof typeof formData] || ''}
                onChange={handleChange}
                placeholder={placeholder}
                id={name}
                style={error?.[name as keyof typeof error] ? invalidInputStyle : {}}
                required={required}
            />
            {smallLabel && <small>{smallLabel}</small>}
        </div>
    )
}
export function SelectWithSearch(
    {label, options, handleChange, placeholder, name, style, varSpan, error, formData, required = true}:
    {
        label: string,
        options: string[],
        handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
        placeholder: string,
        name: string
        style?: React.CSSProperties,
        varSpan?: boolean,
        error?: string | undefined,
        formData: {},
        required?: boolean
    }
) {
    return (
        <div 
            className={varSpan ? 
                `${styles.inputContainer} ${styles.varSpan}` :
                styles.inputContainer
            } 
            style={style}
        >
            <label htmlFor={name}>{label}</label>
            <input
                list={`options-${name}`}
                name={name}
                onChange={handleChange}
                placeholder={placeholder}
                id={name}
                style={error?.[name as keyof typeof error] ? invalidInputStyle : {}}
                value={formData?.[name as keyof typeof formData] || ''}
                required={required}
            />
            <datalist id={`options-${name}`}>
                {options.map((option, index) => (
                    <option key={index} value={option} />
                ))}
            </datalist>
        </div>
    )

}
export function RadioSelect(
    {label, name, options, handleChange, style, varSpan, error, formData}:
    {
        label: string,
        name: string,
        options: string[],
        handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
        style?: React.CSSProperties,
        varSpan?: boolean,
        error?: string | undefined,
        formData: {}
    }
) {
    return (
        <div 
            className={varSpan ? 
                `${styles.inputContainer} ${styles.varSpan}` :
                styles.inputContainer
            } 
            style={style}
        >
            <label>{label}</label>
            <div className={styles.radioContainer}>
                {options.map((option, index) => (
                    <div className={styles.radioOption} key={index}>
                        <input 
                            type="radio" 
                            name={name} 
                            id={option}
                            value={option} 
                            onChange={handleChange}
                            checked={formData?.[name as keyof typeof formData] === option}
                        />
                        <label 
                            htmlFor={option}
                            style={error?.[name as keyof typeof error] ? invalidInputStyle : {}}
                        >
                            {option}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    )
}
export function Switch(
    {label, handleChange, style, varSpan, titleOne, titleTwo, switchError, setSwitchError}:
    {
        label: string,
        handleChange: (value: number) => void;
        style?: React.CSSProperties,
        varSpan?: boolean,
        titleOne: string,
        titleTwo: string,
        switchError: boolean,
        setSwitchError: (value: boolean) => void
    }
) {
    return (
        <div 
            className={varSpan ? 
                `${styles.inputContainer} ${styles.varSpan}` :
                styles.inputContainer
            } 
            style={style}
        >
            <label style={{textAlign: 'center'}}>{label}</label>
            <div 
                className={ switchError ? 
                    `${styles.switchContainer} ${styles.switchError}` : 
                    styles.switchContainer
                }
            >
                <SwitchButton 
                    title={titleOne} 
                    handleSwitch={handleChange} 
                    value={2}
                    setSwitchError={setSwitchError}
                />
                <SwitchButton 
                    title={titleTwo}
                    handleSwitch={handleChange} 
                    value={1}
                    setSwitchError={setSwitchError}
                />
            </div>
        </div>
    )
}