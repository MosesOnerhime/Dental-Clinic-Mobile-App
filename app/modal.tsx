import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Text, View } from '@/components/Themed';
import { FontAwesome } from '@expo/vector-icons';

export default function AboutUsScreen() {
  const handleSocialMediaClick = (platform: string) => {
    // Replace with actual functionality to open social media profiles
    console.log(`Opening ${platform} profile...`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>About Us</Text>
      <View style={styles.separator} />

      <View style={styles.content}>
        <Text style={styles.text}>
          Welcome to SmileCare Dental Clinic, where we are dedicated to transforming smiles and
          improving lives. Our state-of-the-art facility combines advanced technology with
          compassionate care to ensure each patient receives the highest standard of dental
          treatment.
        </Text>
        <Text style={styles.text}>
          Whether you're here for a routine check-up or a comprehensive procedure, our team of
          experienced professionals is committed to your comfort and well-being every step of the
          way.
        </Text>
        <Text style={styles.text}>
          Our mission is to provide high-quality dental care to our patients in a comfortable and
          welcoming environment.
        </Text>
      </View>

      <View style={styles.socialContainer}>
        <TouchableOpacity
          style={styles.socialIcon}
          onPress={() => handleSocialMediaClick('facebook')}>
          <FontAwesome name="facebook-square" size={30} color="#3b5998" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.socialIcon}
          onPress={() => handleSocialMediaClick('twitter')}>
          <FontAwesome name="twitter-square" size={30} color="#1da1f2" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.socialIcon}
          onPress={() => handleSocialMediaClick('instagram')}>
          <FontAwesome name="instagram" size={30} color="#c32aa3" />
        </TouchableOpacity>
      </View>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#E7E420',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#35302F',
  },
  separator: {
    marginVertical: 20,
    height: 1,
    width: '100%',
    backgroundColor: '#ccc',
  },
  content: {
    maxWidth: 400,
    marginBottom: 20,
    backgroundColor: 'transparent', // Set transparent background for text content
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
    textAlign: 'justify',
    color: '#35302F',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    backgroundColor: 'white',
    // Shadow properties for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Elevation for Android
    elevation: 5,
  },  
  socialIcon: {
    marginHorizontal: 10,
  },
});
