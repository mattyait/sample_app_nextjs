import Link from 'next/link';
import HeroSection from './HeroSection';
import Features from './Features';
import Testimony from './Testimony';
import Footer from './Footer';

const HomePage = () => (
    <div >
        <HeroSection/>
        <Features/>
        <Testimony/>
        <Footer/>
    </div>
);

export { HomePage };
