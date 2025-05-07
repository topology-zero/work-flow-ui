<template>
    <div class="work-flow-node-box">
        <div class="work-flow-node"
             @click="openDrawer = true">
            <div class="node-title"><svg-icon icon-class="user"></svg-icon>&nbsp;&nbsp;发起人</div>
            <div class="node-content">{{data.applyUser ?? '未设置'}}</div>
        </div>
        <AddNode v-model="data"
                 :index="index"
                 v-model:parentData="parentData" />

        <StartDrawer v-model="openDrawer"
                     v-model:data="data" />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import AddNode from './add-node.vue'
import StartDrawer from '../drawer/start-drawer.vue'
import './common.scss'

// props
defineProps({ index: Number })

// v-model
const data = defineModel({ type: Object })
const parentData = defineModel('parentData', { type: Array })

// data
const openDrawer = ref(false)
</script>

<style lang="scss" scoped>
.node-title {
    color: #fff;
    background: #576a95;
}
</style>
