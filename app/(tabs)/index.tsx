import React from 'react';
import { StyleSheet, View, Text, ImageBackground, ScrollView, SafeAreaView } from 'react-native';

export default function TabOneScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ImageBackground
          source={require('../../assets/images/alice-background.jpg')}
          style={styles.background}
        >
          <View style={styles.content}>
            <Text style={styles.title}>Alice no País das Maravilhas</Text>
            <Text style={styles.subtitle}>Uma aventura mágica e surreal</Text>
            
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Personagens</Text>
              <Text style={styles.sectionContent}>
                • Alice{'\n'}
                • Chapeleiro Maluco{'\n'}
                • Gato de Cheshire{'\n'}
                • Rainha de Copas
              </Text>
            </View>
            
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Sobre a História</Text>
              <Text style={styles.sectionContent}>
                Uma menina curiosa cai em uma toca de coelho e entra em um mundo fantástico cheio de personagens excêntricos e aventuras surreais.
              </Text>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  content: {
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#4A0E4E',
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: '#6A1B9A',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#4A0E4E',
  },
  sectionContent: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
});