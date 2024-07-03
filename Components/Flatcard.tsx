import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Flatcard = () => {
  return (
    <View>
      <View style={styles.row}>
        <View style={[styles.cardRow, styles.cardOne]}></View>
        <View style={[styles.cardRow, styles.cardTwo]}></View>
      </View>
      <View style={styles.row}>
        <View style={[styles.cardRow, styles.cardThree]}></View>
        <View style={[styles.cardRow, styles.cardFour]}></View>
      </View>
      <View style={styles.row}>
        <View style={[styles.cardRow, styles.cardFive]}></View>
        <View style={[styles.cardRow, styles.fff]}></View>
      </View>
      <View style={styles.row}>
        <View style={[styles.cardRow, styles.cardSix]}></View>
        <View style={[styles.cardRow, styles.fff]}></View>
      </View>
      <View style={styles.row}>
        <View style={[styles.cardRow, styles.cardSeven]}></View>
        <View style={[styles.cardRow, styles.fff]}></View>
      </View>
    </View>
  );
};

export default Flatcard;

const styles = StyleSheet.create({
  row: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  cardRow: {
    width: 70,
    height: 140,
  },
  cardOne: {
    backgroundColor: '#ff0505',
  },
  cardTwo: {
    backgroundColor: '#ff03b8ba',
  },
  cardThree: {
    backgroundColor: '#f5b30a',
  },
  cardFour: {
    backgroundColor: '#8f0771',
  },
  cardFive: {
    backgroundColor: '#05cd70',
  },
  cardSix: {
    backgroundColor: '#1379e0',
  },
  cardSeven: {
    backgroundColor: '#0edfa8',
  },
  fff: {
    backgroundColor: '#fff',
  },
});
