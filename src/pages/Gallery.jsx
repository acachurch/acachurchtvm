import React, { useState } from 'react';
import { churchInfo } from '../config/churchInfo';
import ImageCarousel from '../components/ui/ImageCarousel';
import CircularGallery from '../components/ui/CircularGallery';
import CardSwap from '../components/ui/CardSwap';
import ScrollReveal from '../components/ui/ScrollReveal';
import GradientBlob from '../components/ui/GradientBlob';
import PillNav from '../components/ui/PillNav';
import { Grid, Circle, Layers } from 'lucide-react';

const Gallery = () => {
    const [viewMode, setViewMode] = useState('carousel');

    const viewOptions = [
        { value: 'carousel', label: 'Carousel', icon: <Layers size={20} /> },
        { value: 'circular', label: 'Circular', icon: <Circle size={20} /> },
        { value: 'cardswap', label: 'Card Swap', icon: <Grid size={20} /> }
    ];

    return (
        <div className="page-container" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Gradient Blobs */}
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
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', fontWeight: 800 }}>Our Gallery</h1>
                </ScrollReveal>
                <ScrollReveal direction="up" delay={0.3}>
                    <p style={{ fontSize: '1.3rem', opacity: 0.95, maxWidth: '600px', margin: '0 auto' }}>
                        Moments of faith, fellowship, and community
                    </p>
                </ScrollReveal>
            </section>

            {/* View Mode Selector */}
            <section style={{
                padding: '3rem 5%',
                background: 'var(--color-surface)',
                position: 'relative',
                zIndex: 1
            }}>
                <ScrollReveal direction="up" delay={0.2}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginBottom: '3rem'
                    }}>
                        <PillNav
                            options={viewOptions}
                            activeOption={viewMode}
                            onOptionChange={setViewMode}
                        />
                    </div>
                </ScrollReveal>

                {/* Gallery Display */}
                <ScrollReveal direction="up" delay={0.4}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        {viewMode === 'carousel' && (
                            <ImageCarousel images={churchInfo.gallery} />
                        )}
                        {viewMode === 'circular' && (
                            <div style={{ padding: '2rem 0' }}>
                                <CircularGallery images={churchInfo.gallery} />
                            </div>
                        )}
                        {viewMode === 'cardswap' && (
                            <div style={{ padding: '2rem 0' }}>
                                <CardSwap images={churchInfo.gallery} />
                            </div>
                        )}
                    </div>
                </ScrollReveal>
            </section>

            {/* Grid View Section */}
            <section style={{
                padding: '4rem 5%',
                background: 'var(--color-background)',
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
                        All Photos
                    </h2>
                </ScrollReveal>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    {churchInfo.gallery.map((image, index) => (
                        <ScrollReveal key={image.id} direction="up" delay={0.1 * (index % 4)} duration={0.6}>
                            <div
                                style={{
                                    position: 'relative',
                                    borderRadius: 'var(--radius-lg)',
                                    overflow: 'hidden',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                                    cursor: 'pointer',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    aspectRatio: '4/3',
                                    background: 'var(--color-surface)'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-8px)';
                                    e.currentTarget.style.boxShadow = '0 20px 50px rgba(233, 196, 106, 0.3)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
                                }}
                            >
                                <img
                                    src={image.image}
                                    alt={image.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover'
                                    }}
                                    loading="lazy"
                                />
                                <div
                                    className="image-overlay"
                                    style={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
                                        padding: '1.5rem',
                                        color: 'white',
                                        transform: 'translateY(100%)',
                                        transition: 'transform 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                                >
                                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.3rem' }}>{image.title}</h3>
                                    <p style={{ opacity: 0.9, fontSize: '0.9rem' }}>{image.category}</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Gallery;
