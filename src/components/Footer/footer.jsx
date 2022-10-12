import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
	<Container>
		<Row>
		<Column>
			<Heading>Sobre nosotras</Heading>
			<FooterLink href="#">Quiénes somos</FooterLink>
			<FooterLink href="#">Nuestro compromiso</FooterLink>
			<FooterLink href="#">Testimonios</FooterLink>
		</Column>
		<Column>
			<Heading>Visítanos</Heading>
			<FooterLink href="#">Santiago</FooterLink>
			<FooterLink href="#">Rancagua</FooterLink>
			<FooterLink href="#">Viña del Mar</FooterLink>
			<FooterLink href="#">Temuco</FooterLink>
		</Column>
		<Column>
			<Heading>Síguenos</Heading>
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
		</Column>
		</Row>
	</Container>
	</Box>
);
};

export default Footer;