import React, { useEffect, useState } from 'react';
import Rating from '@mui/material/Rating';

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
        return average;
    }
    
    useEffect(() => {
        setRating(calculateAverageRating())
        // eslint-disable-next-line
    }, [ratings])

    return (
        <Rating
            value={rating / 20}
            precision={0.1}
        />
    );
}

export default RatingStars;
