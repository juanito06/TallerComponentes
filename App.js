import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import Greeting from './components/Greeting';
import UserDetails from './components/UserDetails';  
import Task from './components/Task';
import ClickCounter from './components/ClickCounter';
import ThemeSwitcher from './components/ThemeSwitcher';
import DynamicForm from './components/DynamicForm';
import AlertButton from './components/AlertButton';
import RegistrationForm from './components/RegistrationForm';
import ToggleText from './components/ToggleText';
import ImageGallery from './components/ImageGallery';
import ParentCounter from './components/ParentCounter';
import Game from './components/Game';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <SafeAreaView style={styles.contenedor}>
      <ScrollView>
        <Greeting />
        <View style={styles.divisor} />

        <UserDetails 
          nombre="Juan Vasquez" 
          edad={26} 
          ocupacion="Estudiante de Desarrollo de Software"
        />

        <View style={styles.divisor} />

        <Task 
          task={{ 
            title: 'Gane el Quiz?', 
            completed: false 
          }} 
        />

        <View style={styles.divisor} />

        <ToggleText/>

        <View style={styles.divisor} />

        <ClickCounter/>

        <View style={styles.divisor} />

        <ThemeSwitcher onThemeChange={(theme) => console.log(`Tema cambiado a: ${theme}`)} />

        <View style={styles.divisor} />

        <DynamicForm/>

        <View style={styles.divisor} />

        <AlertButton message="¡Este es un mensaje de alerta!" />

        <View style={styles.divisor} />

        <RegistrationForm onSubmit={(data) => console.log('Datos de registro:', data)} />

        <View style={styles.divisor} />

        <ImageGallery/>

        <View style={styles.divisor} />

        <ParentCounter/>

        <View style={styles.divisor} />

        <Game />

        <View style={styles.divisor} /> 

        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = {
  contenedor: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 60,
    marginTop: 100,
  },
  divisor: {
    height: 1,
    width: '100%',
    backgroundColor: '#ddd',
    marginVertical: 20,
  },
};
