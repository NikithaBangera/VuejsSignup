<template>
    <div class="container">
        <form>
            <h3>Forgot Password</h3>

            <div class="form-group">
                <label>Email address</label>
                <input placeholder="Enter your registered Email" onClick="this.placeholder=''" type="email" class="form-control form-control-lg" />
            </div>

            <button type="submit" class="btn btn-dark btn-lg btn-block">Reset password</button>

        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        }
    }
</script>