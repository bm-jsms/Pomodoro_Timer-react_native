import { StatusBar } from 'expo-status-bar';
import {
	StyleSheet,
	Text,
	View,
	Platform,
	SafeAreaView,
	TouchableOpacity,
} from 'react-native';
import { useState, useEffect } from 'react';
import Headxer from './components/Headxer';
import Timer from './components/Timer';

const colors = ['#F7DC6F', '#7de637'];

export default function App() {
	const [isWorking, setIsWorking] = useState(false);
	const [time, setTime] = useState(25 * 60);
	const [currentTime, setCurrentTime] = useState(
		'Pomodoro' || 'Short Break' || 'Long Break',
	);
	const [isActive, setIsActive] = useState(false);
	const handleStartStop = () => {
		setIsActive(!isActive);
	};
	useEffect(() => {
		let interval: NodeJS.Timeout | null | undefined = undefined;
		if (isActive) {
			interval = setInterval(() => {
				setTime(time - 1);
			}, 1000);
		} else {
			clearInterval(interval);
		}

		return () => clearInterval(interval!);
	}, [isActive, time]);

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
					flex: 1,
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

				<TouchableOpacity style={styles.button} onPress={handleStartStop}>
					<Text
						style={{
							color: 'white',
							fontSize: 20,
							fontWeight: 'bold',
						}}
					>
						{isActive ? 'Pause' : 'Start'}
					</Text>
				</TouchableOpacity>

				<StatusBar style='dark' />
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	title: {
		fontSize: 30,
		fontWeight: 'bold',
	},
	button: {
		backgroundColor: '#333',
		padding: 15,
		marginTop: 15,
		borderRadius: 10,
		alignItems: 'center',
	},
});
