import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { churchInfo } from '../../config/churchInfo';
import ThemeToggle from '../ui/ThemeToggle';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Ministries', path: '/ministries' },
        { name: 'Sermons', path: '/sermons' },
        { name: 'Events', path: '/events' },
        // { name: 'Gallery', path: '/gallery' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <Link to="/" className="navbar-logo">
                {churchInfo.shortName}
            </Link>

            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginLeft: 'auto' }}>
                <div className={`navbar-links ${isOpen ? 'mobile-hidden' : ''}`}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Theme Toggle */}
                <ThemeToggle />
            </div>

            <button className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Mobile Drawer */}
            <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        to={link.path}
                        className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                        style={{ fontSize: '1.2rem' }}
                    >
                        {link.name}
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
