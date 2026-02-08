import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { churchInfo } from '../../config/churchInfo';
import SplitText from '../ui/SplitText';
import GradientBlob from '../ui/GradientBlob';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            {/* Animated Gradient Blobs */}
            <GradientBlob color1="#D4A373" color2="#E76F51" size={700} top="-20%" left="-15%" delay={0} />
            <GradientBlob color1="#2A9D8F" color2="#264653" size={600} bottom="-15%" right="-10%" delay={1} />
            <GradientBlob color1="#E9C46A" color2="#F4A261" size={400} top="30%" right="10%" delay={2} />

            <div className="hero-background"></div>
            <div className="hero-content">
                <h2 className="hero-subtitle">Welcome Home</h2>
                <SplitText
                    className="hero-title"
                    delay={0.2}
                >
                    Experience God's Love & Grace
                </SplitText>

                <p className="hero-description">
                    Join us at {churchInfo.shortName} as we worship, learn, and grow together in faith.
                    Everyone is welcome.
                </p>
                <div className="hero-buttons">
                    <Link to="/about" className="btn btn-primary">
                        I'm New Here <ArrowRight size={18} />
                    </Link>
                    <Link to="/sermons" className="btn btn-outline">
                        Watch Sermons <PlayCircle size={18} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
