import React from "react";
import Image from "next/image";
import Upload from "../upload/upload";
import lofiRyley from "../../assets/lofi-ryley.png";

const Header = () => {
    return (
        <header aria-label="Page Header" className="bg-slate-800 w-full absolute top-0 z-10">
            <div className="px-4 py-8 sm:px-6 lg:px-8">
                <div className="flex items-center justify-end gap-4">
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <label className="sr-only" htmlFor="search"> Search </label>

                            <input
                                className="h-10 w-full rounded-full border-none bg-slate-700 pl-4 pr-10 text-sm shadow-sm sm:w-56"
                                id="search"
                                type="search"
                                placeholder="Search PCAP files..."
                            />

                            <button
                                type="button"
                                className="absolute top-1/2 right-1 -translate-y-1/2 rounded-full bg-slate-600 p-2 text-slate-50 transition hover:bg-white hover:text-slate-600"
                            >
                                <span className="sr-only">Submit Search</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </button>
                        </div>

                        <a
                            href="#"
                            className="block shrink-0 rounded-full bg-slate-700 p-2.5 text-slate-200 shadow-sm hover:bg-white hover:text-slate-600"
                        >
                            <span className="sr-only">Notifications</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                />
                            </svg>
                        </a>
                    </div>

                    <span
                        aria-hidden="true"
                        className="block h-6 w-px rounded-full bg-slate-500"
                    ></span>

                    <a href="#" className="block shrink-0">
                        <span className="sr-only">Profile</span>
                        <Image
                            alt="Man"
                            height={40}
                            width={40}
                            src={lofiRyley}
                            className="rounded-full object-cover"
                        />
                    </a>
                </div>
            </div>
        </header>

    );
};

export default Header;