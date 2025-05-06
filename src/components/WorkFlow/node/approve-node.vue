<template>
    <div class="work-flow-node-box">
        <div class="work-flow-node">
            <div class="node-title"><svg-icon icon-class="user"></svg-icon>&nbsp;&nbsp;审批人</div>
            <div class="node-content">所有人</div>
            <svg-icon icon-class="close"
                      @click="handleDeleteNode()"
                      class="delete-node" />
        </div>
        <AddNode v-model="data"
                 :index="index"
                 v-model:parentData="parentData" />
    </div>
</template>

<script setup>
import './common.scss'
import AddNode from './add-node.vue'
import { ElMessageBox } from 'element-plus'

// props
const props = defineProps({ index: Number })

// v-model
const parentData = defineModel('parentData', { type: Array })
const data = defineModel('data', { type: Object })

// emit
const emit = defineEmits(['deleteNode'])

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
