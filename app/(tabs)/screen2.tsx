import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

export default function Settings() {
  const router = useRouter();
  
 
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isNotifyOn, setIsNotifyOn] = useState(true);

 
  const renderSectionHeader = (title: string) => (
    <Text style={styles.sectionHeader}>{title}</Text>
  );

  
  const renderSettingItem = (
    label: string, 
    iconName: keyof typeof Ionicons.glyphMap, 
    isSwitch: boolean = false, 
    value?: boolean, 
    onToggle?: (val: boolean) => void
  ) => (
    <View style={styles.itemContainer}>
      <View style={styles.itemLeft}>
        <View style={[styles.iconContainer, { backgroundColor: isSwitch ? '#E3F2FD' : '#F5F5F5' }]}>
          <Ionicons name={iconName} size={20} color="#333" />
        </View>
        <Text style={styles.itemText}>{label}</Text>
      </View>
      
      {isSwitch ? (
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={value ? "#1E88E5" : "#f4f3f4"}
          onValueChange={onToggle}
          value={value}
        />
      ) : (
        <Ionicons name="chevron-forward" size={20} color="#ccc" />
      )}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.pageTitle}>Settings</Text>

        {}
        {renderSectionHeader("Preferences")}
        <View style={styles.sectionBlock}>
          {renderSettingItem("Dark Mode", "moon-outline", true, isDarkMode, setIsDarkMode)}
          <View style={styles.separator} />
          {renderSettingItem("Notifications", "notifications-outline", true, isNotifyOn, setIsNotifyOn)}
        </View>

        {}
        {renderSectionHeader("Account")}
        <View style={styles.sectionBlock}>
          <TouchableOpacity onPress={() => Alert.alert("Edit Profile Clicked")}>
            {renderSettingItem("Edit Profile", "person-outline")}
          </TouchableOpacity>
          <View style={styles.separator} />
          <TouchableOpacity onPress={() => Alert.alert("Security Clicked")}>
            {renderSettingItem("Security & Password", "lock-closed-outline")}
          </TouchableOpacity>
        </View>

        {}
        {renderSectionHeader("Support")}
        <View style={styles.sectionBlock}>
          <TouchableOpacity onPress={() => Alert.alert("About Clicked")}>
            {renderSettingItem("About App", "information-circle-outline")}
          </TouchableOpacity>
          <View style={styles.separator} />
          <TouchableOpacity onPress={() => Alert.alert("Privacy Clicked")}>
            {renderSettingItem("Privacy Policy", "shield-checkmark-outline")}
          </TouchableOpacity>
        </View>
      </ScrollView>

      {}
      <TouchableOpacity 
        style={styles.fab} 
        onPress={() => router.navigate('/(tabs)/screen1')}
        activeOpacity={0.8}
      >
        <Ionicons name="add" size={30} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA', 
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 100, 
  },
  pageTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: '#333',
    marginBottom: 20,
    marginTop: 10,
  },
  sectionHeader: {
    fontSize: 14,
    fontWeight: '600',
    color: '#888',
    marginBottom: 10,
    marginTop: 10,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  sectionBlock: {
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  itemText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  separator: {
    height: 1,
    backgroundColor: '#F0F0F0',
    marginLeft: 60, 
  },
  
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 30,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#1E88E5',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#1E88E5',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
});