import React from 'react'
import {Text,ScrollView,View,Image , StyleSheet,TouchableOpacity} from 'react-native'
import Sound from 'react-native-sound'

const soundList = [
  require('./assets/one.wav'),
  require('./assets/two.wav'),
  require('./assets/three.wav'),
  require('./assets/four.wav'),
  require('./assets/five.wav'),
  require('./assets/six.wav'),
  require('./assets/seven.wav'),
  require('./assets/eight.wav'),
  require('./assets/nine.wav'),
  require('./assets/ten.wav'),
];

const Styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#1b262c'
  },
  heading:{
     fontSize:20,
     color:'#ff4301',
     textAlign:"center",
     margin:5
  },
  logo:{
    alignSelf:'center',
    marginTop:15
  },
  gridContainer:{
    flex:1,
    margin:5,
    flexDirection:"row",
    flexWrap:"wrap",
    alignItems:"flex-start",
    justifyContent:"space-around"
  },
  box:{
  height:110,
  alignItems:"center",
  justifyContent:"center",
  width:"45%",
  marginVertical:6,
  backgroundColor:"#0f4c75",
  borderRadius:5,
  shadowColor:"#393e46",
  elevation:5,
  },
  text:{
    fontSize:40,
    color:'#ff4301'
  }
})

const PlaySound = (sound) => {
   const soundVar = new Sound(sound,Sound.MAIN_BUNDLE,(err) => {
     if(err){
       console.log("Not able to play sound")
     }

   })
   setTimeout(()=> {
   soundVar.play()
   },1000)
   soundVar.release()

}
const App = () => {

  return (
    <>
    <ScrollView style={Styles.container}>
       <Image source={require('./assets/logo.png')} style={Styles.logo} />
        <Text style={Styles.heading} > Tap on the Number to hear its pronouncation in spanish  </Text>
       <View style={Styles.gridContainer}>
       
        {soundList.map((sound,index) => (

          <TouchableOpacity  key={sound}  onPress={() => {
            PlaySound(sound)
          } }  style={Styles.box} >
            <Text  style={Styles.text}>{index+1}</Text>
          </TouchableOpacity>

        ))

        }
       
       </View>
    
    </ScrollView>
    </>
  )
}

export default App;