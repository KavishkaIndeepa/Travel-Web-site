import React, {Component} from "react";
import {Link} from "react-router-dom";

export class Navbar extends Component {
    render() {
        return (
            <div className="flex flex-wrap p-4 justify-between border-[#36b9cc] shadow-2xl bg-white border-e-gray-300">
                <div className="flex-col flex-wrap">
                    <h1 className="text-2xl text-Primary font-serif font-semibold">VentureVista</h1>
                    <small className={"font-mono"}>Discover Your Journey Unleashed</small>


                </div>

                <ul className="list-none mt-2 flex font-serif">
                    <li className="mr-2 text-[18px] hover:font-bold">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="mr-2 text-[18px] hover:font-bold">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="mr-2 text-[18px] hover:font-bold">
                        <Link to="/places">Places</Link>
                    </li>
                    <li className="mr-2 text-[18px] hover:font-bold">
                        <Link to="/gallery">Gallery</Link>
                    </li>
                    <li className="mr-2 text-[18px] hover:font-bold">
                        <Link to="/contact">Contact</Link>
                    </li>

                </ul>


            </div>
        );
    }
}