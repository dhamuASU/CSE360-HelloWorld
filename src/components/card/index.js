import react from 'react';
import { StyleSheet, Text, View } from 'react-native';


const Card = props => {
    const{title, summary, content} = props.story;
return (
    <View style = {styles.pageContainer}>
        <Text style = {styles.topStorySwipe}>StorySwipe.</Text>
                <View style = {styles.articleCoverContainter}>
                <Text style = {styles.titleOfArticle}>{title}</Text>
                <Text style = {styles.sumOfArticle}>Overview: {summary}</Text>
            </View>
    </View>


    );
};
export default Card;

const styles = StyleSheet.create({
  
    topStorySwipe: {
      fontSize    : 40,
      fontWeight  : 'bold',
      fontFamily  : 'Anton',
      marginTop   : 30,         // Add small spacing from the top
      marginBottom: 20,         // Space below the logo
      textAlign   : 'center',   // Center the text
    },
  
    pageContainer: {
      width     : '100%',
      alignItems: 'center',   // Center card and text horizontally
    },
  
    articleCoverContainter: {
      width          : '100%',                    // Slightly reduce the width for better layout
      height         : '80%',                     // Set height to ensure the card takes up a fixed portion of the screen
      backgroundColor: 'white',
      padding        : 20,                        // Reduce padding for better text visibility
      shadowColor    : '#000',
      shadowOffset   : { width: 0, height: 4 },
      shadowOpacity  : 0.3,
      shadowRadius   : 5,
      elevation      : 6,
      borderRadius   : 10,
      justifyContent : 'flex-start',              // Align content to the top
      gap            : 15,                        // Space between elements
    },
    
  
    titleOfArticle: {
      fontSize  : 25,
      fontWeight: 'bold',
      textAlign : 'center',
    },
  
    sumOfArticle: {
      fontSize : 20,
      color    : 'dimgrey',
      textAlign: 'center',
    },
  });
  