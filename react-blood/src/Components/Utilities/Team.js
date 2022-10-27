import React from 'react'
import avatar1 from "../../assets/img/avatar-1.png"
import avatar2 from "../../assets/img/avatar-2.png"
import avatar3 from "../../assets/img/avatar-3.png"
import avatar4 from "../../assets/img/avatar-4.jpg"

function Team() {
    return (
        <section className="team" id="Team">
            <section className="text-gray-700 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap w-full mb-20">
                        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h1 className="sm:text-3xl text-3xl font-medium title-font mb-2 text-gray-900">Benifits of blood donations</h1>
                            <div className="h-1 w-20 bg-red-500 rounded"></div>
                        </div>
                        <ul className="font-sans border-red-100 text-left">
                        <li className="">1.Reduce stress.</li>
                        <li className="">2.Improve your emotional well-being.</li>
                        <li className="">3.Benefit your physical health.</li>
                        <li className="">4.Help get rid of negative feelings.</li>
                        <li className="">5.Provide a sense of belonging and reduce isolation.</li>
                    </ul>
                    </div>
                    <div className="flex flex-wrap items-center">
                        <div className="xl:w-1/4 sm:w-1/2 p-4 flex items-center justify-center">
                            <div className="flip-card rounded-xl overflow-hidden">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img src={avatar1} alt="Avatar" />
                                    </div>
                                    <div
                                        className="flip-card-back py-8 flex flex-col items-center justify-center bg-red-600 text-white">
                                        <h1 className="text-2xl">Prof. J.G. Jolly</h1>
                                        <p>First men to donate blood</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:w-1/4 sm:w-1/2 p-4 flex items-center justify-center">
                            <div className="flip-card rounded-xl overflow-hidden">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img src={avatar2} alt="Avatar" />
                                    </div>
                                    <div
                                        className="flip-card-back py-8 flex flex-col items-center justify-center bg-red-600 text-white">
                                        <h1 className="text-2xl">Leela Moolgaokar</h1>
                                        <p>First women to donate blood</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:w-1/4 sm:w-1/2 p-4 flex items-center justify-center">
                            <div className="flip-card rounded-xl overflow-hidden">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img src={avatar3} alt="Avatar" />
                                    </div>
                                    <div
                                        className="flip-card-back py-8 flex flex-col items-center justify-center bg-red-600 text-white">
                                        <h1 className="text-2xl">Harish Patel</h1>
                                        <p>youngest blood donor</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:w-1/4 sm:w-1/2 p-4 flex items-center justify-center">
                            <div className="flip-card rounded-xl overflow-hidden">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img src={avatar4} alt="Avatar" />
                                    </div>
                                    <div
                                        className="flip-card-back py-8 flex flex-col items-center justify-center bg-red-600 text-white">
                                        <h1 className="text-2xl">James Harrison</h1>
                                        <p>higest blood donor</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Team
