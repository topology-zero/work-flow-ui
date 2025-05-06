<template>
    <div class="work-flow-node-box">
        <div class="condition-box">
            <workflowInner v-for="(v, index) in data.children"
                           :key="v.key"
                           :index="index"
                           @deleteCondition="handleDeleteCondition"
                           v-model="data.children[index]" />
        </div>
        <el-button type="success"
                   bg
                   text
                   class="add-conditon-btn"
                   @click="handleAddCondition()">添加条件</el-button>
        <AddNode v-model="data"
                 :index="index"
                 v-model:parentData="parentData" />
    </div>
</template>

<script setup>
import AddNode from './add-node.vue'
import workflowInner from '../workflow-inner.vue'

// props
const props = defineProps({ index: Number })

// v-model
const parentData = defineModel('parentData', { type: Array })
const data = defineModel({ type: Object })

// emit
const emit = defineEmits(['deleteNode'])

// 添加条件分支
const handleAddCondition = () => {
    data.value.children.push([{ type: 'condition-node' }])
}

// 删除条件分支
const handleDeleteCondition = (index) => {
    data.value.children.splice(index, 1)
    // 如果该条件分支只剩下一种，则删除整个条件节点
    if (data.value.children.length == 1) {
        emit('deleteNode', props.index)
    }
}
</script>

<style lang="scss" scoped>
.condition-box {
    display: flex;
    .process-warp {
        position: relative;
        &::before {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            height: 2px;
            width: 100%;
            z-index: -1;
            background: #ddd;
        }
        &::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 2px;
            z-index: -1;
            background: #ddd;
        }
        &:first-child::before {
            content: "";
            position: absolute;
            left: 50%;
            top: 1px;
            width: 50%;
            transform: translateY(-50%);
            height: 2px;
            z-index: -1;
            background: #ddd;
        }
        &:first-child::after {
            content: "";
            position: absolute;
            bottom: -1px;
            left: 50%;
            width: 50%;
            transform: translateY(-50%);
            height: 2px;
            z-index: -1;
            background: #ddd;
        }

        &:last-child::before {
            content: "";
            position: absolute;
            top: 1px;
            left: 0;
            width: 50%;
            height: 2px;
            transform: translateY(-50%);
            z-index: -1;
            background: #ddd;
        }
        &:last-child::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -1px;
            width: 50%;
            transform: translateY(-50%);
            height: 2px;
            z-index: -1;
            background: #ddd;
        }
    }
}
.add-conditon-btn {
    position: absolute;
    transform: translateY(-16px);
}
</style>
