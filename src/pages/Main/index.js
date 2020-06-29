import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import Menu from '../../components/Menu';

import { Container, Content, Card, CardHeader, CardContent, Title, Description, CardFooter, Annotation } from './styles';

export default function Main() {
	const translateY = new Animated.Value(0);

	const animatedEvent = Animated.event(
		[
			{
				nativeEvent: {
					translationY: translateY,
				}
			}
		],
		{ useNativeDriver: true },
	);

	function onHandlerStateChanged(event) {

	}

	return (
		<Container>
			<Header />
			<Content>

				<Menu />

				<PanGestureHandler
					onGestureEvent={animatedEvent}
					onHandlerStateChange={onHandlerStateChanged}
				>
					<Card style={{
						transform: [{
							translateY,
						}],
					}}>
						<CardHeader>
							<Icon name="attach-money" size={28} color="#666" />
							<Icon name="visibility-off" size={28} color="#666" />
						</CardHeader>
						<CardContent>
							<Title>Saldo disponível</Title>
							<Description>R$ 112.820,40</Description>
						</CardContent>
						<CardFooter>
							<Annotation>
								Compra mais recente em Amazon.com no valor de R$ 81,99 ontem
							</Annotation>
						</CardFooter>
					</Card>
				</PanGestureHandler>

			</Content>

			<Tabs />
		</Container>
	);
}