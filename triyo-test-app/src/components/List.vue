<template>
  <div style="display:flex; flex-direction:column; justify-content:center; align-items:center;">
    <h1 style="color: #007965;">{{ msg }}</h1>
    <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; border:2px solid #efefef; width:50%; padding:20px;">
      <div v-for="(customer, index) in customers" :key="index">
        <p><span style="color: #007965; font-weight:600;">Nome:</span> {{customer.name}}</p>
        <p><span style="color: #007965; font-weight:600;">Endereço:</span> {{customer.address}}</p>
        <p><span style="color: #007965; font-weight:600;">Telefone:</span> {{customer.phone}}</p>
        <hr/>
      </div>
      <p style="color: #007965; font-weight:600;">Dependentes:</p>
      <div v-for="(dependent, index) in dependents" :key="index">
        <p><span style="color: #007965; font-weight:600;">{{dependent.type}}: </span>{{dependent.name}}, {{dependent.age}} anos.</p>
      </div>
    </div>
  </div>
</template>

<script>
import Customers from '../services/customers'

export default {
  name: 'List',
  data(){
    return{
      customers: [],
      dependents: []
    }
  },
  props: {
    msg: String
  },
  mounted(){
    Customers.index().then(res=>{
      this.customers = res.data.data
      this.dependents = res.data.data[0].dependents
    })
  }
}
</script>

