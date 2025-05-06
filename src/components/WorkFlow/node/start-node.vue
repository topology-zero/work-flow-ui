<template>
    <div class="work-flow-node-box">
        <div class="work-flow-node">
            <div class="node-title"><svg-icon icon-class="user"></svg-icon>&nbsp;&nbsp;发起人</div>
            <div class="node-content">所有人</div>
        </div>
        <AddNode v-model="data"
                 :index="index"
                 v-model:parentData="parentData" />
    </div>
</template>

<script setup>
import './common.scss'
import AddNode from './add-node.vue'

// props
defineProps({ index: Number })

// v-model
const parentData = defineModel('parentData', { type: Array })
const data = defineModel('data', { type: Object })
</script>

<style lang="scss" scoped>
.node-title {
    color: #fff;
    background: #576a95;
}
</style>
