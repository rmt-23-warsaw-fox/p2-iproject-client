<script>
import { mapWritableState, mapActions } from 'pinia'
import { useDataRegister } from '../stores/register'
export default {
    data(){
        return{
            dataemail : '',
            datausername : '',
            datapassword : '',
        }
    },
    methods :{
        ...mapActions(useDataRegister, ['Register']),
        signInClick(){
            this.$router.push('/login')
        },
        registerClick(){
            this.username = this.datausername,
            this.password = this.datapassword,
            this.email = this.dataemail
            this.Register()
        }
    },
    computed:{
        ...mapWritableState(useDataRegister, ['username', 'password', 'email'])
    },

}
</script>

<template>

<section class="vh-50 gradient-custom">
        <div class="container py-0 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div class="card bg-dark text-white" style="border-radius: 1rem;">
                        <div class="card-body p-5 text-center">

                            <div class="mb-md-5 mt-md-4 pb-5">

                                <h2 class="fw-bold mb-2 text-uppercase">REGISTER YOUR ACCOUNT</h2>
                                <p class="text-white-50 mb-5">Please fill this form</p>

                                <div class="form-outline form-white mb-4">
                                    <label class="form-label" for="typeEmailX">Username</label>
                                    <input
                                     v-model="datausername"
                                     type="text" class="form-control form-control-lg" />
                                </div>

                                <div class="form-outline form-white mb-4">
                                    <label class="form-label" for="typeEmailX">Email</label>
                                    <input 
                                    v-model="dataemail"
                                    type="email" class="form-control form-control-lg" />
                                </div>

                                <div class="form-outline form-white mb-4">
                                    <label class="form-label" for="typePasswordX">Password</label>
                                    <input 
                                    v-model="datapassword"
                                    type="password" class="form-control form-control-lg" />
                                </div>

                                <button @click="registerClick" class="btn btn-outline-light btn-lg px-5" type="submit">REGISTER</button>


                            </div>

                            <div>
                                <p class="mb-0">have an account? <a href="" v-on:click.prevent="signInClick" class="text-white-50 fw-bold">Sign In</a>
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style>

</style>