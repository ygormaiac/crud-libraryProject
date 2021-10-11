import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <div className="movie-card-header">
                <h1 className="page-title">MOVIE CARDS LIBRARY CRUD</h1>
                    <button className="add-card">
                    <Link to="/movies/new" className="link-add">
                        ADICIONAR FILME
                    </Link>
                    </button>
            </div>
        )
    }
}

export default Header;