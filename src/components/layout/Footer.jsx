import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';
import { churchInfo } from '../../config/churchInfo';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                {/* Column 1: About */}
                <div className="footer-column">
                    <h3>{churchInfo.shortName}</h3>
                    <p className="footer-description">
                        A community of believers dedicated to worship, fellowship, and spreading the love of God.
                    </p>
                    {churchInfo.headChurchUrl && (
                        <div style={{ marginBottom: '1.5rem' }}>
                            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', margin: 0 }}>
                                Affiliated with <a href={churchInfo.headChurchUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Apostolic Christian Assembly</a>
                            </p>
                        </div>
                    )}
                    <div className="footer-socials" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        {churchInfo.social.facebook && (
                            <a href={churchInfo.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="social-icon">
                                <Facebook size={20} />
                            </a>
                        )}
                        {churchInfo.social.instagram && (
                            <a href={churchInfo.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="social-icon">
                                <Instagram size={20} />
                            </a>
                        )}
                        {churchInfo.social.youtube && (
                            <a href={churchInfo.social.youtube} target="_blank" rel="noreferrer" aria-label="Youtube" className="social-icon">
                                <Youtube size={20} />
                            </a>
                        )}
                    </div>
                </div>

                {/* Column 2: Quick Links */}
                <div className="footer-column">
                    <h3>Quick Links</h3>
                    <ul className="footer-links">
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/sermons">Sermons</Link></li>
                        <li><Link to="/events">Events</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                {/* Column 3: Contact */}
                <div className="footer-column">
                    <h3>Contact Us</h3>
                    <div className="footer-contact-item">
                        <MapPin size={20} className="text-primary" />
                        <span>{churchInfo.address}</span>
                    </div>
                    <div className="footer-contact-item">
                        <Phone size={20} className="text-primary" />
                        <a href={`tel:${churchInfo.phone}`}>{churchInfo.phone}</a>
                    </div>
                    <div className="footer-contact-item">
                        <Mail size={20} className="text-primary" />
                        <a href={`mailto:${churchInfo.email}`}>{churchInfo.email}</a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} {churchInfo.name}. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
