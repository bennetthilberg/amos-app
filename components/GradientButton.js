import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function GradientButton({ title, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={{width: "80%", alignSelf: "center", borderRadius: 10, marginBottom: 20}}>
      <LinearGradient 
        // Gradient colors
        
        colors={['#8a2be2', '#9400d3', '#4b0082']}
        // Other gradient props
        start={[0, 0]}
        end={[1, 0]}
        style={{ padding: 15, alignItems: 'center', borderRadius: 10 }}
      >
        <Text style={{ backgroundColor: 'transparent', fontSize: 15, color: '#fff' }}>
          {title}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}
