import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import yelp from '../api/yelp'

export default function RestoranScreen({route}) {
    const id = route.params.id
    const [restoran, setRestoran] = useState({})

    const getRestoran = async(id) => {
        const response = await yelp.get(`/${id}`)
        setRestoran(response.data)
    }

    useEffect(() => {
        getRestoran(id)
    }, [])
  return (
    <View>
      <Text>{restoran.name}</Text>
      <Text>{restoran.phone}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})