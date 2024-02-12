import React, {Component} from "react";
import {Link} from "react-router-dom";

export class Navbar extends Component {
    render() {
        return (
            <div className="flex flex-wrap p-4 bg-[#2B7A0B] justify-between">
                <div className="flex-col flex-wrap text-white">
                    <h1 className="text-2xl text-Primary font-serif">VentureVista</h1>
                    <small className={"font-mono"}>Discover Your Journey Unleashed</small>


                </div>

                <ul className="list-none mt-2 flex">
                    <li className="mr-2 text-[18px] text-[#e6f0e6] hover:text-green-500">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="mr-2 text-[18px] text-[#e6f0e6] hover:text-green-500">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="mr-2 text-[18px] text-[#e6f0e6] hover:text-green-500">
                        <Link to="/places">Places</Link>
                    </li>
                    <li className="mr-2 text-[18px] text-[#e6f0e6] hover:text-green-600">
                        <Link to="/gallery">Gallery</Link>
                    </li>
                    <li className="mr-2 text-[18px] text-[#e6f0e6] hover:text-green-500">
                        <Link to="/contact">Contact</Link>
                    </li>

                </ul>


            </div>
        );
    }
}