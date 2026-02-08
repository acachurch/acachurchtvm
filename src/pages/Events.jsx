import React from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import ScrollReveal from '../components/ui/ScrollReveal';
import GradientBlob from '../components/ui/GradientBlob';
import { churchInfo } from '../config/churchInfo';

const Events = () => {
    const getCategoryColor = (category) => {
        const colors = {
            'Special Service': '#E76F51',
            'Celebration': '#2A9D8F',
            'Special Prayer': '#E9C46A',
            'Holiday Service': '#F4A261',
            'Christmas': '#D62828'
        };
        return colors[category] || '#264653';
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
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', fontWeight: 800 }}>Upcoming Events</h1>
                </ScrollReveal>
                <ScrollReveal direction="up" delay={0.3}>
                    <p style={{ fontSize: '1.3rem', opacity: 0.95, maxWidth: '600px', margin: '0 auto' }}>
                        Join us for special services, celebrations, and fellowship
                    </p>
                </ScrollReveal>
            </section>

            {/* Events Grid */}
            <section style={{
                padding: '5rem 5%',
                background: 'var(--color-background)',
                position: 'relative',
                zIndex: 1
            }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2.5rem',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    {churchInfo.events.map((event, index) => (
                        <ScrollReveal key={event.id} direction="up" delay={0.1 * (index % 3)} duration={0.6}>
                            <div style={{
                                background: 'var(--color-surface)',
                                borderRadius: 'var(--radius-lg)',
                                overflow: 'hidden',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                cursor: 'pointer',
                                border: '1px solid rgba(233, 196, 106, 0.2)',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column'
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
                                {/* Category Badge */}
                                <div style={{
                                    background: getCategoryColor(event.category),
                                    color: 'white',
                                    padding: '0.5rem 1rem',
                                    fontSize: '0.85rem',
                                    fontWeight: 600,
                                    textAlign: 'center'
                                }}>
                                    {event.category}
                                </div>

                                {/* Content */}
                                <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                    <h3 style={{
                                        fontSize: '1.5rem',
                                        marginBottom: '1rem',
                                        color: 'var(--color-text)',
                                        fontWeight: 700
                                    }}>
                                        {event.title}
                                    </h3>

                                    <p style={{
                                        fontSize: '1rem',
                                        lineHeight: 1.6,
                                        color: 'var(--color-text-muted)',
                                        marginBottom: '1.5rem',
                                        flex: 1
                                    }}>
                                        {event.description}
                                    </p>

                                    {/* Meta Info */}
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '0.75rem',
                                        fontSize: '0.95rem',
                                        color: 'var(--color-text-muted)',
                                        paddingTop: '1rem',
                                        borderTop: '1px solid rgba(233, 196, 106, 0.2)'
                                    }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <Calendar size={18} color="var(--color-primary)" />
                                            <span style={{ fontWeight: 600 }}>{event.date}</span>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <Clock size={18} color="var(--color-primary)" />
                                            <span>{event.time}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Info Notice */}
                <ScrollReveal direction="up" delay={0.5}>
                    <div style={{
                        marginTop: '4rem',
                        textAlign: 'center',
                        padding: '2rem',
                        background: 'var(--color-surface)',
                        borderRadius: 'var(--radius-lg)',
                        maxWidth: '600px',
                        margin: '4rem auto 0',
                        border: '2px solid var(--color-primary)'
                    }}>
                        <h3 style={{
                            fontSize: '1.5rem',
                            marginBottom: '0.5rem',
                            color: 'var(--color-text)'
                        }}>
                            Stay Connected
                        </h3>
                        <p style={{
                            color: 'var(--color-text-muted)',
                            fontSize: '1rem'
                        }}>
                            Follow us on social media for the latest updates on events and special services!
                        </p>
                    </div>
                </ScrollReveal>
            </section>
        </div>
    );
};

export default Events;
