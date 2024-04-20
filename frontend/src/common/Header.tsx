'use client'
import Image from 'next/image'
import Link from 'next/link'

const Header: React.FC = () => {

    return (
        <header id='header'>
            <div className="container">
                <div className="row">
                    <Link href='/'>
                        <div className="left">
                            <Image src='/logo.png' width={130} height={65} alt='Youtube' />
                        </div>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header
