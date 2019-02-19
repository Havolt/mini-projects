<template>
    <div class="container">
        <!-- Header -->
        <Header></Header>
        <hr>
        <!-- Main -->
        <MainBody></MainBody>
        <hr>
        <!-- Footer -->
        <Footer></Footer>
    </div>

</template>
    

<script>

    import Header from './Header.vue';
    import MainBody from './MainBody.vue';
    import Footer from './Footer.vue';
    export default {
        data() {
            return {

            }
        },
        components: {
            Header,
            MainBody,
            Footer
        }
    }

</script>



<style>

</style>
