"use client";
import React from 'react';
import {Nav, Navbar} from "react-bootstrap";
import Link from "next/link";
import {useRouter} from "next/navigation";

const AppNavBar = () => {

    const router=useRouter();
    const Logout = async () => {
        const response = await fetch("/api/login")
        const json = await response.json();
        if (json['status'] === true) {
            router.replace("/")
        }
    }

    return (
        <div>
            <Navbar expand="lg" className="shadow-sm  bg-white" variant="light">
                <div className="container">
                    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse className='mx-5' id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0 d-flex justify-content-evenly" style={{ maxHeight: '100px' }} navbarScroll>
                                <Link href="/about">Home</Link>
                               
                        </Nav>
                         
                        <Nav className="me-auto my-2 my-lg-0 d-flex justify-content-evenly" style={{ maxHeight: '100px' }} navbarScroll>
                                
                                <Link href="/blog">Blog</Link>
                                
                        </Nav>
                        <Nav className="me-auto my-2 my-lg-0 d-flex justify-content-evenly" style={{ maxHeight: '100px' }} navbarScroll>
                                 
                                <Link href="/more">more</Link>
                        </Nav>
                        <div className="d-flex">
                            <button onClick={Logout} className="btn btn-primary">Logout</button>
                        </div>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </div>
    );
};

export default AppNavBar;