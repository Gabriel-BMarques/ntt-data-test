import React from 'react';
import '@ui5/webcomponents/dist/Card';
import '@ui5/webcomponents/dist/Button';
import '@ui5/webcomponents/dist/Table';
import '@ui5/webcomponents/dist/TableColumn';
import './MovieCard.scss';
import RatingStars from '../RatingStars/RatingStars';
import Button from '../Button/Button';
import { FaRegHeart } from "react-icons/fa";

function MovieCard({ title, plot, actors, poster, ratings }) {
    return (
        <ui5-card>
            <ui5-table hide-no-data>
                <ui5-table-column slot='columns'>
                    <h1>{title}</h1>
                    <p>{ plot }</p>
                    <p><b>Actors:</b> { actors }</p>
                    <p><b>Review:</b> <RatingStars ratings={ratings} /></p>
                    <Button>
                        <span className='favorite-button-label'>
                            Favorite&nbsp;<FaRegHeart />
                        </span>
                    </Button>
                </ui5-table-column>
                <ui5-table-column slot='columns'>
                    <img src={ poster } alt='Movie Poster' />
                </ui5-table-column>
            </ui5-table>
        </ui5-card>
    )
}

export default MovieCard;