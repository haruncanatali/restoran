import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Detail from './Detail'
import { useNavigation } from '@react-navigation/native'

export default function ResultList({title, result}) {
    const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
        data={result}
        renderItem={({item}) => {
            return (
                <TouchableOpacity onPress={() =>  navigation.navigate("Restoran",{id:item.id})}>
                    <Detail item_detail={item}/>
                </TouchableOpacity>
            );
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        marginLeft: 15
    }
})