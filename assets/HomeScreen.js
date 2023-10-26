import { useNavigation, useHeaderHeight } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { getAuth, signOut } from "firebase/auth";
import FontAwesome from 'react-native-vector-icons/FontAwesome'; 
const HomeScreen = () => {
  const navigation = useNavigation()
  const headerHeight = useHeaderHeight();
  const auth = getAuth();

  const handleSignOut = async () => {
    await signOut(auth)
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }

  return (
    <View style={[styles.container, { marginTop: headerHeight }]}>
      <Text>Email: {auth.currentUser?.email}</Text>
      <TouchableOpacity
        onPress={handleSignOut}
        style={styles.button}
      >
        <FontAwesome name="sign-out" size={24} color="white" /> {/* Adicione um ícone */}
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#993399',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'center', 
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
    marginLeft: 10, 
  },
});
