import {Component} from "react";

export class Home extends Component {
    render() {
        return (
            <div className={"flex-row flex-wrap"}>

                <div className={"flex min-h-screen bg-cover"} style={{backgroundImage: 'url("/Nine-Arch-Bridge.jpg")'}}></div>

                <div className={"flex h-auto p-10 bg-black mt-5 mb-5 rounded-3xl"}>
                    <div className={"flex-row text-white justify-center"}>
                        “Visit our website and find the best and        most comfortable place for your journey”</div>
                </div>

                <div className={"flex-wrap"}>
                    <div className={"flex-col w-2/12 h-auto justify-items-start bg-black"}></div>
                    <div className={"flex-col justify-items-end bg-blue-600"}></div>
                    <div className={"flex-col justify-items-start bg-gray-600"}></div>
                    <div className={"flex-col justify-items-end bg-red-600"}></div>
                </div>

            </div>
        );
    }
}