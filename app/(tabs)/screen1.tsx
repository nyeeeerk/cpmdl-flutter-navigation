import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';


interface MenuOptionProps {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  isDestructive?: boolean; 
}

export default function Profile() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
     
        <View style={styles.header}>
         
          <Image
            source={require('../assets/profile.png')} 
            style={styles.avatar}
          />
          <Text style={styles.name}>Charles Ryan D. Robianes</Text>
          <Text style={styles.email}>charlesrobianes@gmail.com</Text>
          <Text style={styles.bio}>
            Mobile Developer | Esports Athlete | Mangiinom
          </Text>

          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

      
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Projects</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>1.2k</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>450</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
        </View>

    
        <View style={styles.menuWrapper}>
          <MenuOption icon="settings-outline" title="Settings" />
          <MenuOption icon="wallet-outline" title="Billing Details" />
          <MenuOption icon="people-outline" title="User Management" />
          <MenuOption icon="information-circle-outline" title="Information" />
          <MenuOption icon="log-out-outline" title="Logout" isDestructive />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}


const MenuOption = ({ icon, title, isDestructive = false }: MenuOptionProps) => (
  <TouchableOpacity style={styles.menuItem}>
    <View style={styles.menuItemLeft}>
      <View style={[styles.iconContainer, isDestructive && styles.iconContainerDestructive]}>
        <Ionicons name={icon} size={20} color={isDestructive ? '#FF3B30' : '#333'} />
      </View>
      <Text style={[styles.menuItemText, isDestructive && styles.textDestructive]}>
        {title}
      </Text>
    </View>
    <Ionicons name="chevron-forward" size={20} color="#ccc" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  scrollContent: {
    paddingBottom: 20,
  },
  header: {
    alignItems: 'center',
    paddingVertical: 30,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#E3F2FD',
    marginBottom: 15,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  email: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  bio: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    paddingHorizontal: 40,
    marginTop: 10,
    lineHeight: 20,
  },
  editButton: {
    marginTop: 20,
    backgroundColor: '#1E88E5',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 20,
  },
  editButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginTop: 20,
    paddingVertical: 15,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  statLabel: {
    fontSize: 12,
    color: '#888',
    marginTop: 2,
  },
  divider: {
    width: 1,
    height: '100%',
    backgroundColor: '#eee',
  },
  menuWrapper: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  iconContainerDestructive: {
    backgroundColor: '#FFE5E5',
  },
  menuItemText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  textDestructive: {
    color: '#FF3B30',
  },
});