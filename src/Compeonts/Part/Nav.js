import React from 'react';

let Nav = () => {
    return(
        <nav className="navbar navbar-expand-sm" style={{
            backgroundColor: 'tomato'
        }}>
            <a className="navbar-brand text-white" href="##">
                <strong>
                    너의 음식은
                </strong>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExample03">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link text-white" href="##">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="##">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled text-white" href="##" tabIndex="-1" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;