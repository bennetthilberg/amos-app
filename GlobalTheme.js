import { StyleSheet } from 'react-native';

const tabBarOptions = {
  activeTintColor: '#673AB7',
  inactiveTintColor: 'black',
  style: {
    backgroundColor: '#f5f5f5',
  }
};

export const GlobalTheme = StyleSheet.create({
  colors: {
    primary: '#673AB7', // Purple 500
    secondary: '#D1C4E9', // Purple 100
    success: '#81C784', // Green 300
    error: '#E57373', // Red 300
    warning: '#FFB74D', // Deep Orange 300
    info: '#64B5F6', // Blue 300
    light: '#EDE7F6', // Purple 50
    dark: '#231347' // Purple 700
  },
  Button: {
    buttonStyle: {
      backgroundColor: '#673AB7',
      borderRadius: 25,
    },
    titleStyle: {
      color: '#FFFFFF',
    },
  },
  Text: {
    style: {
      color: '#512DA8',
      fontSize: 16,
    },
    h1Style: {
      fontSize: 36,
      color: '#673AB7',
      fontWeight: 'bold',
    },
    h2Style: {
      fontSize: 30,
      color: '#673AB7',
      fontWeight: 'bold',
    },
    h3Style: {
      fontSize: 24,
      color: '#673AB7',
      fontWeight: 'bold',
    },
    h4Style: {
      fontSize: 18,
      color: '#673AB7',
      fontWeight: 'bold',
    },
  },
  Input: {
    containerStyle: {
      marginTop: 8,
      marginBottom: 8,
    },
    inputStyle: {
      color: '#512DA8',
    },
    errorStyle: {
      color: '#E57373',
    },
  },
  ListItem: {
    containerStyle: {
      backgroundColor: '#EDE7F6',
      marginTop: 4,
      marginBottom: 4,
    },
    titleStyle: {
      color: '#512DA8',
    },
    subtitleStyle: {
      color: '#673AB7',
    },
  },
  Header: {
    centerComponent: {
      style: { color: '#FFFFFF', fontSize: 20, fontWeight: 'bold' },
    },
    backgroundColor: '#673AB7',
  },
  
}); 

export { tabBarOptions };