import React, { Component } from 'react';
import logo from '../logo.png';
import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-2 shadow">
                    <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="/" rel="noopener noreferrer" >
                        Dapps Zero
                    </a>
                </nav>
                <div className="container-fluid mt-5 py-4">
                    <div className="row">
                        <main role="main" className="col-lg-12 d-flex text-center">
                            <div className="content mr-auto ml-auto">
                                <a href="/" rel="noopener noreferrer" >
                                    <img src={logo} className="App-logo" alt="logo" />
                                </a>
                                <h1>Dapps Zero Starter Using React Js</h1>
                                <p>
                                    Edit <code>src/components/App.js</code> and save to reload.
                                </p>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
