import React from 'react';
import { churchInfo } from '../config/churchInfo';
import ScrollReveal from '../components/ui/ScrollReveal';
import GradientBlob from '../components/ui/GradientBlob';

const About = () => {
    return (
        <div className="page-container" style={{ position: 'relative', overflow: 'hidden' }}>
            <GradientBlob color1="#D4A373" color2="#E76F51" size={500} top="-10%" right="-10%" delay={0} />
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
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', fontWeight: 800 }}>About Us</h1>
                </ScrollReveal>
                <ScrollReveal direction="up" delay={0.3}>
                    <p style={{ fontSize: '1.3rem', opacity: 0.95, maxWidth: '600px', margin: '0 auto' }}>
                        Learn about our mission, vision, and values
                    </p>
                </ScrollReveal>
            </section>

            {/* Mission Section */}
            <section style={{
                padding: '5rem 5%',
                background: 'var(--color-surface)',
                position: 'relative',
                zIndex: 1
            }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <ScrollReveal direction="up" delay={0.2}>
                        <h2 style={{
                            fontSize: '2.5rem',
                            marginBottom: '2rem',
                            color: 'var(--color-text)',
                            textAlign: 'center'
                        }}>
                            Our Mission
                        </h2>
                        <p style={{
                            fontSize: '1.2rem',
                            lineHeight: 1.8,
                            color: 'var(--color-text-muted)',
                            textAlign: 'center'
                        }}>
                            At {churchInfo.fullName}, we are committed to spreading the love of Christ,
                            building a strong community of believers, and making disciples who transform the world.
                            We believe in the power of God's word to change lives and bring hope to all.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* Values Section */}
            <section style={{
                padding: '5rem 5%',
                background: 'var(--color-background)',
                position: 'relative',
                zIndex: 1
            }}>
                <ScrollReveal direction="up" delay={0.2}>
                    <h2 style={{
                        fontSize: '2.5rem',
                        marginBottom: '3rem',
                        color: 'var(--color-text)',
                        textAlign: 'center'
                    }}>
                        Our Core Values
                    </h2>
                </ScrollReveal>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    {[
                        { title: 'Faith', description: 'We believe in the transformative power of faith in Jesus Christ.' },
                        { title: 'Community', description: 'We foster a welcoming and inclusive community for all.' },
                        { title: 'Service', description: 'We serve others with love, compassion, and humility.' },
                        { title: 'Growth', description: 'We encourage spiritual growth through worship and discipleship.' }
                    ].map((value, index) => (
                        <ScrollReveal key={index} direction="up" delay={0.1 * index} duration={0.6}>
                            <div style={{
                                background: 'var(--color-surface)',
                                padding: '2.5rem',
                                borderRadius: 'var(--radius-lg)',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                textAlign: 'center',
                                border: '1px solid rgba(233, 196, 106, 0.2)',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-8px)';
                                    e.currentTarget.style.boxShadow = '0 20px 50px rgba(233, 196, 106, 0.2)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                                }}
                            >
                                <h3 style={{
                                    fontSize: '1.8rem',
                                    marginBottom: '1rem',
                                    color: 'var(--color-primary)',
                                    fontWeight: 700
                                }}>
                                    {value.title}
                                </h3>
                                <p style={{
                                    fontSize: '1.05rem',
                                    lineHeight: 1.7,
                                    color: 'var(--color-text-muted)'
                                }}>
                                    {value.description}
                                </p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            {/* Contact Info */}
            <section style={{
                padding: '5rem 5%',
                background: 'var(--color-surface)',
                textAlign: 'center',
                position: 'relative',
                zIndex: 1
            }}>
                <ScrollReveal direction="up" delay={0.2}>
                    <h2 style={{
                        fontSize: '2.5rem',
                        marginBottom: '2rem',
                        color: 'var(--color-text)'
                    }}>
                        Visit Us
                    </h2>
                    <p style={{
                        fontSize: '1.2rem',
                        color: 'var(--color-text-muted)',
                        marginBottom: '1rem'
                    }}>
                        {churchInfo.address}
                    </p>
                    <p style={{
                        fontSize: '1.1rem',
                        color: 'var(--color-text-muted)'
                    }}>
                        {churchInfo.phone} | {churchInfo.email}
                    </p>
                </ScrollReveal>
            </section>
        </div>
    );
};

export default About;
