import React,{useState} from 'react'
import {Text,View,StyleSheet,TouchableOpacity,StatusBar} from 'react-native'

const styles = StyleSheet.create({
  container : {
    flex : 1,
    alignItems : 'center',
    justifyContent:'center',
  },
  text:{
    fontSize:30,
    backgroundColor:"#BB2CD9",
    paddingVertical:10,
    paddingHorizontal:40,
    color:"#FFFFFF",
    borderRadius:15,
    textTransform:"uppercase"
  },
  reset:{
    fontSize:30,
    backgroundColor:"#BB2CD9",
    paddingVertical:10,
    paddingHorizontal:40,
    color:"#FFFFFF",
    borderRadius:15,
    textTransform:"uppercase",
    marginTop:20
  }
})

const App = () => {

const [random , setRandom] = useState('rgb(32,80,126)')

const changeBg =() => {
  let color = 'rgb('+
    Math.floor(Math.random()*256)+','+
  Math.floor(Math.random()*256)+','+
 Math.floor(Math.random()*256)   +')'
  
  setRandom(color)
}

const resetBg =() => {
  let color = 'rgb(0,0,0)'
  
  setRandom(color)
}

  return(
    <>
   
    <StatusBar backgroundColor={random} />

    <View style={[styles.container,{backgroundColor: random}]}>
    <TouchableOpacity onPress={changeBg}>
            <Text style={styles.text}>Tap Me</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={resetBg}>
            <Text style={styles.reset}>Reset</Text>
            </TouchableOpacity>

            </View>
        </>
  )


}


export default App;
