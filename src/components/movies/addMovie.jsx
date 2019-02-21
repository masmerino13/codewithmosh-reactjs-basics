import React from 'react';
import Form from '../../common/form';
import Joi from 'joi';

import { getMovie, saveMovie } from '../../services/movieService';
import { getGenres } from '../../services/genreService';

export class addMovie extends Form {
    state = {
        data: {
            _id: 'new',
            title: '',
            numberInStock: '',
            dailyRentalRate: 0,
            genreId: ''
        },
        genres: [],
        errors: {
            title: '',
            numberInStock: '',
            dailyRentalRate: ''
        },
        btnLabel: 'Add'
    }

    schema = {
        _id: Joi.string(),
        title: Joi.string().required().label('Title'),
        numberInStock: Joi.number().required().label('Stock'),
        dailyRentalRate: Joi.number().precision(1).required().label('Rate'),
        genreId: Joi.string().required().label('Genre')
    }

    async componentWillMount() {
        this.setState({
            genres: await getGenres()
        });

        const movieId = this.props.match.params.id;

        if(!movieId) return;
        
        const movie = await getMovie(movieId);
        
        this.setState({
            data: {
                _id: movieId,
                title: movie.title,
                numberInStock: movie.numberInStock,
                dailyRentalRate: movie.dailyRentalRate,
                genreId: movie.genre._id
            },
            btnLabel: 'Save'
        })
    }

    doSubmit = () => {
        saveMovie(this.state.data);

        this.props.history.push('/movies');
    }

    parseGenres = () => {
        const { genres } = this.state;
        return genres.map(genre => ({ label: genre.name, value: genre._id }));
    }

    render() {
        return (
        <div>
            <form onSubmit={this.handleSubmit}>
                {this.renderInput('title', 'Title')}
                {this.renderInput('numberInStock', 'Stock')}
                {this.renderSelect('genreId', 'Genre', this.parseGenres())}
                {this.renderInput('dailyRentalRate', 'Rate')}
                {this.renderButton(this.state.btnLabel)}
            </form>
        </div>
        )
    }
}

export default addMovie
