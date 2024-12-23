import { StyleSheet, Text, View } from 'react-native';
import articles from '../../assets/data/articles.json';
import Card from '../components/card';
import article from '../../assets/data/articles.json';



const App = () => {
  return (
    <View style = {styles.container}>
      <Card story={article[1]}/>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex           : 1,
    backgroundColor: 'ghostwhite',
    padding        : 10,
    alignItems     : 'center',       // Center the entire page content horizontally
    justifyContent : 'flex-start',   // Align the content closer to the top
  },
});

export default App;