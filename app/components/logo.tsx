import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';

// Import your image from the assets directory
const logoImage = require('@/app/assets/logo.png');

const Logo: React.FC = () => {
  return (
    <View style={styles.logoContainer}>
      <Image source={logoImage} style={styles.logo} />
      <Text style={styles.companyName}>SmileCare Dental Clinic</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 150,
  },
  companyName: {
    marginTop: 10,
    fontSize: 45,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
});

export default Logo;
