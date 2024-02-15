import {Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import {Link} from "react-router-dom";

export class Footer extends Component {
    render() {
        return (
            <div className="p-2 flex-row flex-wrap justify-center border-t-2 border-[#36b9cc] ">

                <div className={"flex justify-center gap-2 text-[22px]"}>
                 <Link to="https://www.facebook.com"><FontAwesomeIcon icon={faFacebook} style={{ color: '#3b5998' }} /></Link>
                    <Link to="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} style={{ color: '#e1306c' }} /></Link>
                    <Link to="https://www.youtube.com/"><FontAwesomeIcon icon={faYoutube} style={{ color: '#ff0000' }} /></Link>

                </div>

                <div className={"flex justify-center"}>
                    <p className="text[10px] text-blue-700 pr-2 hover:font-bold">Copyright @2023</p>
                    <h1 className="text-1xl text-third hover:font-bold">Kavishka Indeepa</h1>
                </div>

            </div>
        );
    }
}