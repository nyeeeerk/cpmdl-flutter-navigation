import React from 'react';
import {
  FlatList,
  Image,
  ImageSourcePropType,
  ListRenderItem,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';


interface Project {
  id: string;
  title: string;
  description: string;
  image: ImageSourcePropType; 
  tags: string[];
}


const projects: Project[] = [
  {
    id: '1',
    title: 'Barberos',
    description: 'A full-featured web booking system for local barbershops',
    image: require('../assets/project1.png'), 
    tags: ['HTML', 'Javascript','PHP'],
  },
  {
    id: '2',
    title: 'DriveAware',
    description: 'A AI powered android application that helps you navigate and guide you in your travels',
    image: require('../assets/project2.jpg'),
    tags: ['React Native', 'Mapbox'],
  },
  {
    id: '3',
    title: 'The Guard',
    description: 'A drowsiness detection app with AI conversational tool.',
    image: require('../assets/project3.jpg'),
    tags: ['Flutter', 'Google ML Kit'],
  },

];

export default function Home() {

  const renderProjectItem: ListRenderItem<Project> = ({ item }) => (
    <TouchableOpacity style={styles.card} activeOpacity={0.8}>
      {}
      <Image source={item.image} style={styles.cardImage} />
      
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardDescription}>{item.description}</Text>
        <View style={styles.tagsContainer}>
          {item.tags.map((tag: string, index: number) => (
            <View key={index} style={styles.tag}>
              <Text style={styles.tagText}>{tag}</Text>
            </View>
          ))}
        </View>
      </View>
    </TouchableOpacity>
  );

  const ListHeader = () => (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>Welcome</Text>
      <Text style={styles.headerSubtitle}>Here are my recent projects.</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={projects}
        renderItem={renderProjectItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={ListHeader}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  listContent: {
    padding: 20,
    paddingBottom: 40,
  },
  headerContainer: {
    marginBottom: 20,
    marginTop: 10,
  },
  headerTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#2e2d2d', 
    textShadowColor: '#4A90E2', 
    textShadowOffset: { width: 0, height: 0 }, 
    textShadowRadius: 10, 
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  card: {
       backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8, 
    shadowColor: '#4A90E2',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.7,
    shadowRadius: 10, 
    elevation: 15, 
  },
  cardImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  cardContent: {
    padding: 16,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 6,
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 12,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    backgroundColor: '#E3F2FD',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    marginRight: 8,
    marginTop: 4,
  },
  tagText: {
    color: '#1E88E5',
    fontSize: 12,
    fontWeight: '600',
  },
});