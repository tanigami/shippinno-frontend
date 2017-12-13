import axios from 'axios'

const client = axios.create({
  baseURL: 'https://virtserver.swaggerhub.com/shippinno/shippinno/1.0.0',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  }
})

export default {
  getShipments (cb) {
    client.get('/shipments')
      .then(response => {
        cb(response.data)
      })
  }
}
