'use client'
import styles from '/styles/page.module.css'
import MainPage from '@/components/MainPage'
import Services from '@/components/Services'
import AboutUs from '@/components/AboutUs'
import ContactUs from '@/components/ContactUs'
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const Ref = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    // @ts-ignore: Object is possibly 'null'.
    const hiddenElements = Ref.current.querySelectorAll('.hidden');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsIntersecting(entry.isIntersecting);
        if(entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      })
    }, );
    hiddenElements.forEach((el: Element) => observer.observe(el));
  }, [isIntersecting])

  return (
    <main className={styles.main} ref={Ref}>
      <section className='hidden first'>
        <MainPage />
      </section>
      <section id='services' className='hidden third'>
        <Services />
      </section>
      <section id='about' className='hidden second'>
        <AboutUs />
      </section>
      <section id='contact' className='hidden fourth'>
        <ContactUs />
      </section>
    </main>
  )
}
