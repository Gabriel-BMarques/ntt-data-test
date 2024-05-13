import React, { useEffect, useState } from 'react';
import ReactStars from "react-rating-stars-component";

function RatingStars({ ratings }) {
    const [rating, setRating] = useState(calculateAverageRating());

    function calculateAverageRating() {
        let total = 0;
        ratings.forEach(rating => {
            let value = rating.Value;
            if (value.includes('/')) {
                const [score, outOf] = value.split('/');
                total += (parseFloat(score) / parseFloat(outOf)) * 100;
            } else if (value.includes('%')) {
                total += parseFloat(value);
            }
        });
    
        const average = total / ratings.length;
        return average.toFixed(2);
    }
    
    useEffect(() => {
        setRating(calculateAverageRating)
        // eslint-disable-next-line
    }, [ratings])

    return (
        <ReactStars
            count={5}
            value={rating / 20}
            size={24}
            isHalf={true}
            edit={false}
            activeColor="#ffd700"
        />
    );
}

export default RatingStars;
