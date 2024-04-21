'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Navbar, Button  } from "flowbite-react";

const Header: React.FC = () => {
  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand href='/'>
        <Image src='/logo.png' width={130} height={65} alt='Youtube' />
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>Get started</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header
