<template>
    <div>
        <zst-button theme="primary">primary</zst-button>
        <zst-button theme="success">success</zst-button>
        <zst-button theme="danger">danger</zst-button>
        <zst-button theme="info">info</zst-button>
        <zst-button theme="warning">warning</zst-button>
    </div>
</template>
<script lang="ts">
import ZstButton from "../components/Button.vue";
import { defineComponent } from "vue"
export default defineComponent({
    components :{
        ZstButton
    }
})
</script>