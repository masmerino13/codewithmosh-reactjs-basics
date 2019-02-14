import React from 'react';
import Form from '../../common/form';
import Joi from 'joi';

import { getMovies, saveMovie } from '../../services/fakeMovieService';
import { getGenres } from '../../services/fakeGenreService';

export class addMovie extends Form {
    state = {
        data: {
            title: '',
            numberInStock: '',
            dailyRentalRate: '',
            genre: {}
        },
        errors: {
            title: '',
            numberInStock: '',
            dailyRentalRate: ''
        }
    }

    schema = {
        title: Joi.string().required().label('Title'),
        numberInStock: Joi.number().required().label('Stock'),
        dailyRentalRate: Joi.number().precision(1).required().label('Rate'),
    }

    doSubmit = () => {
        console.log('movie created');
    }

    render() {
        return (
        <div>
            <form onSubmit={this.handleSubmit}>
                {this.renderInput('title', 'Title')}
                {this.renderInput('numberInStock', 'Stock')}
                {this.renderInput('dailyRentalRate', 'Rate')}
                {this.renderButton('Add')}
            </form>
        </div>
        )
    }
}

export default addMovie
