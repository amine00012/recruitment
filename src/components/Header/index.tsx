import React, { useState } from "react";
import Container from "../common/Container";
import { SvgIcon } from "../common/SvgIcon";
import { Button } from "../common/Button";
import logo from './aures.png';

import {
	HeaderSection,
	LogoContainer,
	Burger,
	NotHidden,
	Menu,
	CustomNavLinkSmall,
	Label,
	Outline,
	Span,
  } from "./styles";

import { Row, Drawer, Col } from "antd";


export function Header ()  {
	const [visible, setVisibility] = useState(false);
  
	const showDrawer = () => {
	  setVisibility(!visible);
	};
  
	const onClose = () => {
	  setVisibility(!visible);
	};
  
	const MenuItem = () => {
	  const scrollTo = (id: string) => {
		const element = document.getElementById(id) as HTMLDivElement;
		element.scrollIntoView({
		  behavior: "smooth",
		});
		setVisibility(false);
	  };
	  
	  return (
		<>
		  <CustomNavLinkSmall>
			<Span><a href="About">{("About")}</a></Span>
		  </CustomNavLinkSmall>
		  <CustomNavLinkSmall>
			<Span><a href="Roles">{("Roles")}</a></Span>
		  </CustomNavLinkSmall>
		  <CustomNavLinkSmall>
			<Span><a href="entretiens">{("entretiens")}</a></Span>
		  </CustomNavLinkSmall>
		  <CustomNavLinkSmall>
			<Span><a href="condidates">{("condidates")}</a></Span>
		  </CustomNavLinkSmall>
		  <CustomNavLinkSmall
			style={{ width: "180px" }}
			
		  >
			<Span>
			<a href="contact">
			
			  <Button>{("Contact")}</Button>
			  </a>
			</Span>
		  </CustomNavLinkSmall>
		</>
	  );
	};
  
	return (
	  <HeaderSection>
		<Container>
		  <Row justify="space-between">
			<LogoContainer to="/" aria-label="homepage">
			  <SvgIcon src={logo} width="101px" height="64px" />
			</LogoContainer>
			<NotHidden>
			  <MenuItem />
			</NotHidden>
			<Burger onClick={showDrawer}>
			  <Outline />
			</Burger>
		  </Row>
		  <Drawer closable={false} visible={visible} onClose={onClose}>
			<Col style={{ marginBottom: "2.5rem" }}>
			  <Label onClick={onClose}>
				<Col span={10}>
				  <Menu>Menu</Menu>
				</Col>
				<Col span={10}>
				  <Outline />
				</Col>
			  </Label>
			</Col>
			<MenuItem />
		  </Drawer>
		</Container>
	  </HeaderSection>
	);
  };
  
