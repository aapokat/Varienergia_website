import './feedback.css';
import { useState, useEffect } from 'react';
import image1 from '../Assets/images/Talli1.jpg';
import image2 from '../Assets/images/Talli2.jpg';
import image3 from '../Assets/images/Talli3.jpg';
import image4 from '../Assets/images/Talo1.jpg';
import image5 from '../Assets/images/Talo2.jpg';
import image6 from '../Assets/images/Talo3.jpg';

// Dummy data for pictures and comments
const reviews = [
    {
        picture: image1, // Replace with actual image URLs
        comment: 'This is feedback!',
    },
    {
        picture: image2, // Replace with actual image URLs
        comment: 'This is feedback!',
    },
    {
        picture: image3, // Replace with actual image URLs
        comment: 'This is feedback!',
    },
    {
        picture: image4, // Replace with actual image URLs
        comment: 'This is feedback!',
    },
    {
        picture: image5, // Replace with actual image URLs
        comment: 'This is feedback!',
    },
    {
        picture: image6, // Replace with actual image URLs
        comment: 'This is feedback',
    },
];

const Feedback = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false); // State to handle pause

    // Auto-rotate the reviews every 5 seconds
    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
            }, 5000);

            return () => clearInterval(interval); // Cleanup interval
        }
    }, [isPaused, reviews.length]);

    const nextReview = () => {
        setCurrentIndex((currentIndex + 1) % reviews.length);
    };

    const prevReview = () => {
        setCurrentIndex((currentIndex - 1 + reviews.length) % reviews.length);
    };

    const handleMouseEnter = () => {
        setIsPaused(true); // Pause the scrolling when hovered
    };

    const handleMouseLeave = () => {
        setIsPaused(false); // Resume the scrolling on mouse leaving
    };

    // Adjusted getPosition for left-to-right + spacing
    const getPosition = (index) => {
        if (index === currentIndex) {
            return 'center'; // Currently active slide
        } else if (index === (currentIndex - 1 + reviews.length) % reviews.length) {
            return 'left'; // Left (next slide to appear)
        } else if (index === (currentIndex + 1) % reviews.length) {
            return 'right'; // Right (previous slide to disappear)
        }
        return 'hidden'; // All other slides
    };

    return (
        <div className="feedback" id="feedback-section">
            <h1 className="feedbackHeadline">Kohteitamme</h1>

            {/* Images Slider */}
            <div className="reviews-slider">
                {reviews.map((review, index) => (
                    <div
                        key={index}
                        className={`review ${getPosition(index)}`}
                        style={{ backgroundImage: `url(${review.picture})` }}
                        onMouseEnter={index === currentIndex ? handleMouseEnter : null} // Only on the center slide
                        onMouseLeave={index === currentIndex ? handleMouseLeave : null} // Only on the center slide
                    ></div>
                ))}
            </div>

            {/* Comments Slider */}
            <h2 className="comments-headline">Asiakaskokemukset</h2>
            <div className="comments-slider">
                {reviews.map((review, index) => (
                    <div key={index} className={`comment-box ${getPosition(index)}`}>
                        <p className="comment">{review.comment}</p>
                    </div>
                ))}
            </div>

            {/* Navigation */}
            <div className="arrows">
                <button onClick={prevReview}>Edellinen</button>
                <button onClick={nextReview}>Seuraava</button>
            </div>
        </div>
    );
};

export default Feedback;
