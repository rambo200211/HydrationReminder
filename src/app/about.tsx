import { StyleSheet, Text, View } from 'react-native';

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About This App</Text>
      <Text style={styles.text}>
        Built for Mobile Application Development Lab 6. Demonstrates local
        notifications and Expo Router tab navigation.
      </Text>
      <Text style={[styles.text, { marginTop: 40 }]}>
        Developed with React Native and Expo.{'\n'}Created by Ravindu Bhagya.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f2f2f2', alignItems: 'center', justifyContent: 'center', padding: 30 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 12 },
  text: { fontSize: 13, color: '#555', textAlign: 'center' },
});