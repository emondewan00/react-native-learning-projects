import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const FancyCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trading Place</Text>
      <View style={styles.card}>
        <Image
          source={{
            uri: 'https://cdn.pixabay.com/photo/2018/09/12/22/43/bangladesh-3673378_1280.jpg',
          }}
          style={styles.image}
        />
        <View style={styles.container}>
          <Text style={styles.cardTitle}>River with boat</Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
            eaque.
          </Text>
          <Text>10 mins away</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    height: 180,
  },
  card: {
    shadowOffset: {
      height: 10,
      width: 10,
    },
    shadowRadius: 10,
    shadowColor: 'black',
    elevation: 5,
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 4,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default FancyCard;
