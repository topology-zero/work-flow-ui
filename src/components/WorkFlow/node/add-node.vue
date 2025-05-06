<template>
    <div class="add-node">
        <el-popover placement="right"
                    width="320px">
            <template #reference>
                <el-button type="success"
                           :icon="Plus"
                           circle />
            </template>
            <div class="add-item">
                <el-button type="warning"
                           @click="handleAddApproveNode"
                           text
                           bg><svg-icon icon-class="user"></svg-icon>&nbsp;&nbsp;审批</el-button>
                <el-button type="primary"
                           @click="handleAddCopyNode"
                           text
                           bg><svg-icon icon-class="copy"></svg-icon>&nbsp;&nbsp;抄送</el-button>
                <el-button type="success"
                           @click="handleAddConditionNode"
                           text
                           bg><svg-icon icon-class="condition"></svg-icon>&nbsp;&nbsp;条件分支</el-button>
            </div>
        </el-popover>
    </div>
</template>

<script setup>
import './common.scss'
import { Plus } from '@element-plus/icons-vue'

// emit
const emit = defineEmits(['addApproveNode', 'addCopyNode', 'addConditionNode'])

// props
const props = defineProps({ index: Number })

// v-model
const parentData = defineModel('parentData', { type: Array })
const data = defineModel('data', { type: Object })

// 添加审批节点
const handleAddApproveNode = () => {
    parentData.value.splice(props.index + 1, 0, { type: 'approve' })
    emit('addApproveNode', parentData.value, data.value, props.index)
}

// 添加抄送节点
const handleAddCopyNode = () => {
    parentData.value.splice(props.index + 1, 0, { type: 'copy' })
    emit('addCopyNode', parentData.value, data.value, props.index)
}

// 添加抄送节点
const handleAddConditionNode = () => {
    parentData.value.splice(props.index + 1, 0, {
        type: 'condition-box',
        children: []
    })
    parentData.value[props.index + 1].children.push([{ type: 'condition-node' }], [{ type: 'condition-node' }])
    emit('addConditionNode', parentData.value, data.value, props.index)
}
</script>

<style lang="scss" scoped>
.add-node {
    position: relative;
    width: 220px;
    height: 72px;
    display: flex;
    justify-content: center;
    align-items: center;

    &::before {
        content: "";
        position: absolute;
        width: 2px;
        left: 50%;
        transform: translateX(-50%);
        z-index: -1;
        top: 0;
        background: #ddd;
        height: 100%;
    }
}

.add-item {
    display: flex;
}
</style>
