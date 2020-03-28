import React, { Component } from 'react';
import Content from './Content';
import Repos from './Repos';

class SearchContainer extends Component {
    constructor(props) {
        super(props)
        this.client_id = '6a47cf9dcc010584fa67';
        this.client_secret = 'b4f6cc84dd2b0cb51b1953ec41c91dfe9cf7a59e';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
        this.state = {
            user: "",
            data: {},
            repos: [],
            isLoadedUser: false,
            isLoadedRepos: false
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        let { value } = event.target;
        this.setState({
            user: value,
            isLoadedUser: false,
            isLoadedRepos: false
        });
        fetch(`https://api.github.com/users/${value}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    isLoadedUser: true,
                    data
                })
            });

        fetch(`https://api.github.com/users/${value}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)
            .then(res => res.json())
            .then(repos => {
                this.setState({
                    isLoadedRepos: true,
                    repos
                })
            });
    }
    

    render() {

        let { isLoadedUser, isLoadedRepos} = this.state;
        let content, alert, spinner, repo;
        let repos = [];

        if(this.state.user !== '') {
            spinner = (!isLoadedUser) ?
                <div className="d-flex justify-content-center">
                    <div className="spinner-border text-info mt-5" style={{width: '5rem', height: '5rem'}} role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
              : <div></div>
            if(this.state.data.message === 'Not Found' || Object.entries(this.state.data).length === 0) {
                alert = <div className="alert alert-danger">User Not Found</div>
            } else {
                content = <Content data={this.state.data}/>
                repo = this.state.repos;
                if(isLoadedRepos && repo.length) {
                    for(let i = 0; i < repo.length; i++) {
                        repos.push(<Repos key={repo[i].id} repo={repo[i]} />);
                    }
                }
                
            }
        }

        return (
            <div className="container">
                {alert}
                <div className="card card-body mb-3">
                    <h4>Search Github Users</h4>
                    <p className="lead">Enter a username to fetch a user profile and repos</p>
                    <input
                        type="text"
                        name="user"
                        className="form-control"
                        placeholder="Github username..."
                        onChange={this.handleChange}
                    />
                </div>
                {spinner}
                { isLoadedUser ? content : null}
                { isLoadedRepos ? repos : null}
            </div>
        )
    }
}

export default SearchContainer;