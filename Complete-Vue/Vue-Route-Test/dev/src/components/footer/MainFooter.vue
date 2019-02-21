<template>
    <footer class="main-footer">
        <div>&copy; 2019 Mark Fz</div>
        <div class="main-footer__dummy-links">
            <ul >
                <li class="main-footer__dummy-links__item" v-for="item in links" :key="item"><a href="#">{{item}}</a></li>
                
            </ul>
        </div>
        <div class="foot-logo">&diams;</div>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            links: ['Home', 'About', 'Contact', 'Secret']
        }
    }
}
</script>


<style scoped>

    .main-footer {
        height: 5em;
        display: flex;
        background: rgb(233, 233, 233);
        border-top: rgb(207, 207, 207) 1px solid;
    }

    .main-footer > * {
        flex: 1 1 auto;
    }

    .main-footer__dummy-links > ul {
        list-style: none;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }

    .main-footer__dummy-links__item {
        font-size: 1.6em;
    }

    .main-footer__dummy-links__item > a {
        color: black;
        text-decoration: none;
    }

    .main-footer__dummy-links__item:not(:nth-last-child(1)){
        margin-right: 1em;

    }

    .foot-logo {
        padding-right: 1em;
        font-size: 4.2em;
        text-align: right;
        
    }

    

    
</style>