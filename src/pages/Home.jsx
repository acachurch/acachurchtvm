import React from 'react';
import Hero from '../components/sections/Hero';
import { Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { churchInfo } from '../config/churchInfo';
import ScrollReveal from '../components/ui/ScrollReveal';
import GradientBlob from '../components/ui/GradientBlob';

const Home = () => {
    return (
        <div className="page-container" style={{ position: 'relative', overflow: 'hidden' }}>
            <Hero />

            {/* Gradient Blobs for depth */}
            <GradientBlob color1="#D4A373" color2="#E76F51" size={500} top="-10%" right="-10%" delay={0} />
            <GradientBlob color1="#2A475E" color2="#2A9D8F" size={400} bottom="20%" left="-5%" delay={2} />

            {/* Service Times Section */}
            <section className="section-padding" style={{
                padding: '5rem 5%',
                background: 'var(--color-surface)',
                textAlign: 'center',
                position: 'relative',
                zIndex: 1
            }}>
                <ScrollReveal direction="up" delay={0.2}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--color-secondary)' }}>
                        Join Us This Sunday
                    </h2>
                </ScrollReveal>

                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
                    {churchInfo.services.map((service, index) => (
                        <ScrollReveal key={index} direction="up" delay={0.3 + index * 0.1}>
                            <div style={{
                                background: 'var(--color-background)',
                                padding: '2.5rem',
                                borderRadius: 'var(--radius-lg)',
                                boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                                minWidth: '280px',
                                border: '1px solid rgba(212, 163, 115, 0.2)',
                                backdropFilter: 'blur(10px)',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                cursor: 'pointer'
                            }}
                                className="service-card"
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-8px)';
                                    e.currentTarget.style.boxShadow = '0 20px 60px rgba(233, 196, 106, 0.2)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.08)';
                                }}
                            >
                                <Clock size={48} color="var(--color-primary)" style={{ marginBottom: '1.5rem' }} />
                                <h3 style={{ fontSize: '1.6rem', marginBottom: '0.8rem', fontWeight: 700, color: 'var(--color-text)' }}>
                                    {service.name}
                                </h3>
                                <p style={{ fontSize: '1.3rem', fontWeight: '600', color: 'var(--color-text)', marginBottom: '0.5rem' }}>
                                    {service.day}
                                </p>
                                <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)' }}>
                                    {service.time}
                                </p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            {/* Pastor Section */}
            <section style={{
                padding: '6rem 5%',
                background: 'var(--color-background)',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <GradientBlob color1="#F4A261" color2="#E76F51" size={400} top="20%" left="-10%" delay={1.5} />

                <div style={{
                    maxWidth: '1000px',
                    margin: '0 auto',
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
                            Meet Our Pastor
                        </h2>
                    </ScrollReveal>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '3rem',
                        alignItems: 'center'
                    }}>
                        <ScrollReveal direction="left" delay={0.3}>
                            <div style={{
                                position: 'relative',
                                borderRadius: 'var(--radius-lg)',
                                overflow: 'hidden',
                                boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
                                aspectRatio: '3/4',
                                maxWidth: '400px',
                                margin: '0 auto'
                            }}>
                                <img
                                    src={churchInfo.pastor.image}
                                    alt={churchInfo.pastor.name}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover'
                                    }}
                                />
                                <div style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
                                    padding: '2rem',
                                    color: 'white'
                                }}>
                                    <h3 style={{ fontSize: '1.8rem', marginBottom: '0.3rem', fontWeight: 700 }}>
                                        {churchInfo.pastor.name}
                                    </h3>
                                    <p style={{ fontSize: '1.1rem', color: 'var(--color-primary)' }}>
                                        {churchInfo.pastor.title}
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal direction="right" delay={0.5}>
                            <div>
                                <div style={{
                                    background: 'var(--color-surface)',
                                    padding: '2rem',
                                    borderRadius: 'var(--radius-lg)',
                                    borderLeft: '4px solid var(--color-primary)',
                                    marginBottom: '2rem',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                                }}>
                                    <p style={{
                                        fontSize: '1.2rem',
                                        fontStyle: 'italic',
                                        color: 'var(--color-text)',
                                        lineHeight: 1.6
                                    }}>
                                        {churchInfo.pastor.quote}
                                    </p>
                                </div>
                                <p style={{
                                    fontSize: '1.1rem',
                                    lineHeight: 1.8,
                                    color: 'var(--color-text-muted)'
                                }}>
                                    {churchInfo.pastor.bio}
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* About Preview */}
            <section style={{
                padding: '6rem 5%',
                background: 'var(--color-background)',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <GradientBlob color1="#E9C46A" color2="#F4A261" size={350} top="10%" right="5%" delay={1} />

                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '4rem',
                    alignItems: 'center',
                    position: 'relative',
                    zIndex: 1
                }}>
                    <ScrollReveal direction="left" delay={0.2}>
                        <div>
                            <h2 style={{
                                fontSize: '2.8rem',
                                marginBottom: '1.5rem',
                                color: 'var(--color-secondary)',
                                fontWeight: 800
                            }}>
                                Who We Are
                            </h2>
                            <p style={{
                                fontSize: '1.15rem',
                                marginBottom: '1.5rem',
                                color: 'var(--color-text-muted)',
                                lineHeight: 1.8
                            }}>
                                {churchInfo.shortName} is a vibrant community of believers in Tiruvannamalai.
                                We believe in the power of God's word to transform lives. Our mission is to love God, love people, and make disciples of all nations.
                            </p>
                            <Link
                                to="/about"
                                className="btn btn-primary"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    textDecoration: 'none',
                                    padding: '1rem 2rem',
                                    fontSize: '1.1rem',
                                    borderRadius: 'var(--radius-full)',
                                    background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
                                    boxShadow: '0 10px 30px rgba(212, 163, 115, 0.3)',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-3px)';
                                    e.currentTarget.style.boxShadow = '0 15px 40px rgba(212, 163, 115, 0.4)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(212, 163, 115, 0.3)';
                                }}
                            >
                                Read Our Story
                            </Link>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal direction="right" delay={0.4}>
                        <div style={{ position: 'relative' }}>
                            <div style={{
                                width: '100%',
                                height: '450px',
                                background: 'linear-gradient(135deg, rgba(42, 71, 94, 0.9), rgba(212, 163, 115, 0.3))',
                                borderRadius: 'var(--radius-lg)',
                                backgroundImage: 'url(https://images.unsplash.com/photo-1548625149-bc4c29a132db?q=80&w=2070&auto=format&fit=crop)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
                                position: 'relative',
                                overflow: 'hidden'
                            }}>
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: 'linear-gradient(135deg, rgba(42, 71, 94, 0.7), transparent)',
                                    backdropFilter: 'blur(2px)'
                                }}></div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
};

export default Home;
