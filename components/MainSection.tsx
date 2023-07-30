import React from 'react'
import style from '../styles/style.module.css'
import Image from 'next/image'
import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
import { badgeVariants } from "@/components/ui/badge"


function MainSection() {
  return (
    <>
        <div className={style.mainSectionBody}>
            <div className={style.mainSectionLeft}>
                <Image src="/pyro_red.png" alt="YuriClan" width={650} height={650}/>
            </div>
            <div className={style.mainSectionRight}>
                <h1 className={style.mainSectionTitle}>Perfect Discord Bot</h1>
                <div><Badge variant="outline" className={style.badges}>Pre-release - Alpha</Badge></div>
                <p className={style.mainSectionPara}>
                    YuriBot: Your Discord Commando! Dominate with inspiration, crush <span>offenders</span> with <span>ruthless</span> moderation, and unleash its untamed potential. <span>The ultimate force in action!</span>
                </p>
            </div>
        </div>
    </>
  )
}

export default MainSection