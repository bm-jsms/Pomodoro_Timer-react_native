import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type HeadxerProps = {
	setTime: (time: number) => void;
	currentTime: string;
	setCurrentTime: (time: string) => void;
};

const options = ['Pomodoro', 'Short Break', 'Long Break'];

const Headxer = ({ setTime, currentTime, setCurrentTime }: HeadxerProps) => {
	const handlePress = (index: number) => {
		const newTime = index === 0 ? 25 : index === 1 ? 5 : 15;

		setCurrentTime(options[index]);
		setTime(newTime * 60);
	};

	return (
		<View style={{ flexDirection: 'row' }}>
			{options.map((option, index) => (
				<TouchableOpacity
					key={index}
					onPress={() => handlePress(index)}
					style={[
						styles.itemStyle,
						currentTime !== option && {
							opacity: 0.7,
							borderColor: 'transparent',
						},
					]}
				>
					<Text>{option}</Text>
				</TouchableOpacity>
			))}
		</View>
	);
};

export default Headxer;

const styles = StyleSheet.create({
	itemStyle: {
		borderWidth: 1,
		borderColor: 'black',
		borderRadius: 5,
		padding: 5,
		width: '33%',
	},
});
