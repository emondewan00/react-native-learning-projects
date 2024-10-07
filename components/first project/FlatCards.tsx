import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const FlatCards = () => {
  return (
    <View>
      <Text style={styles.title}>Flat Cards</Text>

      <View style={styles.container}>
        <View style={[styles.card, styles.red]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.blue]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.green]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.yellow]}>
          <Text>Red</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    gap: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 10,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    width: 100,
    height: 100,
  },
  red: {
    backgroundColor: '#f00',
  },
  blue: {
    backgroundColor: '#00f',
  },
  green: {
    backgroundColor: '#0f0',
  },
  yellow: {
    backgroundColor: '#ff0',
  },
});

export default FlatCards;
