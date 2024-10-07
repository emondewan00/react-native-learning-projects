import React from 'react';
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const ActionCard = () => {
  const redirect = (url: string) => {
    Linking.openURL(url);
  };
  return (
    <View style={styles.section}>
      <Text style={styles.heading}>Blog Card</Text>
      <View style={styles.card}>
        <Text style={styles.title} numberOfLines={1}>
          Lorem ipsum dolor, sit amet consectetur adipisicing.
        </Text>
        <Image
          src={
            'https://img.freepik.com/free-photo/beautiful-rainbow-nature_23-2151498366.jpg?t=st=1728261198~exp=1728264798~hmac=f91d8e6ec2735671f33f73b0de27702ed06ae327f51cbd461e3362bd8f7a6322&w=1380'
          }
          style={styles.image}
        />
        <View style={styles.content}>
          <Text numberOfLines={3}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas quasi
            vero nesciunt libero autem debitis quis, reprehenderit nihil eaque
            architecto! Tempora molestias facilis nemo adipisci amet ipsa
            laudantium aperiam quos.
          </Text>
          <Text>Posted on 15 days ago </Text>
          <TouchableOpacity
            onPress={() =>
              redirect(
                'https://img.freepik.com/free-photo/beautiful-rainbow-nature_23-2151498366.jpg?t=st=1728261198~exp=1728264798~hmac=f91d8e6ec2735671f33f73b0de27702ed06ae327f51cbd461e3362bd8f7a6322&w=1380',
              )
            }>
            <Text style={[styles.text, styles.button]}>Read More</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginTop: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 10,
    shadowOffset: {width: 2, height: 2},
    shadowColor: 'black',
    shadowRadius: 10,
    elevation: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
  },
  image: {
    width: '100%',
    height: 200,
    marginVertical: 10,
  },
  content: {},
  button: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 4,
    color: '#fff',
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
  },
});

export default ActionCard;
