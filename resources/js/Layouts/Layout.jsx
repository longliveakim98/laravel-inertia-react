import { Link } from "@inertiajs/react";
import React from "react";

export default function Layout({ children }) {
    return (
        <>
            <header className="bg-blue-800">
                <nav className="px-20">
                    <div className="flex flex-col justify-between w-full md:flex-row items-center">
                        <Link className="nav-link " href="/">
                            Home
                        </Link>
                        <Link className="nav-link" href="/create">
                            Create
                        </Link>
                    </div>
                </nav>
            </header>

            <main>{children}</main>
        </>
    );
}
