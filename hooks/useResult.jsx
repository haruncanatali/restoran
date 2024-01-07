import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {

    const [result, setResult] = useState([])

    const searchApi = async(searchTerm) => {
        try{
            console.log('gelen değer', searchTerm)
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'İstanbul'
                }
            })
            setResult(response.data.businesses)
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        searchApi('Toast')
    }, [])

    return [searchApi, result]
}