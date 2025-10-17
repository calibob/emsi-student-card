import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';

// Screen width for responsive design
const screenWidth = Dimensions.get('window').width;

export default function HomeScreen() {
  const isDark = false; // Force light theme

  // Enhanced EMSI Theme for better contrast and modern accents
  const theme = {
    colors: {
      background: isDark ? '#0A0A23' : '#FFFFFF',
      cardBackground: isDark ? '#1e1e30' : '#ecf4eeff',
      primaryText: isDark ? '#E0E0E0' : '#120453',
      secondaryText: isDark ? '#AAAAAA' : '#555555',
      accent: isDark ? '#3A6EA5' : '#2873A9',
      border: isDark ? '#444444' : '#e0e0e0', // Added for borders and shadows
    },
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={[styles.card, { backgroundColor: theme.colors.cardBackground, shadowColor: theme.colors.border }]}>
        {/* EMSI Logo and Header */}
        <View>
          <Image
            source={require('../assets/images/logo_emsi.png')}
            style={styles.logo}
          />
        </View>

        {/* Profile Image with Badge */}
        <View style={styles.profileContainer}>
          <Image
            source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
            style={[styles.avatar, { borderColor: theme.colors.accent }]}
          />
        </View>

        {/* Student Info - aligned label/value rows */}
        <View style={styles.infoGrid}>
          <View style={styles.infoRow}>
            <Text style={[styles.infoLabel, { color: theme.colors.primaryText }]}>Name</Text>
            <Text style={[styles.infoValue, { color: theme.colors.secondaryText }]}>Yassine Zairi</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={[styles.infoLabel, { color: theme.colors.primaryText }]}>CIN</Text>
            <Text style={[styles.infoValue, { color: theme.colors.secondaryText }]}>CNE123456</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={[styles.infoLabel, { color: theme.colors.primaryText }]}>Filière</Text>
            <Text style={[styles.infoValue, { color: theme.colors.secondaryText }]}>Génie Informatique</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={[styles.infoLabel, { color: theme.colors.primaryText }]}>Niveau</Text>
            <Text style={[styles.infoValue, { color: theme.colors.secondaryText }]}>4ème année</Text>
          </View>
        </View>

        {/* Footer */}
        <Text style={[styles.footer, { color: theme.colors.secondaryText }]}>© EMSI Casablanca</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    width: screenWidth > 380 ? '90%' : '100%', // Responsive width
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
  },
  header: {
    width: '100%',
    padding: 15,
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },
  logo: {
    width: 320,
    height: 70,
    resizeMode: 'contain',
  },
  profileContainer: {
    alignItems: 'center',
    marginVertical: 10,
    position: 'relative',
  },
  avatar: {
    width: 120,
    height: 150,
    borderRadius: 15,
    marginBottom: 7,
  },
  infoGrid: {
    width: '100%',
    paddingHorizontal: 10,
    marginTop: 4,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 6,
  },
  infoLabel: {
    fontSize: 13,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  infoValue: {
    fontSize: 14,
    fontWeight: '500',
  },
  footer: {
    marginTop: 20,
    fontSize: 13,
    fontWeight: '500',
  },
});
