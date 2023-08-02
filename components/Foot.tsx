import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "components/FooterStyles";
import style from '../styles/style.module.css'
import Image from "next/image";

const Footer = () => {
return (
	<Box>
	<h1 className={style.footerTitle}>
		YuriClan - Yuri - A Discord Bot
	</h1>
	<Container>
		<Row>
		<Column className={style.columns}>
			<Heading className={style.footerHeading}>Product</Heading>
			<FooterLink href="#">Features</FooterLink>
			<FooterLink href="#">Updates</FooterLink>
			<FooterLink href="#">Integration</FooterLink>
			<FooterLink href="#">Support</FooterLink>
		</Column>
		<Column>
			<Heading className={style.footerHeading}>About Us</Heading>
			<FooterLink href="#">Aim</FooterLink>
			<FooterLink href="#">Vision</FooterLink>
			<FooterLink href="#">Testimonials</FooterLink>
		</Column>
		<Column>
			<Heading className={style.footerHeading}>Developers</Heading>
			<FooterLink href="#">Documentation</FooterLink>
			<FooterLink href="#">API reference</FooterLink>
			<FooterLink href="#">API status</FooterLink>
			<FooterLink href="#">Open Source</FooterLink>
		</Column>
		{/* <Column>
			<Heading className={style.footerHeading}>Social Media</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</FooterLink>
		</Column> */}
        <div className={style.footLogo}>
            <Image src="/pyro_red.png" alt="YuriClan" width={200} height={650}/>
        </div>
		</Row>
        <div className="flex flex-col border-t border-gray-300 py-2 lg:py-3 mt-8 lg:mt-12 lg:flex-row lg:justify-between lg:items-center">
            hey
        </div>
	</Container>
	</Box>
);
};
export default Footer;
