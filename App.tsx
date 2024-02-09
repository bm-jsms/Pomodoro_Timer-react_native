import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform, SafeAreaView } from 'react-native';

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<View style={{ paddingTop: Platform.OS === 'android' ? 30 : 0 }}>
				<Text style={styles.title}>Pomodoro</Text>
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
});
