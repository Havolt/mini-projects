<template>
    <header id="main-header">
        <nav id="nav">
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/hyrule">Hyrule</router-link>
        </nav>
    </header>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    
    #main-header {
        width: 100%;
        height: 5em;
        border-bottom: 1px solid rgb(85, 41, 126);
        background: rgb(118, 70, 163);
        display: grid;
        align-items: center;
        
    }

    #nav {
        justify-self: right;
        padding-right: 2em;
    }

    #nav a {
        font-size: 2em;
        font-weight: bold;
        color: #d8d8d8;
        text-decoration: none;
        padding-right: 0.6em;
    }

    #nav a.router-link-exact-active {
        color: #7cffc4;
    }

</style>