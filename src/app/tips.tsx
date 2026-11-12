import { StyleSheet, Text, View } from 'react-native';

export default function Tips() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Why Hydrate? 🌊</Text>
      <Text style={styles.item}>Boosts skin health and beauty</Text>
      <Text style={styles.item}>Regulates body temperature</Text>
      <Text style={styles.item}>Flushes body waste</Text>
      <Text style={styles.item}>Maintains blood pressure</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f2f2f2', alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 20, fontWeight: 'bold', color: '#0EA5E9', marginBottom: 16 },
  item: { fontSize: 14, marginVertical: 4, color: '#333' },
});