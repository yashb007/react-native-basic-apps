
import React,{useState} from 'react';
import { View, Text,Image,TouchableOpacity, StatusBar , StyleSheet } from 'react-native';

import DiceOne from './assets/dice1.png'
import DiceTwo from './assets/dice2.png'
import DiceThree from './assets/dice3.png'
import DiceFour from './assets/dice4.png'
import DiceFive from './assets/dice5.png'
import DiceSix from './assets/dice6.png'

const styles = StyleSheet.create({
  container :{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#222831"
  },
  image:{
    height:200,
    width:200
  },
  button:{
    fontSize:25,
    marginTop:40,
    color:"#F2A365",
    paddingHorizontal:40,
    paddingVertical:10,
    borderColor:"#30475E",
    borderRadius:5,
    borderWidth:3,
    fontWeight:"bold"
  }
})

const App  =() => {

const [uri1,setUri1] = useState(DiceOne)
const [uri2,setUri2] = useState(DiceFour)

const play = () => {
let randomNmber1 = Math.floor((Math.random()*6))+1
//let randomNmber2 = Math.floor((Math.random()*6))+1
  let uri



  if(randomNmber1==1){
    uri=DiceOne
  }
  
 else if(randomNmber1==2){
    uri=DiceTwo
  }
  else if(randomNmber1==3){
    uri=DiceThree
  }
  else if(randomNmber1==4){
    uri=DiceFour
  }
  else if(randomNmber1==5){
    uri=DiceFive
  }
  else if(randomNmber1==6){
    uri=DiceSix
  }

  setUri1(uri)
  
//   if(randomNmber2==1){
//     uri=DiceOne
//   }
  
//  else if(randomNmber2==2){
//     uri=DiceTwo
//   }
//   else if(randomNmber2==3){
//     uri=DiceThree
//   }
//   else if(randomNmber2==4){
//     uri=DiceFour
//   }
//   else if(randomNmber2==5){
//     uri=DiceFive
//   }
//   else if(randomNmber2==6){
//     uri=DiceSix
//   }

//   setUri2(uri)
}

 

  return (
    <>
    <View  style ={styles.container} >
    
    <TouchableOpacity onPress={play}>
    <Image source={uri1} style ={styles.image} />
    </TouchableOpacity>
    </View>
    </>
  );
};

export default App;
