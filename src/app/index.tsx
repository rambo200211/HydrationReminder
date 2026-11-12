import * as Notifications from 'expo-notifications';
import { useEffect, useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function ReminderTab() {
  const [isReminding, setIsReminding] = useState(false);
  const [message, setMessage] = useState('Time to drink a glass of water!');
  const [intervalMinutes, setIntervalMinutes] = useState(1);

  // Ask for permission when the screen loads
  useEffect(() => {
    async function requestPermissions() {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission required', 'We need notifications to remind you to drink water!');
      }
    }
    requestPermissions();
  }, []);

  async function scheduleReminder() {
    await Notifications.requestPermissionsAsync(); // safety check
    await Notifications.cancelAllScheduledNotificationsAsync(); // avoid stacking

    await Notifications.scheduleNotificationAsync({
      content: {
        title: '💧 Hydration Alert',
        body: message,
        sound: true,
      },
      trigger: {
        type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
        seconds: intervalMinutes * 60,
        repeats: true,
      },
    });

    setIsReminding(true);
    Alert.alert('Set!', `Reminding you every ${intervalMinutes} minutes.`);
  }

  async function stopReminder() {
    await Notifications.cancelAllScheduledNotificationsAsync();
    setIsReminding(false);
    Alert.alert('Stopped', 'Reminders cancelled.');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>🥤</Text>

      <Text style={styles.label}>Add a Custom Message</Text>
      <TextInput
        style={styles.input}
        value={message}
        onChangeText={setMessage}
      />

      <Text style={styles.label}>Set Interval (minutes)</Text>
      <TextInput
        style={styles.input}
        value={intervalMinutes.toString()}
        onChangeText={(text) => setIntervalMinutes(parseInt(text) || 1)}
        keyboardType="numeric"
      />

      <Text style={styles.status}>
        Status: {isReminding ? 'Active 🟢' : 'Inactive 🔴'}
      </Text>

      <View style={styles.buttons}>
        <Button title="Start Reminders" color="#0EA5E9" onPress={scheduleReminder} />
        <View style={{ height: 10 }} />
        <Button title="Stop Reminders" color="#EF4444" onPress={stopReminder} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#E0F7FA', alignItems: 'center', justifyContent: 'center', padding: 20 },
  emoji: { fontSize: 80, marginBottom: 20 },
  label: { fontSize: 14, fontWeight: 'bold', color: '#006064', marginTop: 12, marginBottom: 6 },
  input: { backgroundColor: '#fff', width: '100%', borderRadius: 8, borderWidth: 1, borderColor: '#ddd', padding: 10 },
  status: { fontSize: 16, fontWeight: 'bold', color: '#006064', marginVertical: 20 },
  buttons: { width: '60%' },
});