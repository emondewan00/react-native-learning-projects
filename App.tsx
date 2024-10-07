import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import PasswordGenerator from './components/passwordGenerator/Index';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <PasswordGenerator />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
});

export default App;
