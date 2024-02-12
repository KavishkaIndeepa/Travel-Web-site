import React, {Component} from "react";
import {Route, Routes} from "react-router-dom";
import {Home} from "../../pages/Home/Home";
import {About} from "../../pages/About/About";
import {Places} from "../../pages/Places/Places";
import {Gallery} from "../../pages/Gallery/Gallery";
import {Contact} from "../../pages/Contact/Contact";

export class MainContent extends Component {
    render() {
        return (
            <div className="mx-auto">
                {/*<h1 className="text-4xl text-align text-primary">This is main Content</h1>*/}

                <Routes>
                    <Route path="/" Component={Home}></Route>
                    <Route path="/about" Component={About}></Route>
                    <Route path="/places" Component={Places}></Route>
                    <Route path="/gallery" Component={Gallery}></Route>
                    <Route path="/contact" Component={Contact}></Route>
                </Routes>
            </div>
        );
    }
}