import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

const stylesbotao = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};
export default stylesbotao;
