import { StyleSheet } from 'react-native';
import { GlobalTheme } from '../GlobalTheme';

const NavigationBarStyle = StyleSheet.create({
    navigationBar: {
        height: 56,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: GlobalTheme.colors.dark,
    }
    
});
export default NavigationBarStyle;