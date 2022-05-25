<script>

import axios from 'axios'

export default {
  name: 'Un.vue',
  data() {
    return {
      dataPovince: {}
    }
  },
  async created() {
    try {
      const datacoba = await axios.get(`http://localhost:3000/products/7/detail`)
      console.log(datacoba, '<<<');

      const dataUn = await axios.get(`https://npd.kemdikbud.go.id/?appid=getun`)

      console.log(dataUn);
      this.dataPovince = dataUn.data.data
      console.log(this.dataPovince);
    } catch(err) {
      console.log(err);
    }
  },
  methods: {
    unKemdikbud() {

    }
  }
}
</script>

<template>
<table class="table table-striped table-hover"
id="tableUn"
>
  <thead>
    <tr>
      <th scope="col">No.</th>
      <th scope="col">Nama wilayah</th>
      <th scope="col">UN SMA IPA</th>
      <th scope="col">UN SMA IPS</th>
      <th scope="col">UN SMA BAHASA</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
</template>

<style>
#tableUn {
  width: 800px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  text-align: center;
}
</style>
