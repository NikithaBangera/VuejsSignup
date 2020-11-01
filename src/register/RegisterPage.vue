<template>
    <div class="container-fuild">
        <h2>Create an account</h2>
        <form @submit.prevent="handleSubmit">
            <div class="row">
                <div class="form-group col-sm-6">
                    <label for="firstName">First Name</label>
                    <input type="text" placeholder="First Name" onClick="this.placeholder=''" v-model="user.firstName" v-validate="'required'" name="firstName" class="form-control" :class="{ 'is-invalid': submitted && errors.has('firstName') }" />
                    <div v-if="submitted && errors.has('firstName')" class="invalid-feedback">{{ errors.first('firstName') }}</div>
                </div>
                <div class="form-group col-sm-4">
                    <label for="lastName">Last Name</label>
                    <input type="text" placeholder="Last Name" onClick="this.placeholder=''" v-model="user.lastName" v-validate="'required'" name="lastName" class="form-control" :class="{ 'is-invalid': submitted && errors.has('lastName') }" />
                    <div v-if="submitted && errors.has('lastName')" class="invalid-feedback">{{ errors.first('lastName') }}</div>
                </div>
            </div>
            <div class="row">
            <div class="form-group col-sm-10">
                <label for="username">Username</label>
                <input type="text" placeholder="User Name" onClick="this.placeholder=''" v-model="user.username" v-validate="'required'" name="username" class="form-control" :class="{ 'is-invalid': submitted && errors.has('username') }" />
                <div v-if="submitted && errors.has('username')" class="invalid-feedback">{{ errors.first('username') }}</div>
            </div>
            </div>
            <div class="row">
            <div class="form-group col-sm-10">
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Enter a password (Minimum 6 Characters)" onClick="this.placeholder=''" v-model="user.password" v-validate="{ required: true, min: 6 }" name="password" class="form-control" :class="{ 'is-invalid': submitted && errors.has('password') }" />
                <div v-if="submitted && errors.has('password')" class="invalid-feedback">{{ errors.first('password') }}</div>
            </div>
            </div>
            <div class="row">
            <div class="form-group col-sm-10">
                <button class="btn btn-primary" :disabled="status.registering">Create</button>
                <router-link to="/login" class="btn btn-link">Cancel</router-link>
            </div>
            </div>
        </form>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    data () {
        return {
            user: {
                firstName: '',
                lastName: '',
                username: '',
                password: ''
            },
            submitted: false
        }
    },
    computed: {
        ...mapState('account', ['status'])
    },
    methods: {
        ...mapActions('account', ['register']),
        handleSubmit(e) {
            this.submitted = true;
            this.$validator.validate().then(valid => {
                if (valid) {
                    this.register(this.user);
                }
            });
        }
    }
};
</script>