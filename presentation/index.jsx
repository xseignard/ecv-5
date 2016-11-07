import React from 'react';
import {
	Appear,
	Deck,
	Heading,
	Image,
	Link,
	ListItem,
	List,
	Slide,
	Spectacle,
} from 'spectacle';
import preloader from 'spectacle/lib/utils/preloader';
import createTheme from 'spectacle/lib/themes/default';
import 'normalize.css';
import 'spectacle/lib/themes/default/index.css';

// images
import badass from '../assets/badass.gif';
import demo from '../assets/demo.gif';
import alignement from '../assets/alignement.gif';
import ladder from '../assets/ladder.gif';
import flex from '../assets/flex.gif';
import clap from '../assets/clap.gif';

preloader({
	badass,
	demo,
	alignement,
	ladder,
	flex,
	clap,
});

const theme = createTheme({
	primary: '#00796B',
});

const Presentation = () => (
	<Spectacle theme={theme}>
		<Deck transition={['zoom', 'fade']} transitionDuration={500}>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="black">
					Flexbox
				</Heading>
				<Heading size={1} fit caps>
					le positionnement ultime
				</Heading>
				<Heading size={1} fit caps textColor="black">
					et des grenouilles
				</Heading>
			</Slide>
			<Slide bgColor="primary">
				<Image src={badass} margin="0px auto 40px" height="293px" />
				<Heading size={2} caps fit>
					Flexbox, le postionnement "badass"
				</Heading>
			</Slide>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="white">
					Flexbox c'est:
				</Heading>
				<List>
					<Appear><ListItem>ni du inline, ni du block</ListItem></Appear>
					<Appear><ListItem>mais un nouveau modèle, dit modèle de boite <strong>flexible</strong></ListItem></Appear>
					<Appear><ListItem>gère la distribution des éléments (vertical ou horizontal), et les retours à la ligne</ListItem></Appear>
					<Appear><ListItem>gère les alignements et les centrages</ListItem></Appear>
					<Appear><ListItem>gère l'organistion des éléments, indépendamment du flux</ListItem></Appear>
					<Appear><ListItem>gère les espaces disponibles sur une page</ListItem></Appear>
				</List>
			</Slide>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="white">
					Flexbox en pratique:
				</Heading>
				<List>
					<Appear><ListItem>un conteneur</ListItem></Appear>
					<Appear><ListItem>et des enfants de celui-ci</ListItem></Appear>
				</List>
			</Slide>
			<Slide bgColor="primary">
				<Image src={demo} margin="0px auto 40px" height="293px" />
				<Heading size={2} caps fit>
					Demo!
				</Heading>
			</Slide>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="white">
					"flex-direction", l'axe principal d'affichage
				</Heading>
				<List>
					<Appear><ListItem>"row": distribution horizontale, valeur par défaut</ListItem></Appear>
					<Appear><ListItem>"row-reverse": horizontale inversée</ListItem></Appear>
					<Appear><ListItem>"column": verticale</ListItem></Appear>
					<Appear><ListItem>"column-reverse": verticale inversée</ListItem></Appear>
				</List>
			</Slide>
			<Slide bgColor="primary">
				<Image src={demo} margin="0px auto 40px" height="293px" />
				<Heading size={2} caps fit>
					Demo!
				</Heading>
			</Slide>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="white">
					"flex-wrap", le droit de passer à la ligne
				</Heading>
				<List>
					<Appear><ListItem>selon l'axe principal</ListItem></Appear>
					<Appear><ListItem>"nowrap": pas de retour à la ligne, valeur par défaut</ListItem></Appear>
					<Appear><ListItem>"wrap": retour à la ligne</ListItem></Appear>
					<Appear><ListItem>"wrap-reverse": retour à la ligne inversé</ListItem></Appear>
				</List>
			</Slide>
			<Slide bgColor="primary">
				<Image src={demo} margin="0px auto 40px" height="293px" />
				<Heading size={2} caps fit>
					Demo!
				</Heading>
			</Slide>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="white">
					"flex-flow", le diminutif de "flew-direction" et "flew-wrap"
				</Heading>
				<List>
					<Appear><ListItem>quelques exemples</ListItem></Appear>
					<Appear><ListItem>"flew-flow: row nowrap": affihage horizontal et pas de retour à la ligne, valeur par défaut</ListItem></Appear>
					<Appear><ListItem>"flew-flow: cloumn wrap": affichage vertical et retour à la ligne</ListItem></Appear>
				</List>
			</Slide>
			<Slide bgColor="primary">
				<Image src={alignement} margin="0px auto 40px" height="293px" />
				<Heading size={2} caps fit>
					Les alignements
				</Heading>
			</Slide>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="white">
					"justify-content", l'alignement selon l'axe principal
				</Heading>
				<List>
					<Appear><ListItem>"flex-start": alignement au début de l'axe principal (par défaut)</ListItem></Appear>
					<Appear><ListItem>"flex-end": alignement à la fin de l'axe principal</ListItem></Appear>
					<Appear><ListItem>"center": alignement centré</ListItem></Appear>
					<Appear><ListItem>"space-between": alignement justifié</ListItem></Appear>
					<Appear><ListItem>"space-around": variante de l'alignement justifié</ListItem></Appear>
				</List>
			</Slide>
			<Slide bgColor="primary">
				<Image src={demo} margin="0px auto 40px" height="293px" />
				<Heading size={2} caps fit>
					Demo!
				</Heading>
			</Slide>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="white">
					"align-items", l'alignement selon l'axe secondaire
				</Heading>
				<List>
					<Appear><ListItem>"flex-start": alignement au début de l'axe secondaire</ListItem></Appear>
					<Appear><ListItem>"flex-end": alignement à la fin de l'axe secondaire</ListItem></Appear>
					<Appear><ListItem>"center": alignement centré</ListItem></Appear>
					<Appear><ListItem>"baseline": quasi identique à flex-start</ListItem></Appear>
					<Appear><ListItem>"stretch": occupe l'espace disponible (par défaut)</ListItem></Appear>
					<Appear><ListItem>"align-self": alignement spécifique d'un flex-item</ListItem></Appear>
				</List>
			</Slide>
			<Slide bgColor="primary">
				<Image src={demo} margin="0px auto 40px" height="293px" />
				<Heading size={2} caps fit>
					Demo!
				</Heading>
			</Slide>
			<Slide bgColor="primary">
				<Image src={ladder} margin="0px auto 40px" height="293px" />
				<Heading size={2} caps fit>
					L'ordonnancement
				</Heading>
			</Slide>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="white">
					"order", pondération des flex-items
				</Heading>
				<List>
					<Appear><ListItem>vaut 0 par défaut</ListItem></Appear>
					<Appear><ListItem>la valeur la plus élevée se retrouvera en dernier</ListItem></Appear>
					<Appear><ListItem>la valeur la moins élevée en premier</ListItem></Appear>
				</List>
			</Slide>
			<Slide bgColor="primary">
				<Image src={demo} margin="0px auto 40px" height="293px" />
				<Heading size={2} caps fit>
					Demo!
				</Heading>
			</Slide>
			<Slide bgColor="primary">
				<Image src={flex} margin="0px auto 40px" height="293px" />
				<Heading size={2} caps fit>
					La flexibilité
				</Heading>
			</Slide>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="white">
					"flex-grow", capacité à occuper l'espace disponible
				</Heading>
				<List>
					<Appear><ListItem>"flex-grow": vaut 0 par défaut, le flex-item ne "grossit" pas</ListItem></Appear>
					<Appear><ListItem>la somme des flex-grow indique la proportion de "grossissement" dans l'espace restant</ListItem></Appear>
					<Appear><ListItem>les flex items se partagent l'espace restant en fonction de leur flex-grow</ListItem></Appear>
				</List>
			</Slide>
			<Slide bgColor="primary">
				<Image src={demo} margin="0px auto 40px" height="293px" />
				<Heading size={2} caps fit>
					Demo!
				</Heading>
			</Slide>
			<Slide bgColor="primary">
				<Image src={clap} margin="0px auto 40px" height="293px" />
				<Heading size={2} caps fit>
					Jouons avec des grenouilles!
				</Heading>
			</Slide>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="white">
					Flexbox Froggy
				</Heading>
				<Link href="http://flexboxfroggy.com/" target="_blank">http://flexboxfroggy.com/</Link>
			</Slide>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="white">
					Créer un gabarit de site avec flexbox
				</Heading>
			</Slide>
		</Deck>
	</Spectacle>
);

export default Presentation;
