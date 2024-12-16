import React from 'react';
import './navbar.css';

export default function Navbar() {
    return (
        <>
            <link rel="stylesheet" href="navbar.css" />
            <div className="toolbar">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/projects">Projects</a>
                <a href="/experience">Experience</a>
                <a href="/education">Education</a>
                <a href="/contact">Contact</a>
            </div>
        </>
    );
}