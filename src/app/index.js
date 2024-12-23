import { StyleSheet, Text, View } from 'react-native';
import articles from '../../assets/data/articles.json';
import Card from '../components/card';

export default function App() {
  const article = articles[1];

  
  return (
    <View style={styles.container}>
      <Card />
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gainsboro',
    padding: 10,
    alignItems: 'center', // Center the entire page content horizontally
    justifyContent: 'flex-start', // Align the content closer to the top
  },
});




 {/*
      <Text style={styles.BeginingStorySwipe}>StorySwipe.</Text>
      <Text style={styles.BeginingStorySwipeSlogan}>Flip Through Pages of Reality</Text>
      
  BeginingStorySwipe:{
    fontSize: 50,
    fontWeight: 'bold',
    fontFamily: 'Anton',
    
  },
  BeginingStorySwipeSlogan: {
    fontSize: 25,
    
    fontFamily: 'Cochin',
  },
      */}


