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
                <div className={style.InviteBtn}>
                    <Button className={buttonVariants({ variant: "secondary" })} asChild>
                        <Link href="https://discord.com/api/oauth2/authorize?client_id=904261940757557270&permissions=18127178893382&scope=bot" className={style.buttonCSS}>Invite</Link>
                    </Button>
                </div>
            </div>
        </>
    )
}

export default Header   