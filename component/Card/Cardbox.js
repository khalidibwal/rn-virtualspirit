import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import {  Card } from '@rneui/themed';
import {  Button } from '@rneui/base';

export default function CardBox() {
  return (
    <ScrollView style={styles.container}>
        <View style={styles.AllBtn}>
            <Button containerStyle={styles.BtnContainer}>Like All</Button>
            <Button type='outline' containerStyle={styles.BtnContainer}>Reset</Button>
            <Button containerStyle={styles.BtnContainer} color='error'>Dislike All</Button>
        </View>
        <Card containerStyle={styles.cardStyle}>
            <Image style={styles.CardImg} source={{uri:"https://avatars0.githubusercontent.com/u/32242596?s=460&u=1ea285743fc4b083f95d6ee0be2e7bb8dcfc676e&v=4"}}/>
            <View style={styles.BtnStyle}>
                <Button containerStyle={styles.LikeTxt} type="outline">100</Button>
                <Button containerStyle={styles.BtnContainer} size="md">Like</Button>
                <Button containerStyle={styles.BtnContainer} color='error' size="md">Dislike</Button>
            </View>
        </Card>
        <Card containerStyle={styles.cardStyle}>
            <Image style={styles.CardImg} source={{uri:"https://avatars0.githubusercontent.com/u/32242596?s=460&u=1ea285743fc4b083f95d6ee0be2e7bb8dcfc676e&v=4"}}/>
            <View style={styles.BtnStyle}>
                <Button containerStyle={styles.LikeTxt} type="outline">100</Button>
                <Button containerStyle={styles.BtnContainer} size="md">Like</Button>
                <Button containerStyle={styles.BtnContainer} color='error' size="md">Dislike</Button>
            </View>
        </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width : '100%',
        height : 200,
        marginTop: 55,
        marginBottom : 15,
        borderRadius : 15,
        backgroundColor : '#FFFFFF',
        overflow : 'hidden'
  },
  cardStyle:{
      borderRadius:15
  },
  CardImg:{
    width : '100%',
    height : 200,
    resizeMode: 'contain'
  },
  BtnStyle:{
    flexDirection: 'row',
  },
  BtnContainer:{
    padding:5,
    justifyContent:'flex-end',
    borderRadius:5
  },
  LikeTxt:{
      padding:5,
      justifyContent:'flex-start'
  },
  AllBtn:{
      flexDirection:'row',
      justifyContent:'center'
  }
});
