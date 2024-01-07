import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function Detail({item_detail}) {
  return (
    <View style={styles.container}>
      <Image style={styles.img} 
      source={item_detail.image_url ? {uri:item_detail.image_url} : null} />
      <Text>{item_detail.name}</Text>
      <Text>{item_detail.rating}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    img: {
        height: 150,
        width: 300,
        borderRadius: 10,
    },
    container: {
        padding: 10
    }
})