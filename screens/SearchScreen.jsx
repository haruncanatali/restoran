import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import SearchBar from '../components/SearchBar'
import useResult from '../hooks/useResult'
import ResultList from '../components/ResultList'

export default function SearchScreen() {
    const [term, setTerm] = useState('')
    const [searchApi, result] = useResult()
    const filterResultByPrice = (price) => {
        return result.filter((item) => {
            return item.price === price
        })
    }
  return (
    <ScrollView>
        <SearchBar term={term} onTermChange={setTerm} onTermSubmit={async() => await searchApi(term)}/>
        <ResultList title="Ucuz Restoranlar" result={filterResultByPrice("₺")}/>
        <ResultList title="Uygun Restoranlar" result={filterResultByPrice("₺₺")}/>
        <ResultList title="Pahalı Restoranlar" result={filterResultByPrice("₺₺₺")}/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({})