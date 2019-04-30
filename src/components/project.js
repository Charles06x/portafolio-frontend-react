import React from 'react';
import ReactDOM from 'react-dom';

class Project extends React.Component {
    render(){
        return(
            <div className="card">
                <div className="card-image is-small">
                    <figure className="image">
                        <img src="http://www.thebluediamondgallery.com/handwriting/images/new-projects.jpg" alt="project-image-sample"/>
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media-content">
                        <p className="title is-4">Project Sample</p>
                        <p className="subtitle is-6">2019</p>
                    </div>

                    <div className="content">
                        Sample project for testing the card view for everyproject.                    
                    </div>                    
                </div>
            </div>
        )
    }
}

export default Project