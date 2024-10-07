import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

const ContactList = () => {
  const contacts = [
    {
      id: 1,
      name: 'John Doe',
      phone: '1234567890',
      email: 'johndoe@example.com',
      image: 'https://picsum.photos/200',
    },
    {
      id: 2,
      name: 'Jane Smith',
      phone: '9876543210',
      email: 'janesmith@example.com',
      image: 'https://picsum.photos/200',
    },
    {
      id: 3,
      name: 'Alice Johnson',
      phone: '0987654321',
      email: 'alicejohnson@example.com',
      image: 'https://picsum.photos/200',
    },
    {
      id: 4,
      name: 'Bob Brown',
      phone: '2345678901',
      email: 'bob@example.com',
      image: 'https://picsum.photos/200',
    },
  ];

  return (
    <View>
      <Text style={style.heading}>Contact List</Text>
      <ScrollView scrollEnabled={false}>
        {contacts.map(contact => (
          <View key={contact.id} style={style.card}>
            <Image src={contact.image} style={style.image} />
            <View>
              <Text style={style.name}>{contact.name}</Text>
              <Text>{contact.phone}</Text>
              <Text>{contact.email}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 16,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowRadius: 10,
    shadowColor: 'black',
    elevation: 5,
    flexDirection: 'row',
    gap: 20,
    marginVertical: 5,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 40,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});

export default ContactList;
