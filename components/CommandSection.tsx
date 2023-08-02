import React from 'react'
import { CommandDemo } from './Command'
import style from '../styles/style.module.css'
import Image from 'next/image'

function CommandSection() {
  return (
    <>
        <div className={style.commandMenuSection}>
            <div className={style.leftCommand}>
                <h1 className={style.commandMenuTitle}>Commands that are dope.</h1>
                <p className={style.commandMenuPara}>
                    YuriBot has a wide range of commands that are useful for your server. From moderation to fun commands, YuriBot has it all.
                </p>
            </div>
            <div className={style.rightCommand}>
                <CommandDemo/>
            </div>
        </div>
    </>
  )
}

export default CommandSection
