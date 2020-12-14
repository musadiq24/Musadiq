import React from "react";
import theme from "theme";
import { Theme, Link, Icon, Text, Strong, Box, List, Button, Input } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, Menu, Section, StackItem, Stack, SocialMedia } from "@quarkly/components";
import { MdAccountBalance, MdArrowDownward, MdLocationOn, MdEmail, MdPhone, MdFace } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section>
			<Box
				display="flex"
				padding="12px 0"
				justify-content="space-between"
				align-items="center"
				flex-direction="row"
				md-flex-direction="column"
				text-transform="uppercase"
			>
				<Icon category="md" icon={MdAccountBalance} size="30px" />
				<Text
					margin="0"
					md-margin="0px 0 20px 0"
					text-align="left"
					font="--lead"
					padding="0px 0px 0px 24px"
					sm-padding="5px 0px 0px 24"
					sm-margin="5px 0 20px 0"
				>
					WebTry  Manual
				</Text>
				<Text />
				<Text>
					<Strong>
						About
					</Strong>
				</Text>
				<Text>
					<Strong margin="0px px 0px 10px" padding="0px 0px 0px px">
						Menu
					</Strong>
				</Text>
				<Menu
					display="flex"
					justify-content="center"
					font="--base"
					font-weight="700"
					md-flex-direction="column"
					md-align-items="center"
				>
					<Override
						slot="link"
						text-decoration="none"
						color="--dark"
						padding="6px 12px"
						sm-padding="6px 12px 50px 12px"
					/>
					<Override slot="link-active" color="--primary" />
					<Override slot="item" padding="6px" />
					<Override slot="link-404" />
				</Menu>
			</Box>
		</Section>
		<Section
			background="linear-gradient(0deg,rgba(4, 8, 12, 0.6) 0%,rgba(4, 8, 12, 0.6) 100%),--color-darkL2 url(https://images.unsplash.com/photo-1510125594188-5afc74c8cc43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80) center/cover"
			padding="64px 0"
			sm-padding="40px 0"
			color="--light"
			font="--base"
		>
			<Stack>
				<StackItem width="75%" lg-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Text color="--lightD2" letter-spacing="1px" text-transform="uppercase" margin="0">
						Webtry manual
					</Text>
					<Text as="h1" font="--headline1" md-font="--headline2" margin="10px 0">
						Looking and Promoting some of the Internal Talents, you have,
						<br />
						You Are One Among!
					</Text>
				</StackItem>
			</Stack>
			<Box text-align="center" margin="96px 0 0 0">
				<Text margin="8px 0" text-transform="uppercase">
					Who we are
				</Text>
				<Icon category="md" margin="0 auto" icon={MdArrowDownward} />
			</Box>
		</Section>
		<Section
			padding="60px 0"
			sm-padding="40px 0"
			min-height="600px"
			sm-min-height="auto"
			background="--color-light"
			display="flex"
			flex-direction="column"
		>
			<Text
				font="--base"
				text-transform="uppercase"
				letter-spacing="1px"
				max-width="850px"
				color="--grey"
				margin="0px"
			>
				<Strong>
					Webtry Manual
				</Strong>
			</Text>
			<Text
				as="h1"
				margin="8px 0px 32px"
				font="--headline1"
				md-font="--headline2"
				color="--dark"
				max-width="850px"
			>
				Final Winners{" "}
				<br />
				Art-S-00.001/14/2020
			</Text>
			<Stack margin-top="auto" color="--grey" font="--base">
				<StackItem width="50%" md-width="100%">
					<Text margin="0px">
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							All this section contains of the winners of Telegram Art Session
							<br />
							WMCV-Code :{"\n"}
							<br />
							Art-S-00.001/14/2020
							<br />
							Their Good Names are:
						</Strong>
					</Text>
				</StackItem>
				<StackItem width="50%" md-width="100%" />
			</Stack>
			<List>
				<Text>
					JUVARIA LATIEF BHAT
				</Text>
			</List>
			<List>
				<Text>
					ALEENA ISFAQ QURAISHI
				</Text>
			</List>
			<List>
				<Text>
					ARSH BINTI KHURSHEED
				</Text>
			</List>
			<Button>
				View Their Art Pieces
			</Button>
		</Section>
		<Section
			padding="60px 0"
			sm-padding="40px 0"
			min-height="600px"
			sm-min-height="auto"
			background="--color-light"
			display="flex"
			flex-direction="column"
		>
			<Text
				font="--base"
				text-transform="uppercase"
				letter-spacing="1px"
				max-width="850px"
				color="--grey"
				margin="0px"
			>
				Webtry Manual
			</Text>
			<Text
				as="h1"
				margin="8px 0px 32px"
				font="--headline1"
				md-font="--headline2"
				color="--dark"
				max-width="850px"
			>
				About
			</Text>
			<Stack margin-top="auto" color="--grey" font="--base">
				<StackItem width="25%" md-width="50%" sm-width="100%">
					<Text margin="0px">
						Many Competitions took place manually here, These are forwarded to viewers page.
					</Text>
				</StackItem>
				<StackItem width="25%" md-width="50%" sm-width="100%">
					<Text margin="0px">
						Art Competition: Most often and valuable thing that takes place. Here each member emails the piece.
					</Text>
				</StackItem>
				<StackItem width="25%" md-width="50%" sm-width="100%">
					<Text margin="0px">
						Paragraph Competition: Here each member Writes a short paragraph about a topic and is selected for multiples.
					</Text>
				</StackItem>
				<StackItem width="25%" md-width="50%" sm-width="100%">
					<Text margin="0px">
						Contradiction: Here each member tries to nominate another member by doing good and great than him.
						<br />
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Section background="--color-dark" padding="60px 0" sm-padding="40px 0">
			<SocialMedia
				facebook="https://www.facebook.com/quarklyapp/"
				twitter="https://twitter.com/quarklyapp"
				youtube="https://www.youtube.com/channel/UCK5bXs2L0bbSMQ82BQ3hIkw"
				vkontakte="https://vk.com/quarklyapp"
				telegram="https://t.me/joinchat/DqSYDhS0R9nMRvOtFbIxrQ"
			>
				<Override
					slot="link"
					border-radius="50%"
					color="--grey"
					hover-color="--light"
					background="transparent"
					hover-background="transparent"
					margin="0 8px"
				/>
			</SocialMedia>
		</Section>
		<Section
			color="--light"
			padding="100px 0"
			sm-padding="40px 0"
			position="relative"
			background="linear-gradient(0deg,rgba(25, 30, 34, 0.8) 0%,rgba(25, 30, 34, 0.8) 100%),--color-darkL2 url(https://images.unsplash.com/photo-1547619292-240402b5ae5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80)"
		>
			<Stack>
				<StackItem width="50%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box
						padding="0 0 0 64px"
						sm-padding="64px 0 0 0"
						margin="32px 0 0 0"
						max-width="360px"
						position="relative"
					>
						<Icon
							position="absolute"
							size="48px"
							top="0"
							left="0"
							category="md"
							icon={MdLocationOn}
						/>
						<Text as="h4" margin="6px 0" font="--base">
							Visit us
						</Text>
						<Text as="p" margin="6px 0" font="--headline3">
							190009, Iqbal Memorial Institute, Iqbal Abad Bemina Srinagar
						</Text>
					</Box>
					<Box
						padding="0 0 0 64px"
						sm-padding="64px 0 0 0"
						margin="64px 0 0 0"
						max-width="360px"
						position="relative"
					>
						<Icon
							position="absolute"
							size="48px"
							top="0"
							left="0"
							category="md"
							icon={MdEmail}
						/>
						<Text as="h4" margin="6px 0" font="--base">
							Email us
						</Text>
						<Text as="p" margin="6px 0" font="--headline3">
							<Link href="mailto:hello@company.com" text-decoration="none" hover-text-decoration="underline" color="--light">
								help - mohammadmusadiq2424@gmail.com
							</Link>
						</Text>
					</Box>
					<Box padding="0 0 0 64px" margin="64px 0 0 0" max-width="360px" position="relative">
						<Icon
							position="absolute"
							size="48px"
							top="0"
							left="0"
							category="md"
							icon={MdPhone}
						/>
						<Text as="h4" margin="6px 0" font="--base">
							Call us
						</Text>
						<Text as="p" margin="6px 0" font="--headline3">
							+91 9596008936
							<br />
							+91 8713961922
						</Text>
					</Box>
					<Box
						padding="0 0 0 64px"
						sm-padding="0"
						margin="48px 0"
						max-width="360px"
						position="relative"
						display="flex"
					>
						<Icon
							category="fa"
							icon={FaFacebookF}
							width="48px"
							height="48px"
							size="24px"
							margin-right="16px"
							background="--color-primary"
							border-radius="50%"
						/>
						<Icon
							category="fa"
							icon={FaTwitter}
							width="48px"
							height="48px"
							size="24px"
							margin-right="16px"
							background="--color-primary"
							border-radius="50%"
						/>
						<Icon
							category="fa"
							icon={FaLinkedinIn}
							width="48px"
							height="48px"
							size="24px"
							margin-right="16px"
							background="--color-primary"
							border-radius="50%"
						/>
					</Box>
				</StackItem>
				<StackItem width="50%" md-width="100%">
					<Box
						max-width="360px"
						padding="56px 50px 56px 200px"
						margin="0 80px 0 100px"
						md-max-width="100%"
						background="--color-primary"
						sm-width="340px"
						sm-margin="0 0 0 10px"
					>
						<Text as="h3" font="--headline3" margin="0 0 20px 0">
							Leave us message
						</Text>
						<Text>
							Name
						</Text>
						<Input name="Name" type="text" padding="6px 80px 6px 16px" margin="px 0px 0px 0px" />
						<Text>
							Email
						</Text>
						<Input padding="6px 80px 6px 16px" margin="px 0px 0px 0px" type="email" />
						<Text>
							Some text
						</Text>
						<Input padding="6px 80px 100px 16px" margin="px 0px 0px 0px" type="text" />
					</Box>
				</StackItem>
			</Stack>
			<Button background="--color-light url()" color="#000000">
				<Strong>
					Send
				</Strong>
			</Button>
		</Section>
		<Icon category="md" icon={MdFace} />
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});