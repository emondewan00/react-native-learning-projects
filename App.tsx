import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import Page from './components/first project/Index';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Page />
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
