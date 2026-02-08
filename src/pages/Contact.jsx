import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { churchInfo } from '../config/churchInfo';
import ScrollReveal from '../components/ui/ScrollReveal';
import GradientBlob from '../components/ui/GradientBlob';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="page-container" style={{ position: 'relative', overflow: 'hidden' }}>
            <GradientBlob color1="#E9C46A" color2="#F4A261" size={500} top="-10%" right="-10%" delay={0} />
            <GradientBlob color1="#2A9D8F" color2="#264653" size={400} bottom="-10%" left="-10%" delay={1.5} />

            {/* Header */}
            <section style={{
                background: 'linear-gradient(135deg, var(--color-secondary) 0%, #1a3a4f 100%)',
                color: 'white',
                padding: '5rem 5%',
                textAlign: 'center',
                position: 'relative',
                zIndex: 1
            }}>
                <ScrollReveal direction="down" delay={0.1}>
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', fontWeight: 800 }}>Contact Us</h1>
                </ScrollReveal>
                <ScrollReveal direction="up" delay={0.3}>
                    <p style={{ fontSize: '1.3rem', opacity: 0.95, maxWidth: '600px', margin: '0 auto' }}>
                        We'd love to hear from you
                    </p>
                </ScrollReveal>
            </section>

            {/* Contact Info & Form */}
            <section style={{
                padding: '5rem 5%',
                background: 'var(--color-background)',
                position: 'relative',
                zIndex: 1
            }}>
                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '3rem'
                }}>
                    {/* Contact Information */}
                    <ScrollReveal direction="left" delay={0.2}>
                        <div>
                            <h2 style={{
                                fontSize: '2rem',
                                marginBottom: '2rem',
                                color: 'var(--color-text)'
                            }}>
                                Get In Touch
                            </h2>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                    <div style={{
                                        background: 'var(--color-primary)',
                                        borderRadius: '50%',
                                        padding: '0.8rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <MapPin size={24} color="white" />
                                    </div>
                                    <div>
                                        <h3 style={{
                                            fontSize: '1.2rem',
                                            marginBottom: '0.3rem',
                                            color: 'var(--color-text)'
                                        }}>
                                            Address
                                        </h3>
                                        <p style={{ color: 'var(--color-text-muted)' }}>
                                            {churchInfo.address}
                                        </p>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                    <div style={{
                                        background: 'var(--color-primary)',
                                        borderRadius: '50%',
                                        padding: '0.8rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Phone size={24} color="white" />
                                    </div>
                                    <div>
                                        <h3 style={{
                                            fontSize: '1.2rem',
                                            marginBottom: '0.3rem',
                                            color: 'var(--color-text)'
                                        }}>
                                            Phone
                                        </h3>
                                        <p style={{ color: 'var(--color-text-muted)' }}>
                                            {churchInfo.phone}
                                        </p>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                    <div style={{
                                        background: 'var(--color-primary)',
                                        borderRadius: '50%',
                                        padding: '0.8rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Mail size={24} color="white" />
                                    </div>
                                    <div>
                                        <h3 style={{
                                            fontSize: '1.2rem',
                                            marginBottom: '0.3rem',
                                            color: 'var(--color-text)'
                                        }}>
                                            Email
                                        </h3>
                                        <p style={{ color: 'var(--color-text-muted)' }}>
                                            {churchInfo.email}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Contact Form */}
                    <ScrollReveal direction="right" delay={0.4}>
                        <form onSubmit={handleSubmit} style={{
                            background: 'var(--color-surface)',
                            padding: '2.5rem',
                            borderRadius: 'var(--radius-lg)',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                            border: '1px solid rgba(233, 196, 106, 0.2)'
                        }}>
                            <div style={{ marginBottom: '1.5rem' }}>
                                <label style={{
                                    display: 'block',
                                    marginBottom: '0.5rem',
                                    fontWeight: 600,
                                    color: 'var(--color-text)'
                                }}>
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    style={{
                                        width: '100%',
                                        padding: '0.8rem',
                                        borderRadius: 'var(--radius-md)',
                                        border: '1px solid rgba(233, 196, 106, 0.3)',
                                        fontSize: '1rem',
                                        background: 'var(--color-background)',
                                        color: 'var(--color-text)'
                                    }}
                                />
                            </div>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <label style={{
                                    display: 'block',
                                    marginBottom: '0.5rem',
                                    fontWeight: 600,
                                    color: 'var(--color-text)'
                                }}>
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    style={{
                                        width: '100%',
                                        padding: '0.8rem',
                                        borderRadius: 'var(--radius-md)',
                                        border: '1px solid rgba(233, 196, 106, 0.3)',
                                        fontSize: '1rem',
                                        background: 'var(--color-background)',
                                        color: 'var(--color-text)'
                                    }}
                                />
                            </div>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <label style={{
                                    display: 'block',
                                    marginBottom: '0.5rem',
                                    fontWeight: 600,
                                    color: 'var(--color-text)'
                                }}>
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    style={{
                                        width: '100%',
                                        padding: '0.8rem',
                                        borderRadius: 'var(--radius-md)',
                                        border: '1px solid rgba(233, 196, 106, 0.3)',
                                        fontSize: '1rem',
                                        resize: 'vertical',
                                        background: 'var(--color-background)',
                                        color: 'var(--color-text)'
                                    }}
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary"
                                style={{
                                    width: '100%',
                                    justifyContent: 'center',
                                    fontSize: '1.1rem'
                                }}
                            >
                                Send Message <Send size={20} />
                            </button>
                        </form>
                    </ScrollReveal>
                </div>
            </section>

            {/* Directions Section */}
            <section style={{
                padding: '5rem 5%',
                background: 'var(--color-surface)',
                position: 'relative',
                zIndex: 1
            }}>
                <ScrollReveal direction="up" delay={0.2}>
                    <h2 style={{
                        fontSize: '2.5rem',
                        textAlign: 'center',
                        marginBottom: '3rem',
                        color: 'var(--color-text)'
                    }}>
                        How to Reach Us
                    </h2>
                </ScrollReveal>

                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '2rem'
                }}>
                    {/* From Old Bus Stand */}
                    <ScrollReveal direction="up" delay={0.3}>
                        <div style={{
                            background: 'var(--color-background)',
                            borderRadius: 'var(--radius-lg)',
                            overflow: 'hidden',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                            border: '2px solid var(--color-primary)'
                        }}>
                            <div style={{
                                background: 'var(--color-primary)',
                                padding: '1rem',
                                textAlign: 'center'
                            }}>
                                <h3 style={{
                                    fontSize: '1.3rem',
                                    color: 'white',
                                    fontWeight: 700,
                                    margin: 0
                                }}>
                                    From Old Bus Stand
                                </h3>
                            </div>
                            <div style={{ height: '400px' }}>
                                <iframe
                                    src="https://www.google.com/maps/embed/v1/directions?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&origin=Tiruvannamalai+Bus+Stand,Tiruvannamalai&destination=ACA+Church+Tiruvannamalai&mode=driving"
                                    width="100%"
                                    height="400"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* From Railway Station */}
                    <ScrollReveal direction="up" delay={0.4}>
                        <div style={{
                            background: 'var(--color-background)',
                            borderRadius: 'var(--radius-lg)',
                            overflow: 'hidden',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                            border: '2px solid var(--color-primary)'
                        }}>
                            <div style={{
                                background: 'var(--color-primary)',
                                padding: '1rem',
                                textAlign: 'center'
                            }}>
                                <h3 style={{
                                    fontSize: '1.3rem',
                                    color: 'white',
                                    fontWeight: 700,
                                    margin: 0
                                }}>
                                    From Railway Station
                                </h3>
                            </div>
                            <div style={{ height: '400px' }}>
                                <iframe
                                    src="https://www.google.com/maps/embed/v1/directions?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&origin=Tiruvannamalai+Railway+Station&destination=ACA+Church+Tiruvannamalai&mode=driving"
                                    width="100%"
                                    height="400"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* From New Bus Stand */}
                    <ScrollReveal direction="up" delay={0.5}>
                        <div style={{
                            background: 'var(--color-background)',
                            borderRadius: 'var(--radius-lg)',
                            overflow: 'hidden',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                            border: '2px solid var(--color-primary)'
                        }}>
                            <div style={{
                                background: 'var(--color-primary)',
                                padding: '1rem',
                                textAlign: 'center'
                            }}>
                                <h3 style={{
                                    fontSize: '1.3rem',
                                    color: 'white',
                                    fontWeight: 700,
                                    margin: 0
                                }}>
                                    From New Bus Stand
                                </h3>
                            </div>
                            <div style={{ height: '400px' }}>
                                <iframe
                                    src="https://www.google.com/maps/embed/v1/directions?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&origin=12.2367591,79.079333&destination=ACA+Church+Tiruvannamalai&mode=driving"
                                    width="100%"
                                    height="400"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Google Map Section */}
            <section style={{
                padding: '0',
                background: 'var(--color-background)',
                position: 'relative',
                zIndex: 1
            }}>
                <ScrollReveal direction="up" delay={0.2}>
                    <div style={{
                        width: '100%',
                        height: '500px',
                        overflow: 'hidden',
                        borderRadius: '0',
                        boxShadow: '0 -10px 30px rgba(0,0,0,0.1)'
                    }}>
                        <iframe
                            src={`https://www.google.com/maps?q=${churchInfo.location.lat},${churchInfo.location.lng}&hl=es;z=14&output=embed`}
                            width="100%"
                            height="500"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Church Location"
                        />
                    </div>
                </ScrollReveal>
            </section>
        </div>
    );
};

export default Contact;
