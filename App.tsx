import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform, SafeAreaView } from 'react-native';
import { useState } from 'react';
import Headxer from './components/Headxer';
import Timer from './components/Timer';

const colors = ['#F7DC6F', '#7de637'];

export default function App() {
	const [isWorking, setIsWorking] = useState(false);
	const [time, setTime] = useState(25 * 60);
	const [currentTime, setCurrentTime] = useState(
		'Pomodoro' || 'Short Break' || 'Long Break',
	);

	return (
		<SafeAreaView
			style={[
				styles.container,
				{
					backgroundColor:
						colors[currentTime === 'Pomodoro' ? 0 : 'Short Break' ? 1 : 2],
				},
			]}
		>
			<View
				style={{
					paddingHorizontal: 15,
					paddingTop: Platform.OS === 'android' ? 30 : 0,
				}}
			>
				<Text style={styles.title}>Pomodoro</Text>
				<Headxer
					setTime={setTime}
					currentTime={currentTime}
					setCurrentTime={setCurrentTime}
				/>
				<Timer time={time} />
				<StatusBar style='dark' />
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginLeft: 8,
	},
	title: {
		fontSize: 30,
		fontWeight: 'bold',
	},
});
