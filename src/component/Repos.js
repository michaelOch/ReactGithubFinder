import React from 'react'

function Repos(props) {
    if(props.repo) {
        return (
            <div className="card card-body mb-2">
                <div className="row">
                    <div className="col-md-6">
                        <a href={props.repo.html_url} target="_blank" rel="noopener noreferrer">{props.repo.name}</a>
                    </div>
                    <div className="col-md-6">
                        <span className="badge badge-primary mr-2">Stars: {props.repo.stargazers_count}</span>
                        <span className="badge badge-secondary mr-2">Watchers: {props.repo.watchers_count}</span>
                        <span className="badge badge-success mr-2">Forks: {props.repo.forks_count}</span>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div>

            </div>
        )
    }
}

export default Repos;