import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

type TimerProps = {
	time: number;
};

export default function Timer({ time }: TimerProps) {
	return (
		<View style={styles.container}>
			<Text>{time}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#f2ffff',
		padding: 20,
		borderRadius: 15,
	},
});
