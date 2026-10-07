import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen(){
  return (
    <View style={styles.container}> 
      <Text style={styles.titulo}>Vicenzo Vieira Varandas</Text>
        <Image
          source={{uri: 'https://raw.githubusercontent.com/VICENZOvava/VICENZOvava.github.io/refs/heads/main/VicenzoF.jpg'}}
          style={styles.imagem} />

             <Text style={styles.subtitulo}>
              - Cursando Ensino Médio Técnico em Desenvolvimento de Sistemas
              </Text> 

      <TouchableOpacity
        style={styles.button}
        onPress={() => Linking.openURL('https://github.com/VICENZOvava')}
      >
        <Text style={styles.buttonText}>Github</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  titulo: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  imagem: {
    borderRadius: 20,
    width: 300,
    height: 400,
    marginBottom: 20,
  },
  subtitulo: {
    color: '#fff',
    fontSize: 18,
    lineHeight: 26,
    marginBottom: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#666161',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 12,
    elevation: 5,
    marginBottom: 20,
  },
    buttonText: {
    color: '#1E1E1E',
    fontSize: 18,
    fontWeight: 'bold',
  },

})