<template>
    <div class="row">

            <!-- Server List -->
            <ServerList></ServerList>

            <!-- Server Details -->
            <ServerDetails></ServerDetails>


        </div>
</template>

<script>
    import ServerList from './ServerList.vue';
    import ServerDetails from './ServerDetails.vue';
    export default {
        data() {
            return {

            }
        },
        components: {
            ServerList,
            ServerDetails
        }
    }
</script>