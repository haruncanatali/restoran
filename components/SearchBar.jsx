import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'

export default function SearchBar({term, onTermChange, onTermSubmit}) {
  return (
    <View style={styles.container}>
      <AntDesign style={styles.icon} name='search1' size={24} color='black' />
      <TextInput style={styles.input} placeholder='Ara' autoCorrect={false} autoCapitalize="none"
      onChange={onTermChange}
      onEndEditing={onTermSubmit}
      value={term}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor : 'lightgray',
        flexDirection: 'row',
        margin: 10,
        height: 50,
        alignItems: 'center',
        borderRadius: 20
    },
    icon: {
        marginHorizontal: 15,
        fontSize: 30
    },
    input: {
        flex: 1,
        fontSize: 18
    }
})