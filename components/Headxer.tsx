import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type HeadxerProps = {
	time: number;
};

const options = ['Pomodoro', 'Short Break', 'Long Break'];

const Headxer = ({ time }: HeadxerProps) => {
	return (
		<View style={{ flexDirection: 'row' }}>
			{options.map((option, index) => (
				<TouchableOpacity key={index} style={styles.itemStyle}>
					<Text>{option}</Text>
				</TouchableOpacity>
			))}
			<Text>{time}</Text>
		</View>
	);
};

export default Headxer;

const styles = StyleSheet.create({
	itemStyle: {
		borderWidth: 1,
		borderColor: 'black',
		padding: 5,
		width: '33%',
	},
});
