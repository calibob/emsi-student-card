import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* EMSI Logo */}
      <Image
        source={{ uri: 'https://www.emsi.ma/img/logo-emsi.png' }}
        style={styles.logo}
      />

      {/* Profile Picture */}
      <Image
        source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }} // Replace with your image
        style={styles.avatar}
      />

      {/* Student Info */}
      <Text style={styles.name}>Youssef El Amrani</Text>
      <Text style={styles.info}>ID: CNE123456</Text>
      <Text style={styles.info}>Filière: Génie Informatique</Text>
      <Text style={styles.info}>Niveau: 3ème année</Text>

      {/* Footer */}
      <Text style={styles.footer}>© EMSI Casablanca</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 120,
    height: 60,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderColor: '#007BFF',
    borderWidth: 2,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#222',
  },
  info: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  footer: {
    marginTop: 30,
    fontSize: 14,
    color: '#aaa',
  },
});
