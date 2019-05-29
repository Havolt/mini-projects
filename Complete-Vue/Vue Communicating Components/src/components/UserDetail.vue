<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User name: {{switchName()}}</p>
    </div>
</template>

<script>
    export default {
        props: {
            myName: {
                type: String,
                required: true
            }
        },
        methods: {
            switchName() {
                return this.myName.split("").reverse().join("");
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
