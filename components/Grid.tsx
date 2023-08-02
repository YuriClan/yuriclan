import React from "react";
import { Container, Row, Col } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import style from '../styles/style.module.css'
import Image from "next/image";
import { useState } from "react";

const colorMap = {
    gridContainer1: "#a756cc",
    gridContainer2: "#0e2072",
    gridContainer3: "#55dcd1",
};

function Grid() {
    const [hoveredContainer, setHoveredContainer] = useState(null);

    const handleContainerHover = (container) => {
        setHoveredContainer(container);
    };

    const handleContainerLeave = () => {
        setHoveredContainer(null);
    };
    return (
      <>
         <div className={`${style.gridChange}`} style={{ backgroundColor: colorMap[hoveredContainer] }}>
          <Container>
            <Row>
              <Col sm>
                <div className={style.backText}>
                    <p>AUTOMOD<br/>INSPIRE<br/>CUTE<br/>POWERFULL</p>
                </div>
              <div className={`${style.gridContainers} ${style.gridContainer1}`}
                                onMouseEnter={() => handleContainerHover("gridContainer1")}
                                onMouseLeave={handleContainerLeave}>
                  <div className={style.gridLogo1}>
                    <Image src="/skeptical.png" alt="YuriClan" width={75} height={100}/>
                  </div>
                  <div className={style.gridHero}>
                    <p>Always Skeptical.</p>
                  </div>
                  <div className={style.gridPara}>
                    <p>Zero-mercy for anti-peace discordians</p>
                  </div>
                </div>
              </Col>
              <Col sm>
                <div className={`${style.gridContainers} ${style.gridContainer2}`}
                                onMouseEnter={() => handleContainerHover("gridContainer2")}
                                onMouseLeave={handleContainerLeave}>
                  <div className={style.gridLogo2}>
                    <Image src="/stardust.png" alt="Aggressive Icon" width={95} height={85}/>
                  </div>
                  <div className={style.gridHero}>
                    <p>Fear the Dominance.</p>
                  </div>
                  <div className={style.gridPara}>
                    <p>Unleashing power, one code at a time.</p>
                  </div>
                </div>
              </Col>
              <Col sm>
                <div className={`${style.gridContainers} ${style.gridContainer3}`}
                                onMouseEnter={() => handleContainerHover("gridContainer3")}
                                onMouseLeave={handleContainerLeave}>
                  <div className={style.gridLogo3}>
                    <Image src="/cryo.png" alt="Powerful Icon" width={95} height={95}/>
                  </div>
                  <div className={style.gridHero}>
                    <p>The Unstoppable Force.</p>
                  </div>
                  <div className={style.gridPara}>
                    <p>Commanding the digital realm with might.</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
}

export default Grid;