import React from 'react';
import { Play, Calendar, User, Clock } from 'lucide-react';
import ScrollReveal from '../components/ui/ScrollReveal';
import GradientBlob from '../components/ui/GradientBlob';

const Sermons = () => {
    // Sample sermon data - you can move this to churchInfo.js later
    const sermons = [
        {
            id: 1,
            title: "Walking in Faith",
            preacher: "Pastor Solomon",
            date: "February 2, 2026",
            duration: "45 min",
            description: "Exploring what it means to truly walk by faith and not by sight in our daily lives.",
            videoUrl: "#",
            thumbnail: "https://images.unsplash.com/photo-1507692049790-de58290a4334?q=80&w=2070&auto=format&fit=crop"
        },
        {
            id: 2,
            title: "The Power of Prayer",
            preacher: "Pastor Solomon",
            date: "January 26, 2026",
            duration: "52 min",
            description: "Understanding the transformative power of prayer in our relationship with God.",
            videoUrl: "#",
            thumbnail: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=2070&auto=format&fit=crop"
        },
        {
            id: 3,
            title: "Love Your Neighbor",
            preacher: "Pastor Solomon",
            date: "January 19, 2026",
            duration: "48 min",
            description: "Practical ways to show Christ's love to those around us in our community.",
            videoUrl: "#",
            thumbnail: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2073&auto=format&fit=crop"
        },
        {
            id: 4,
            title: "Hope in Difficult Times",
            preacher: "Pastor Solomon",
            date: "January 12, 2026",
            duration: "50 min",
            description: "Finding hope and strength in God during life's most challenging seasons.",
            videoUrl: "#",
            thumbnail: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070&auto=format&fit=crop"
        }
    ];

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
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', fontWeight: 800 }}>Sermons</h1>
                </ScrollReveal>
                <ScrollReveal direction="up" delay={0.3}>
                    <p style={{ fontSize: '1.3rem', opacity: 0.95, maxWidth: '600px', margin: '0 auto' }}>
                        Watch and listen to messages that inspire and transform
                    </p>
                </ScrollReveal>
            </section>

            {/* Sermons Grid */}
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
                    {sermons.map((sermon, index) => (
                        <ScrollReveal key={sermon.id} direction="up" delay={0.1 * index} duration={0.6}>
                            <div style={{
                                background: 'var(--color-surface)',
                                borderRadius: 'var(--radius-lg)',
                                overflow: 'hidden',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                cursor: 'pointer',
                                border: '1px solid rgba(233, 196, 106, 0.2)'
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
                                {/* Thumbnail */}
                                <div style={{
                                    position: 'relative',
                                    width: '100%',
                                    paddingTop: '56.25%', // 16:9 aspect ratio
                                    background: '#000',
                                    overflow: 'hidden'
                                }}>
                                    <img
                                        src={sermon.thumbnail}
                                        alt={sermon.title}
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            opacity: 0.8
                                        }}
                                    />
                                    {/* Play Button Overlay */}
                                    <div style={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        width: '70px',
                                        height: '70px',
                                        borderRadius: '50%',
                                        background: 'rgba(233, 196, 106, 0.9)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        transition: 'transform 0.3s ease'
                                    }}
                                        onMouseEnter={(e) => e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.1)'}
                                        onMouseLeave={(e) => e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1)'}
                                    >
                                        <Play size={32} color="#000" fill="#000" />
                                    </div>
                                </div>

                                {/* Content */}
                                <div style={{ padding: '1.5rem' }}>
                                    <h3 style={{
                                        fontSize: '1.5rem',
                                        marginBottom: '1rem',
                                        color: 'var(--color-text)',
                                        fontWeight: 700
                                    }}>
                                        {sermon.title}
                                    </h3>

                                    <p style={{
                                        fontSize: '1rem',
                                        lineHeight: 1.6,
                                        color: 'var(--color-text-muted)',
                                        marginBottom: '1.5rem'
                                    }}>
                                        {sermon.description}
                                    </p>

                                    {/* Meta Info */}
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '0.5rem',
                                        fontSize: '0.9rem',
                                        color: 'var(--color-text-muted)'
                                    }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <User size={16} color="var(--color-primary)" />
                                            <span>{sermon.preacher}</span>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <Calendar size={16} color="var(--color-primary)" />
                                            <span>{sermon.date}</span>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <Clock size={16} color="var(--color-primary)" />
                                            <span>{sermon.duration}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Coming Soon Notice */}
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
                            More Sermons Coming Soon
                        </h3>
                        <p style={{
                            color: 'var(--color-text-muted)',
                            fontSize: '1rem'
                        }}>
                            We're working on adding video playback. Check back soon!
                        </p>
                    </div>
                </ScrollReveal>
            </section>
        </div>
    );
};

export default Sermons;
