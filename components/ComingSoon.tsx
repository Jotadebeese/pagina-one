import Link from "next/link";

export default function ComingSoon() {
    return (
        <div className='not-found fade-in'>
            <p className='something-wrong'>Work in progress</p>
            <p>Something great<br/>is coming soon,<br/>come back later.</p>
            <br/>
            <p>In the mid time,<br /> check my portfolio.</p>
            <Link  className='btn' href={'https://www.jotadebeese.me/'}>HERE</Link>
        </div>
    )
  }