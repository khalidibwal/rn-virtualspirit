import React,{useState} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, FlatList } from 'react-native';
import {  Card } from '@rneui/themed';
import {  Button } from '@rneui/base';
import VirtualData from '../API/VirtualData';

export default function CardBox() {
  const [likes, setLikes] = useState(0)
  const [dislikes, setDislikes] = useState(0)
  const [likeActive, setLikeActive] = useState(false)
  const [dislikeActive, setdisLikeActive] = useState(false)

  const DislikeAct = () =>{
    setdisLikeActive(!dislikeActive)
    setDislikes(dislikeActive ? dislikes - 1 : dislikes + 1)
  }
  const LikeAct = () =>{
    setLikeActive(!likeActive)
    setLikes(likeActive ? likes - 1 : likes + 1)
  }

  const handleAllLikes = () =>{
    if(dislikeActive){
      LikeAct();
      DislikeAct();
    }
    LikeAct();
  }
  const AdvLikes = (id) => {
    var data = VirtualData.filter((item)=> item.likesId === id).map((item)=>(item.likesId))
    if(data.toString()){
      if(dislikeActive){
        LikeAct();
        DislikeAct();
      }
      LikeAct();
    }

  }

  const HandleAllDislikes = () =>{
    if(likeActive){
      DislikeAct();
      LikeAct();
    }
    DislikeAct();
  }

  const ResetLike = () =>{
    setLikes(0)
    setDislikes(0)
    setLikeActive(false)
    setdisLikeActive(false)
  }
  return (
    <View style={styles.container}>
        <View style={styles.AllBtn}>
            <Button onPress={()=> handleAllLikes()} containerStyle={styles.BtnContainer}>Like All</Button>
            <Button onPress={()=> ResetLike()} type='outline' containerStyle={styles.BtnContainer}>Reset</Button>
            <Button onPress={()=> HandleAllDislikes()} containerStyle={styles.BtnContainer} color='error'>Dislike All</Button>
        </View>
        <FlatList
        data={VirtualData}
        renderItem={({item})=>(
          <Card containerStyle={styles.cardStyle}>
            <Image style={styles.CardImg} source={{uri:item.uri}}/>
            <View style={styles.BtnStyle}>
                <Button containerStyle={styles.LikeTxt} size="md" type="outline"><Text>{likes}</Text></Button>
                <Button onPress={()=> AdvLikes(item.likesId)} containerStyle={styles.BtnContainer} size="md">Like</Button>
                <Button onPress={()=> HandleAllDislikes()} containerStyle={styles.BtnContainer} color='error' size="md">Dislike</Button>
            </View>
        </Card>
        )}
        keyExtractor={item => item.likesId}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width : '100%',
        marginTop: 55,
        marginBottom : 55,
        borderRadius : 15,
        backgroundColor : '#FFFFFF',
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
    justifyContent:'center',
    borderRadius:15
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