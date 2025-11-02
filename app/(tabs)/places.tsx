import { StyleSheet, Text, View } from 'react-native';

export default function PlacesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Campus Buildings</Text>
      <Text>Library, Canteen, Admin Office...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
});
