import { HomeFillIcon } from "@primer/octicons-react";
import Link from "next/link";
import { ActiveLink } from "../active-link/activeLink";


const navItems = [
    { path: '/about', text: "About" },
    { path: '/pricing', text: "Pricing" },
    { path: '/contact', text: "Contact" },
]


export const Navbar = () => {
    return (
        <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
            <Link href={'/'} className="flex items-center">
                <HomeFillIcon className="mr-2" />
                <span>Home</span>
            </Link>

            <div className="flex flex-1"></div>

            {
                navItems.map(navItem => (
                    <ActiveLink key={navItem.path} {...navItem} />
                ))
            }

            {/*      <Link className="mr-2" href="about">about</Link>
        <Link className="mr-2" href="contact">contact</Link>
        <Link className="mr-2" href="pricing">pricing</Link> */}
        </nav>
    )
}