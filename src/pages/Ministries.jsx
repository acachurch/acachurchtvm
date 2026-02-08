import React from 'react';
import { Users, Music, Heart, Sun, BookOpen, Star } from 'lucide-react';
import SpotlightCard from '../components/ui/SpotlightCard';
import ScrollReveal from '../components/ui/ScrollReveal';
import GradientBlob from '../components/ui/GradientBlob';
import { churchInfo } from '../config/churchInfo';

// Icon mapping
const iconMap = {
    Sun: Sun,
    Star: Star,
    Music: Music,
    Heart: Heart,
    Users: Users,
    BookOpen: BookOpen
};

const Ministries = () => {
    return (
        <div className="page-container" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Animated Background Blobs */}
            <GradientBlob color1="#2A9D8F" color2="#E76F51" size={600} top="-15%" left="-10%" delay={0} />
            <GradientBlob color1="#E9C46A" color2="#F4A261" size={500} bottom="-10%" right="-10%" delay={1.5} />

            <section style={{
                background: 'linear-gradient(135deg, var(--color-secondary) 0%, #1a3a4f 100%)',
                color: 'white',
                padding: '5rem 5%',
                textAlign: 'center',
                position: 'relative',
                zIndex: 1
            }}>
                <ScrollReveal direction="down" delay={0.1}>
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', fontWeight: 800 }}>Our Ministries</h1>
                </ScrollReveal>
                <ScrollReveal direction="up" delay={0.3}>
                    <p style={{ fontSize: '1.3rem', opacity: 0.95, maxWidth: '600px', margin: '0 auto' }}>
                        Serve, Grow, and Belong. There is a place for everyone.
                    </p>
                </ScrollReveal>
            </section>

            <section style={{
                padding: '5rem 5%',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2.5rem',
                position: 'relative',
                zIndex: 1,
                background: 'var(--color-background)'
            }}>
                {churchInfo.ministries.map((ministry, index) => {
                    const IconComponent = iconMap[ministry.icon];
                    return (
                        <ScrollReveal key={index} direction="up" delay={0.1 * index} duration={0.7}>
                            <SpotlightCard
                                className="ministry-card"
                                spotlightColor={`${ministry.color}40`}
                            >
                                <div style={{
                                    padding: '2.5rem',
                                    height: '100%',
                                    textAlign: 'center',
                                    background: 'var(--color-surface)',
                                    borderRadius: 'var(--radius-lg)',
                                    transition: 'transform 0.3s ease'
                                }}>
                                    <div style={{
                                        color: ministry.color,
                                        marginBottom: '1.5rem',
                                        background: `linear-gradient(135deg, ${ministry.color}15, ${ministry.color}25)`,
                                        width: '90px',
                                        height: '90px',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        margin: '0 auto 1.5rem',
                                        boxShadow: `0 10px 30px ${ministry.color}30`,
                                        border: `2px solid ${ministry.color}20`
                                    }}>
                                        {IconComponent && <IconComponent size={44} strokeWidth={2.5} />}
                                    </div>
                                    <h3 style={{
                                        fontSize: '1.6rem',
                                        marginBottom: '1rem',
                                        color: 'var(--color-text)',
                                        fontWeight: 700
                                    }}>
                                        {ministry.title}
                                    </h3>
                                    <p style={{
                                        color: 'var(--color-text-muted)',
                                        lineHeight: 1.7,
                                        fontSize: '1.05rem'
                                    }}>
                                        {ministry.description}
                                    </p>
                                </div>
                            </SpotlightCard>
                        </ScrollReveal>
                    );
                })}
            </section>
        </div>
    );
};

export default Ministries;
