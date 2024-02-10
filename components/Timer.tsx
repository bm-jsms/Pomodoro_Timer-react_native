import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

type TimerProps = {
	time: number;
};

export default function Timer({ time }: TimerProps) {
	const formatter = `${Math.floor(time / 60)
		.toString()
		.padStart(2, '0')}:${(time % 60).toString().padStart(2, '0')}`;
	return (
		<View style={styles.container}>
			<Text style={styles.time}>{formatter}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#f5fff5',
		flex: 0.3,
		justifyContent: 'center',
		padding: 20,
		borderRadius: 15,
	},
	time: {
		fontSize: 80,
		fontWeight: 'bold',
		textAlign: 'center',
	},
});
