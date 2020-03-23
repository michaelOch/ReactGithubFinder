import React from 'react';

function Content(props) {
    return (
        <div className="card card-body mb-3">
            <div className="row">
                <div className="col-md-3">
                    <img className="img-fluid mb-2" src={props.data.avatar_url} alt="profile" />
                    <a href={props.data.html_url} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-block mb-2">View Profile</a>
                </div>
                <div className="col-md-9">
                    <span className="badge badge-primary mr-2">Public Repos: {props.data.public_repos}</span>
                    <span className="badge badge-secondary mr-2">Public Gists: {props.data.public_gists}</span>
                    <span className="badge badge-success mr-2">Followers: {props.data.followers}</span>
                    <span className="badge badge-info">Following: {props.data.following}</span>
                    <br /><br />

                    <ul className="list-group">
                        <li className="list-group-item">Company: {props.data.company}</li>
                        <li className="list-group-item">Website/Blog: {props.data.blog}</li>
                        <li className="list-group-item">Location: {props.data.location}</li>
                        <li className="list-group-item">Member Since: {props.data.created_at}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Content;