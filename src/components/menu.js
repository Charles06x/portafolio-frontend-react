import React from 'react';
import ReactDOM from 'react-dom';

class Menu extends React.Component {
    render() {
        return(
            <nav 
                className="navbar is-dark"
            >
                <div className="navbar-brand">
                    <a class="navbar-item" href="https://bulma.io">
                        <img src={require('../img/Charles-logo.png')} width="112" height="28"/>
                    </a>
                </div>
                <div className="navbar-menu">
                    <div className="navbar-end">
                        <a className="navbar-item">Who am I</a>
                        <a className="navbar-item">Skills</a>
                        <a className="navbar-item">Projects</a>      
                        <a className="navbar-item">Contact</a>
                    </div>                    
                </div>
                
            </nav>
        );
    }
}

//ReactDOM.render(<Menu />, document.getElementById('nav'))

export default Menu