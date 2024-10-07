import React from 'react';
import {View} from 'react-native';
import FlatCards from './FlatCards';
import ElevatedCards from './ElevatedCards';
import FancyCard from './FancyCard';
import ActionCard from './ActionCard';
import ContactList from './ContactList';

const Page = () => {
  return (
    <View>
      <FlatCards />
      <ElevatedCards />
      <FancyCard />
      <ActionCard />
      <ContactList />
    </View>
  );
};

export default Page;
