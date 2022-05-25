<script>
import { mapActions, mapWritableState } from 'pinia'
import { useDataLogin } from '../stores/login'
export default{
    data(){
        return{
            dataemail : '',
            datapassword : ''
        }
    },
    computed :{
        ...mapWritableState(useDataLogin , ['email', 'password'])
    },
    methods :{
        ...mapActions(useDataLogin, ['Login']),
        clickLogin(){
            this.email = this.dataemail
            this.password = this.datapassword
            this.Login()
        }
    }
}
</script>

<template>
 <div class="login-form container w-50 shadow mt-4 p-4 rounded">
      <form>
        <center>
          <h1>WELCOME TO THE UNIVERSE SACTUMNEWS</h1><br><br>
          <img class="w-73" src="../assets/ini.png" alt="" />
        </center>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input v-model="dataemail" type="email" class="form-control" id="email" aria-describedby="emailHelp" />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input v-model="datapassword" type="password" class="form-control" id="password" />
        </div>
        <button @click.prevent="clickLogin" class="btn btn-dark">Submit</button>
      </form>
    </div>
</template>

<script>

</script>