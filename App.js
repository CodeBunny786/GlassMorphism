/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {

  StyleSheet,
  Text,
  ImageBackground,
  useColorScheme,
  View,
} from 'react-native';


import {BlurView} from '@react-native-community/blur';
import LinearGradient from 'react-native-linear-gradient';
const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
 
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor:'grey'
  };

  return (

         <ImageBackground  style={{backgroundColor:'white',flexGrow:1,justifyContent:'center'}} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRkETvWa6dBuO9BqTBnOVjQWx5DnYNuH6Rw-mxzeGHKX5_YjBKorxQckzXezFdxX4sUnA&usqp=CAU'}}>

       <BlurView
       
       style={{
        width:350,
        height:200,
        alignSelf:'center',
        borderRadius:20,
        borderWidth:.1

       }}
       blurType="light"
       blurAmount={20}
       >

{/* <LinearGradient 
      colors={['rgba(0,0,0,0,.9)', 'rgba(0,0,0,0,.1)']} 
      start={{ x: 0, y: 1}} 
      end={{ x: 1, y: 1 }}
      useAngle
      angle={110}
      style={{
      height:'100%',
      width:'100%',
}}

> */}
    <Text style={{textAlign:'center',color:'#fff',marginTop:10,fontSize:22}} >Mr Chips </Text>
    <Text style={{textAlign:'center',color:'#fff',marginTop:40,fontSize:22}} >6767676 676767677676 676767 </Text>

<View style={{
      flexDirection:'row',
      marginHorizontal:20,
      alignItems:'center',
      justifyContent:'space-between',
      
}} >
 <Text style={{textAlign:'center',color:'#fff',marginTop:40,fontSize:22}} >12/24 </Text>
    <Text style={{textAlign:'center',color:'#fff',marginTop:40,fontSize:22,color:'blue'}} >VISA </Text>

  </View>

  {/* </LinearGradient> */}
       </BlurView>
       
      </ImageBackground>

 
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  contentContainer: {
flex:1,
  },
  cardContainer: {
    width: 350,
    height: 200,
    marginTop:300,
    alignSelf:'center',
     borderRadius: 20,
   
    borderWidth: .1,
    // backgroundColor:'white',
 
  },
  card: {
    height: '100%',
    width: '100%',
    // backgroundColor:'white',
    // borderRadius: 20,
    // borderWidth: 1,
  },
});

export default App;
