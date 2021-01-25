import {api} from '../services/api'

export default{
 index:async()=> await api.get('/clientes')
}