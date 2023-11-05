import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native'
import React, {useRef } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import { Link } from 'expo-router';
import { TextInput } from 'react-native-gesture-handler';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import BottomSheet from './BottomSheet';

const SearchBar = () => (
  <View style={styles.searchContainer}>
    <View style={styles.searchSection}>
      <View style={styles.searchField}>
        <Ionicons style={styles.searchIcon} name='ios-search' size={20} color={Colors.medium} ></Ionicons>
        <TextInput style={styles.input} placeholder='Resturants, groceries, dishes'/>
      </View>
      <Link href={'/(modal)/filter'} asChild>
        <TouchableOpacity style={styles.optionButton}>
          <Ionicons name='options-outline' size={20} color={Colors.primary}></Ionicons>
        </TouchableOpacity>
      </Link>
    </View>
  </View>
)
const CustomHeader = () => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const openModel = () => {
    bottomSheetRef.current?.present();
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <BottomSheet ref={bottomSheetRef}/>
      <View style={styles.container}>
        <TouchableOpacity onPress={openModel}>
          <Image style={styles.bike} source={require('../assets/images/bike.png')} />
        </TouchableOpacity> 

        <TouchableOpacity style={styles.titleContainer} onPress={openModel}>
          <Text style={styles.title}>Delivery . Now</Text>
          <View style={styles.location}>
            <Text style={styles.subtitle}>Pakistan</Text>
            <Ionicons name='chevron-down' size={20} color={Colors.primary}></Ionicons>
          </View>
        </TouchableOpacity>    

         <TouchableOpacity style={styles.profileButton}>
          <Ionicons name='person-outline' size={20} color={Colors.primary }/>
        </TouchableOpacity>       
      </View>
      <SearchBar/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    marginTop: 50,
    flex: 1,
    backgroundColor: '#fff'
  },
  container: {
    height: 60,
    backgroundColor: '#fff',
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20
  },
  bike: {
    width: 40,
    height: 40,
    borderRadius: 20
  },
  titleContainer: {
    marginRight: 110, 
  },
  title: {
    fontSize: 14,
    color: Colors.medium,
  },
  location: {
    flexDirection: 'row', 
    alignItems: 'center'
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  profileButton: {
    backgroundColor: Colors.lightGrey,
    padding: 10,
    borderRadius: 50,
  },
  searchContainer: {
    height: 60,
    backgroundColor: '#fff'
  },
  searchSection: {
    flexDirection: 'row',
    gap: 10,
    flex: 1,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  searchField: {
    flex: 1,
    backgroundColor: Colors.lightGrey,
    borderRadius: 10,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  input: {
    color: Colors.mediumDark
  },
  searchIcon: {
    
  },
  optionButton: {
    backgroundColor: Colors.lightGrey,
    borderRadius: 50,
    padding: 10
  }
});

export default CustomHeader;