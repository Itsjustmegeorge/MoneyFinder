import React from 'react';
import { SafeAreaView, StyleSheet, Text, Image } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../assets/logo-moneyfinder.png')} style={styles.logo} />
      <Text style={styles.title}>Welcome to MoneyFinder</Text>
      <Text style={styles.subtitle}>Track your finances and reach your goals.</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5F5F5' },
  logo: { width: 120, height: 120, marginBottom: 24 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#283593' },
  subtitle: { fontSize: 18, color: '#212121', marginTop: 8 },
});
