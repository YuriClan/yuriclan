import React from "react"
import style from "../styles/style.module.css"
// import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from 'next/image';
import { Button } from "components/ui/button"
import { buttonVariants } from "components/ui/button"
import NavigationMenuDemo from 'components/ui/NavigationMenuDemo'

const Header = () => {
    return (
        <>
            <div className={style.navbar}>
                <div className={style.logo}>Yuri Bot</div>
                <div className={style.navigationMenuCSS}><NavigationMenuDemo/></div>
                <Button className={buttonVariants({ variant: "secondary" })} asChild>
                    <Link href="/login" className={style.buttonCSS}>Login</Link>
                </Button>
            </div>
        </>
    )
}

export default Header   