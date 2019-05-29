<template>
    <div>
        <h2>Server Status: {{status}}</h2>
        <hr>
        <button @click="changeStatus">Change Status</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            status : 'Critical'
        }
    },
    methods: {
        changeStatus() {
            this.status = 'Normal';
        }
    }
}
</script>