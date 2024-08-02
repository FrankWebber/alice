import React from 'react';
import { StyleSheet, View, Text, ScrollView, SafeAreaView, Image, ImageBackground } from 'react-native';

const characters = [
  {
    name: 'Alice',
    description: 'A curiosa e corajosa protagonista que cai na toca do coelho.',
  },
  {
    name: 'Chapeleiro Maluco',
    description: 'Um excêntrico personagem conhecido por suas festas de chá e enigmas.',
  },
  {
    name: 'Gato de Cheshire',
    description: 'Um gato misterioso com um sorriso enigmático que pode aparecer e desaparecer.',
    image: require('../../assets/images/cheshire-cat.png'),
  },
  {
    name: 'Rainha de Copas',
    description: 'A temperamental monarca do País das Maravilhas, famosa por gritar "Cortem-lhe a cabeça!"',
  },
];

export default function TabTwoScreen() {
  return (
    <ImageBackground 
      source={require('../../assets/images/alice-background.jpg')} 
      style={styles.backgroundImage}
    >
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Text style={styles.title}>Personagens de Alice</Text>
          {characters.map((character, index) => (
            <View key={index} style={styles.characterCard}>
              {character.image && (
                <Image source={character.image} style={styles.characterImage} />
              )}
              <View style={styles.characterInfo}>
                <Text style={styles.characterName}>{character.name}</Text>
                <Text style={styles.characterDescription}>{character.description}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(240, 248, 255, 0.7)', // Azul claro com transparência
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#4A0E4E',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
  characterCard: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    marginHorizontal: 15,
    marginBottom: 15,
    padding: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  characterImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  characterInfo: {
    flex: 1,
  },
  characterName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4A0E4E',
    marginBottom: 5,
  },
  characterDescription: {
    fontSize: 14,
    color: '#333',
  },
});