import React, { Component } from 'react';
import pinata from "../images/BH.svg";
import '../styles/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default class Header extends Component {
    render() {
        return (
            <div class="container-fluid">
                <div class="row" id="landing-page">
                    <div class="col-md-4"></div>
                    <div class="col-md-4">
                        <img class="img-fluid" src={pinata} alt="background" className="llama" />
                        <div id="link">
                            <button id="button" style={{textAlign: "center"}}>
                                <a href="https://bostonhacks.io/">ENTER FALL 2019 SITE</a>
                            </button>
                        </div>
                    </div>
                    <div class="col-md-4"></div>
                </div>
            </div>             
        )
    }
}
