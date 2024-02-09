import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform, SafeAreaView } from 'react-native';
import { useState } from 'react';
import Headxer from './components/Headxer';

export default function App() {
	const [isWorking, setIsWorking] = useState(false);
	const [time, setTime] = useState(25 * 60);
	const [currtenTime, setCurrentTime] = useState('Pomo' || 'Short' || 'Long');

	return (
		<SafeAreaView style={styles.container}>
			<View style={{ paddingTop: Platform.OS === 'android' ? 30 : 0 }}>
				<Text style={styles.title}>Pomodoro</Text>
				<Headxer time={time} />
				<StatusBar style='dark' />
			</View>
		</SafeAreaView>
	);
}
const colors = ['#F7DC6F', '#95fc51', '#EB984E'];

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	title: {
		fontSize: 30,
		fontWeight: 'bold',
	},
});
