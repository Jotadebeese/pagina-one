"use client"
import { useState } from "react"
import { Input } from "./Inputs"
import styles from '@/src/styles/Forms.module.css'
import { FormSubmit } from "./Buttons"

const invalidInputStyle = {
    border: '1px solid #F18397',
}
interface DataFormat {
    [key: string]: string; // Assuming all form data values are strings
}
interface FormErrors {
    [key: string]: string | undefined;
}
interface InputFields {
    [key: string]: InputField;
}
interface InputField {
    type: string;
    required?: boolean;
    label?: string;
    placeholder?: string;
    smallLabel?: string;
    style?: React.CSSProperties;
}
export function BasicForm(
    {title, inputFields}:
    {
        title?: string,
        inputFields: InputFields
    }
) {
    const [formData, setFormData] = useState<DataFormat>({})
    const [errors, setErrors] = useState<FormErrors>({});
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        Object.keys(errors).forEach((name) => {
            if (name === e.target.name) {
                setErrors((prev) => {
                    const holderErrors = { ...prev };
                    delete holderErrors[name];
                    return holderErrors;
                });
            }
        });
    }
    const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        Object.keys(errors).forEach((name) => {
            if (name === e.target.name) {
                setErrors((prev) => {
                    const holderErrors = { ...prev };
                    delete holderErrors[name];
                    return holderErrors;
                });
            }
        });
    }
    const validateForm = () => {
        let formErrors: FormErrors = {};
        Object.keys(formData).forEach((name) => {
            const value = formData[name];
            const required = formData[`${name}_required`];
            const type = formData[`${name}_type`];
            const error = validateField(name, value, required, type);
            if (error) {
                formErrors[name] = error;
            }
        });
        console.log('Form errors:', formErrors);
        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    }
    const validateField = (name: string, value: string, required: string, type: string) => {
        if (required === 'true' && !value) {
            return 'Filed is required';
        } else if (type === 'email' && !isValidEmail(value)) {
            return 'Invalid email';
        } else if (type === 'tel' && !isValidPhone(value)) {
            return 'Invalid phone number';
        } else if (type === 'radio' && !value) {
            return 'Select an option';
        }
    }
    const isValidEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    const isValidPhone = (phoneNumber: string) => {
        const colombiaPhoneRegex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
        return colombiaPhoneRegex.test(phoneNumber);
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formIsValid = validateForm();
        if (formIsValid) {
            console.log('Form data:', formData);
        }
    }
    return (
        <div className={styles.main}>
            {title && (<h2>{title}</h2>)}
            <form onSubmit={handleSubmit}  className={styles.formContainer}>
                {Object.keys(inputFields).map((name) => {
                    const { type, required, label, placeholder, smallLabel, style } = inputFields[name];
                    return (
                        <Input
                            key={name}
                            type={type}
                            name={name}
                            label={label}
                            placeholder={placeholder}
                            smallLabel={smallLabel}
                            handleChange={handleChange}
                            handleTextAreaChange={handleTextAreaChange}
                            error={errors[name]}
                            formData={formData}
                            required={required}
                            style={style}
                        />
                    )
                })}
                <FormSubmit 
                    style={{ marginLeft: 'auto', gridColumn: 'span 2' }}
                    title='Submit'
                />
            </form>
        </div>
    )
}