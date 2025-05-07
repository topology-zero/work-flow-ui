<template>
    <div class="work-flow-node-box">
        <div class="work-flow-node"
             @click="openDrawer = true">
            <div class="node-title"><svg-icon icon-class="condition" />&nbsp;&nbsp;{{data.title ?? `条件${props.conditionIndex}`}}</div>
            <div class="node-content">{{ data.condition ? `【${data.condition}】为【${data.conditionValue}】时` : '请设置条件'}}</div>
            <svg-icon icon-class="close"
                      @click.stop="handleDeleteCondition()"
                      class="delete-node" />
        </div>
        <AddNode v-model="data"
                 :index="index"
                 v-model:parentData="parentData" />

        <ConditionDrawer v-model="openDrawer"
                         v-model:data="data" />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import AddNode from './add-node.vue'
import { ElMessageBox } from 'element-plus'
import ConditionDrawer from '../drawer/condition-drawer.vue'
import './common.scss'

// props
const props = defineProps({ index: Number, conditionIndex: Number })

// v-model
const data = defineModel({ type: Object })
const parentData = defineModel('parentData', { type: Array })

// emit
const emit = defineEmits(['deleteCondition'])

// data
const openDrawer = ref(false)

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
