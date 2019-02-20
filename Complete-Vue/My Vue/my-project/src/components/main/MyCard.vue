<template>
    <div class="my-card">
        <h2>{{info.name}}</h2>
        <p>Location: {{info.location}}</p>
        <p>Age: {{info.age}}</p>
    </div>
</template>

<script>
export default {
    props: {
        info: Object
    }
}
</script>

<style>

    .my-card {
        display: block;
        box-sizing: border-box;
        width: 40em;
        border: 2px solid rgb(177, 175, 175);
        box-shadow: 0 2px 2px rgba(5, 5, 5, 0.15);
        border-radius: 3px;
    }

    .my-card > * {
        font-size: 1.6em;
        text-indent: 2em;
        padding-bottom: 1em;
    }

    .my-card > h2 {
        text-indent: 0;
        font-size: 2.4em;
        text-align: center;
    }

    


</style>