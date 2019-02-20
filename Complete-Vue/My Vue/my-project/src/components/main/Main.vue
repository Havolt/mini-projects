<template>

    <section class="main">
        <div class="cards" >
            <my-card v-for="person in people" :key="person.id" :info="person"></my-card>
        </div>
    </section>

</template>

<script>

import MyCard from './MyCard.vue';

export default {
    data() {
        return {
            people: [
                {
                    name: 'Fred',
                    location: 'Bedrock',
                    age: 44,
                    id: 1
                },
                {
                    name: 'Homer',
                    location: 'Springfield',
                    age: 38,
                    id: 2
                }
            ]
        }
    },
    components: {
        myCard: MyCard
    }
}
</script>

<style >
    
    .main {
        
    }

    .cards {
        padding-top: 2em;
        display: grid;
        grid-template-rows: auto;
        grid-template-columns: repeat(2, 1fr);
        grid-auto-flow: column;
        justify-items: center;
        align-items: center;
    }

</style>