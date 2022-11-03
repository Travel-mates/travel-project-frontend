
import React, { useState } from "react";

export default function Nav() {

    return (
        <div className="dark:bg-gray-900">
            <div>
                <div className="relative">
                    
                    <div className="dark:bg-gray-900 bg-gray-50 px-6 py-9">
                        <div className="container mx-auto flex items-center justify-between">
                            
                            <ul className="hidden md:flex items-center justify-center space-x-8">
                                <li>
                                    <a href="/" className="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="/destinations" className="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                    Destinations
                                    </a>
                                </li>
                                <li>
                                    <a href="/form" className="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                       Add Destination
                                    </a>
                                </li>
                                <li>
                                    <a href="/booking" className="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                       Booking Table
                                    </a>
                                </li>
                            </ul>
                           
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    );
}
