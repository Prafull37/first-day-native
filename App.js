import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView} from 'react-native';
import ProfileSummary from "./src/components/ProfileSummary";
import Header from "./src/components/Header"

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <ProfileSummary/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    marginTop:30,
    flex:1,
  },
});
