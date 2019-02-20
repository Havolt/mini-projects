<template>
    <header class="my-header">
        <div class="header-logo-con">
            <img class="header-logo" src="../assets/web-dev-logo.jpg" alt="web logo">
        </div>
        <p class="header-title">WebBizz</p>
    </header>
</template>

<script>
export default {
    data(){
        return {

        }
    }
}
</script>

<style >

    .my-header {
        border-bottom: 1px solid rgb(26, 119, 96);
        display: flex;
        background: rgb(33, 197, 156);
        
    }

    .header-logo-con {
        flex: 1 1 auto;
        display: flex;
        align-content: center;
    }

    .header-logo {
        width: 5em;
        height: 5em;
    }
    
    .header-title {
        color: white;
        font-size: 3em;
        flex: 1 1 auto;
        align-self: center;
        text-align: right;
        padding-right: 2em;
    }

    


</style>