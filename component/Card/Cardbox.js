import React,{useState} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, FlatList } from 'react-native';
import {  Card } from '@rneui/themed';
import {  Button, Switch } from '@rneui/base';
import Icon from 'react-native-vector-icons/FontAwesome';
import VirtualData from '../API/VirtualData';

export default function CardBox() {
  const [data, setData] = useState(VirtualData);
  const [likes, setLikes] = useState(0)
  const [dislikes, setDislikes] = useState(0)
  const [likeActive, setLikeActive] = useState(false)
  const [dislikeActive, setdisLikeActive] = useState(false)

  const SingleLikes = (props) => {
    let count = props.countLike + 1
    const newState = data.map(obj => {
      if (obj.likesId === props.likesId) {
        return {...obj, countLike: count};
      }
      return obj;
    });

    setData(newState);
  };

  const SingleDislike = (props) => {
    let count = props.countLike - 1
    const newState = data.map(obj => {
      if (obj.likesId === props.likesId) {
        return {...obj, countLike: count};
      }
      return obj;
    });

    setData(newState);
  };
  
  const AllLikes = () => {
    const newState = data.map(obj => {
        return {...obj, countLike: obj.countLike + 1};

    });

    setData(newState);
  }

  const AllDislikes = () => {
    const newState = data.map(obj => {
        return {...obj, countLike: obj.countLike - 1};

    });

    setData(newState);
  }

  const Reset = () =>{
    const newState = data.map(obj => {
      return {...obj, countLike: 0};

  });

  setData(newState);
  }


  return (
    <View style={styles.container}>
        <View style={styles.AllBtn}>
            <Button onPress={()=> AllLikes()} containerStyle={styles.AllBtnContainer}>Like All</Button>
            <Button onPress={()=> Reset()} type='outline' containerStyle={styles.AllBtnContainer}>Reset</Button>
            <Button onPress={()=> AllDislikes()} containerStyle={styles.AllBtnContainer} color='error'>Dislike All</Button>
        </View>
        <FlatList
        data={data}
        renderItem={({item})=>(
          <Card containerStyle={styles.cardStyle}>
            <Image style={styles.CardImg} source={{uri:item.uri}}/>
            <View style={styles.BtnStyle}>
                <Button containerStyle={styles.LikeTxt} size="md" type="outline"><Text>{item.countLike}</Text></Button>
                <Button onPress={()=> SingleLikes(item)} value={"Add"} containerStyle={styles.BtnContainer} size="md"><Icon name="thumbs-up" size={30} color="#900" />Like</Button>
                <Button onPress={()=> SingleDislike(item)} value={"Min"} containerStyle={styles.BtnContainer} color='error' size="md"><Icon name="thumbs-down" size={30} color="#900" />Dislike</Button>
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
  AllBtnContainer:{
    padding:10,
    justifyContent:'center'
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