<template>
    <div class="work-flow-node-box">
        <div class="work-flow-node"
             @click="openDrawer = true">
            <div class="node-title"><svg-icon icon-class="user"></svg-icon>&nbsp;&nbsp;审批人</div>
            <div class="node-content">{{data.approve ?? '未设置'}}</div>
            <svg-icon icon-class="close"
                      @click.stop="handleDeleteNode()"
                      class="delete-node" />
        </div>
        <AddNode v-model="data"
                 :index="index"
                 v-model:parentData="parentData" />

        <ApproveDrawer v-model="openDrawer"
                       v-model:data="data" />
    </div>
</template>

<script setup>
import './common.scss'
import { ref } from 'vue'
import AddNode from './add-node.vue'
import { ElMessageBox } from 'element-plus'
import ApproveDrawer from '../drawer/approve-drawer.vue'

// props
const props = defineProps({ index: Number })

// v-model
const parentData = defineModel('parentData', { type: Array })
const data = defineModel({ type: Object })

// emit
const emit = defineEmits(['deleteNode'])

// data
const openDrawer = ref(false)

// 删除节点
const handleDeleteNode = async () => {
    await ElMessageBox.confirm('确认删除该审批节点', '警告')
    emit('deleteNode', props.index)
}
</script>

<style lang="scss" scoped>
.work-flow-node {
    position: relative;
    &::before {
        content: "";
        position: absolute;
        top: -8px;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 0;
        border-top: 8px solid #ddd;
        border-right: 5px solid transparent;
        border-left: 5px solid transparent;
    }
}

.node-title {
    color: #fff;
    background: #ff943e;
}
</style>
