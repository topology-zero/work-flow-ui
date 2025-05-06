<template>
    <div class="work-flow-node-box">
        <div class="work-flow-node">
            <div class="node-title"><svg-icon icon-class="condition" />&nbsp;&nbsp;条件{{props.conditionIndex}}</div>
            <div class="node-content">请设置条件</div>
            <svg-icon icon-class="close"
                      @click="handleDeleteCondition()"
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
const props = defineProps({ index: Number, conditionIndex: Number })

// v-model
const parentData = defineModel('parentData', { type: Array })
const data = defineModel('data', { type: Object })

// emit
const emit = defineEmits(['deleteCondition'])

// 删除条件分支
const handleDeleteCondition = async () => {
    await ElMessageBox.confirm('确认删除该条件分支,该分支下的所有节点将会被删除', '警告')
    emit('deleteCondition', props.conditionIndex)
}
</script>

<style lang="scss" scoped>
.work-flow-node-box {
    padding: 30px 50px 0 50px;
    .work-flow-node::before {
        content: "";
        position: absolute;
        width: 2px;
        left: 50%;
        transform: translateX(-50%);
        z-index: -1;
        top: 0px;
        background: #ddd;
        height: 100%;
    }
}
.node-title {
    color: #15bc83;
    border-bottom: 1px solid #eee;
    background-color: #fff;
}
</style>
