<template>
    <div class="work-flow">
        <WorkFlowInner v-model="data" />
    </div>
</template>

<script setup>
import WorkFlowInner from './workflow-inner.vue'

const data = defineModel({ type: Array, required: true })

</script>

<style lang="scss" scoped>
.work-flow {
    padding: 10px;
}
</style>
