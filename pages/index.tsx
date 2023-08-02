import React from 'react'
import Header from '../components/Header'
import MainSection from 'components/MainSection'
import {CommandDemo} from 'components/Command'
import CommandSection from 'components/CommandSection'
import Grid from 'components/Grid'
import Foot from 'components/Foot'

function Home() {
  return (
    <>
      <div><Header/></div>
      <div><MainSection/></div>
      <div><CommandSection/></div>
      <div><Grid/></div>
      {/* <div><MainFooter/></div> */}
      <div><Foot/></div>
    </>
  )
}

export default Home