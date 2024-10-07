import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

const ElevatedCards = () => {
  return (
    <View>
      <Text style={styles.title}>Elevated Cards</Text>
      <ScrollView horizontal style={styles.container}>
        <View style={styles.card}>
          <Text>Tap</Text>
        </View>
        <View style={styles.card}>
          <Text>Tap</Text>
        </View>
        <View style={styles.card}>
          <Text>Tap</Text>
        </View>
        <View style={styles.card}>
          <Text>Tap</Text>
        </View>
        <View style={styles.card}>
          <Text>Tap</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    width: 100,
    height: 100,
    backgroundColor: '#ff0',
    margin: 4,
  },
  container: {
    flex: 1,
  },
});

export default ElevatedCards;
