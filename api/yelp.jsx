import axios from "axios"

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses/',
    headers: {
        Authorization: 'Bearer Bi9u2ivanOu2xAnaoBSSEqlZpi9-OveS-TZ5b9MCqCaoVT9YuzfOTeitx7EPV4pez-c3-UjDA61P5PUidVO9Hh7Lgulxx8cLvSBZYQvtjbmEm6YZmfv30FoWWwqZZXYx',
    }
})