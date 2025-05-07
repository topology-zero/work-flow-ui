<template>
    <div class="work-flow-node-box">
        <div class="work-flow-node"
             @click="openDrawer = true">
            <div class="node-title"><svg-icon icon-class="copy"></svg-icon>&nbsp;&nbsp;抄送人</div>
            <div class="node-content">{{data.copyUser ?? '未设置'}}</div>
            <svg-icon icon-class="close"
                      @click.stop="handleDeleteNode()"
                      class="delete-node" />
        </div>
        <AddNode v-model="data"
                 :index="index"
                 v-model:parentData="parentData" />

        <CopyDrawer v-model="openDrawer"
                    v-model:data="data" />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import AddNode from './add-node.vue'
import { ElMessageBox } from 'element-plus'
import CopyDrawer from '../drawer/copy-drawer.vue'
import './common.scss'
// props
const props = defineProps({ index: Number })

// v-model
const data = defineModel({ type: Object })
const parentData = defineModel('parentData', { type: Array })

// emit
const emit = defineEmits(['deleteNode'])

// data
const openDrawer = ref(false)

// 删除节点
const handleDeleteNode = async () => {
    await ElMessageBox.confirm('确认删除该抄送节点', '警告')
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
    background: #3296fa;
}
</style>
