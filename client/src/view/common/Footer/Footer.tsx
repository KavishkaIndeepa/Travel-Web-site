import {Component} from "react";

export class Footer extends Component {
    render() {
        return (
            <div className="p-2 bg-[#2B7A0B] flex justify-center">

                <p className="text[10px] text-[#e6f0e6] pr-2 hover:text-green-400">Copyright @2023</p>
                <h1 className="text-1xl text-third hover:text-white">Kavishka Indeepa</h1>

            </div>
        );
    }
}