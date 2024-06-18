import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, ImageBackground } from 'react-native';
import Logo from '@/app/components/logo';

const TabTwoScreen: React.FC = () => {
  return (
    <ImageBackground source={require('@/app/assets/background.png')} style={styles.background}>
      <ScrollView contentContainerStyle={styles.container}>
        <Logo />
        <Text style={styles.title}>Clinical Record</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Clinic Date" />
          <TextInput style={styles.input} placeholder="Nature of Ailment" />
          <TextInput style={styles.input} placeholder="Medicine Prescribed" />
          <TextInput style={styles.input} placeholder="Procedure Undertaken" />
          <TextInput style={styles.input} placeholder="Date of Next Appointment" />
        </View>
        <Button title="Save" onPress={() => {}} />
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' as per your requirement
  },
  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#35302F',
    textTransform: 'uppercase',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#35302F',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default TabTwoScreen;
