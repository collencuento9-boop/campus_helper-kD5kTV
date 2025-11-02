import { StyleSheet, Text, View } from 'react-native';

export default function EventsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upcoming Events</Text>
      <Text>Welcome Week, Career Fair, Sports Fest...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
});
