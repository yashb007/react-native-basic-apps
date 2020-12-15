import React,{useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  Button
} from 'react-native';
import { RNCamera } from 'react-native-camera'




const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#0A79DF"
  },
  preview:{
    flex:1,
    justifyContent:"space-around",
    alignItems:"center",

  } ,
  capture:{
     flex:0,
     backgroundColor:"#FFF",
     padding:20,
     alignSelf:"center"
  } ,
  camtext:{
    backgroundColor:"#3498DB",
    color:"#FFF",
    marginBottom:10,
    width:"100%",
    textAlign:"center",
    paddingVertical:20,
    fontSize:25
  },
  clicked:{
    width:300,
    height:300,
    borderRadius:150
  }
})


const PendingView = ()=>{
return (
  <View 
  style={{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  }}>
     <Text style={{fontSize:30,color:"red"}}>Loading....</Text>
  </View>
)
}


const App = ()=>{
    const [image,setImage] = useState(null)

    const takePicture = async (camera)=> {
          
        try{
          const options = {quality : 0.9,base64:false}
          const data = await camera.takePictureAsync(options)
          setImage(data.uri)
                  }
        catch(error){
   console.warn(error)
}
    }

  return(
    <>
       <View style={styles.container}>
        
       {image ? (
         <View  style={styles.preview} >
         <Text style={styles.camtext}>Here is your new profile pic</Text>
          <Image style={styles.clicked} source={{uri:image,width:"100%",height:"80%"}} />
          <Button
          title="Click another picture"
          onPress={()=>{
            setImage(null)
          }}></Button>
          </View>
         ) :
         
         (<RNCamera style={styles.preview}
          type={RNCamera.Constants.Type.back}
          captureAudio={false}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title:"Permission to use camera",
            message :"Click on Ok to allow camera",
            buttonNegative:"Cancel",
            buttonPositive:"Ok"
          }}
          androidRecordAudioPermissionOptions={{
            title:"Permission to use audio",
            message :"Click on Ok to allow audio",
            buttonNegative:"Cancel",
            buttonPositive:"Ok"
          }}
        >
        {
          ({camera,status})=>{
              if(status!= 'READY'){
                return (<PendingView />)
              }
              return(
                <View  style={{
                  flex:0,
                  flexDirection:"row",
                  justifyContent:"center"
                }}>
                  <TouchableOpacity style={styles.capture} onPress = {()=> takePicture(camera)}>
                   <Text>Snap</Text>
                  </TouchableOpacity>
                </View>
              )
          }
        }
        </RNCamera>)}

       </View>
       </>
  )
}



export default App;
