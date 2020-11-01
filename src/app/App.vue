<template>
    <div class="jumbotron">
        <div class="container">
            <nav class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top">
                <div class="container">
                    <div class="banner">
                        <a class="navbar-brand" href="/"><img alt="Logo" src="src/assets/img/SCCI_brand_logo.jpg" title="SCCI Cloud Home"></a>
                    </div>
                    <ul class="nav navbar-nav flex-row float-right">
                      <li class="nav-item">
                        <router-link class="btn btn-light" to="/login">Sign in</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link class="btn btn-outline-primary" to="/register">Sign up</router-link>
                      </li>
                    </ul>
                </div>
            </nav>
            <br><br><br><br><br><br>
            <div class="row">
                <div class="col-sm-6 offset-sm-3">
                    <div v-if="alert.message" :class="`alert ${alert.type}`">{{alert.message}}</div>
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    name: 'app',
    computed: {
        ...mapState({
            alert: state => state.alert
        })
    },
    methods: {
        ...mapActions({
            clearAlert: 'alert/clear' 
        })
    },
    watch: {
        $route (to, from){
            // clear alert on location change
            this.clearAlert();
        }
    } 
};
</script>
