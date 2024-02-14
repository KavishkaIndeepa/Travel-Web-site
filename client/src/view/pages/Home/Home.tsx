import {Component} from "react";

export class Home extends Component {
    render() {
        return (
            <div className={"flex-row flex-wrap"}>

                <div className={"flex min-h-screen bg-cover "}
                     style={{backgroundImage: 'url("/Nine-Arch-Bridge.jpg")'}}></div>

                <div
                    className={"flex h-auto p-10 mt-5 mb-5 rounded-3xl justify-center border-[#36b9cc] shadow-2xl bg-white border-e-gray-300"}>
                    <div className={"flex-row text-[#3559E0] text-2xl font-mono font-semibold"}>
                        “Visit our website and find the best and most comfortable place for your journey”
                    </div>
                </div>

                <div style={{backgroundImage: 'url("/Nine-Arch-Bridge.jpg")'}}>

                    <div className={"m-10 justify-center"} >
                        <div className={"flex-wrap"} style={{display: "flex", flexDirection: "column"}}>
                            <div
                                className={"flex-row w-4/12 h-auto justify-start bg-[#15F5BA] m-2 shadow-2xl border-e-gray-900 p-2 rounded-lg"}
                                style={{alignSelf: "flex-start"}}><h1
                                className={"font-semibold font-serif items-center m-1"}>Harshana Senadheera</h1>It is very
                                convenient for us as we can quickly find out
                                the suitable and nearest areas for a free time trip through this website.
                            </div>
                            <div
                                className={"flex-row w-4/12 h-auto justify-end bg-[#EBF400] m-2 shadow-2xl border-e-gray-900 p-2 rounded-lg"}
                                style={{alignSelf: "flex-end"}}><h1
                                className={"font-semibold font-serif items-center m-1"}>Harshana Senadheera</h1>It is very
                                convenient for us as we can quickly find out
                                the suitable and nearest areas for a free time trip through this website.
                            </div>
                        </div>
                        <div className={"flex-wrap"} style={{display: "flex", flexDirection: "column"}}>
                            <div
                                className={"flex-row w-4/12 h-auto justify-start bg-[#FF004D] m-2 shadow-2xl border-e-gray-900 p-2 rounded-lg"}
                                style={{alignSelf: "flex-start"}}><h1
                                className={"font-semibold font-serif items-center m-1"}>Harshana Senadheera</h1>It is very
                                convenient for us as we can quickly find out
                                the suitable and nearest areas for a free time trip through this website.
                            </div>
                            <div
                                className={"flex-row w-4/12 h-auto justify-end bg-[#A31ACB] m-2 shadow-2xl border-e-gray-900 p-2 rounded-lg"}
                                style={{alignSelf: "flex-end"}}><h1
                                className={"font-semibold font-serif items-center m-1"}>Harshana Senadheera</h1>It is very
                                convenient for us as we can quickly find out
                                the suitable and nearest areas for a free time trip through this website.
                            </div>
                        </div>
                    </div>

                </div>




            </div>
        );
    }
}