import { StyleSheet, Text, View } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Campus Helper</Text>
      <Text>Developed by BSIT 3B Team</Text>
      <Text>Contact: campushelper@school.edu.ph</Text>
      <Text>Emergency Hotline: (02) 1234-5678</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
});
