import styles from '@/src/styles/PageCards.module.css'
import contact from '@/src/images/contact.svg'
import Image from 'next/image'
import { BasicForm } from './Forms'

export default function ContactPageCard() {
    return (
        <div className={styles.main}>
            <Image src={contact} alt="Contact" width={500} />
            <p>Fill the form below and one of our many staff &#40;only two&#41; will be in touch.</p>
            <BasicForm 
                inputFields={{
                    name: {
                        type: 'text',
                        label: 'Name',
                    },
                    email: {
                        type: 'email',
                        label: 'Email',
                    },
                    message: {
                        type: 'textArea',
                        label: 'Message',
                        placeholder: 'Could be anything really...',
                        style:{gridColumn: 'span 2'}
                    }
                }}
            />
        </div>
    )
}