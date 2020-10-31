<template>
    <div class="jumbotron">
        <div class="container">
            <nav class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top">
                <div class="container">
                    <h1 class="navbar-brand float-left">SCCI Cloud storage</h1>
                    <ul class="nav navbar-nav flex-row float-right">
                      <li class="nav-item">
                        <router-link class="nav-link pr-3" to="/login">Sign in</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link class="btn btn-outline-primary" to="/register">Sign up</router-link>
                      </li>
                    </ul>
                </div>
            </nav>
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