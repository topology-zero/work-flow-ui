<template>
    <div class="process-warp">
        <component :is="v.cp"
                   v-for="(v, index) in data"
                   v-model="data[index]"
                   :index="index"
                   :condition-index="props.index"
                   v-model:parentData="data"
                   @deleteCondition="handleDeleteCondition"
                   @deleteNode="handleDeleteNode"
                   :key="v.key" />
    </div>
</template>

<script setup>
import { watch, onMounted, markRaw } from 'vue'
import StartNode from './node/start-node.vue'
import EndNode from './node/end-node.vue'
import ApproveNode from './node/approve-node.vue'
import CopyNode from './node/copy-node.vue'
import ConditionBox from './node/condition-box.vue'
import ConditionNode from './node/condition-node.vue'
import { v4 as uuidv4 } from 'uuid'

// props
const props = defineProps({ index: Number })

// v-model
const data = defineModel({
    type: Array,
    required: true
})

// emit
const emit = defineEmits(['deleteCondition'])

// 根据 type 不同，设置不同的 components
const setCp = (type) => {
    switch (type) {
        case 'start':
            return markRaw(StartNode)
        case 'end':
            return markRaw(EndNode)
        case 'approve':
            return markRaw(ApproveNode)
        case 'copy':
            return markRaw(CopyNode)
        case 'condition-box':
            return markRaw(ConditionBox)
        case 'condition-node':
            return markRaw(ConditionNode)
    }
}

// 在 watch 中修改 data 数据不进行监听，修改完成再继续监听
let stop
const startWatching = () => {
    stop = watch(data, () => {
        if (stop) {
            stop()
        }
        data.value.map(v => {
            v.cp = setCp(v.type)
            if (!v.key) {
                v.key = uuidv4()
            }
        })
        startWatching()
    }, { deep: true })
}
startWatching()

// 当传过来为空和需要回显的时候，进行数据处理
onMounted(() => {
    if (data.value.length == 0) {
        data.value = [
            { type: 'start' },
            { type: 'end' }
        ]
        return
    }
    data.value.map(v => {
        if (!v.key) {
            v.key = uuidv4()
        }
    })
})

// 删除条件分支，需要到 condition-box 中进行处理
const handleDeleteCondition = () => {
    emit('deleteCondition', props.conditionIndex)
}

// 删除节点
const handleDeleteNode = (index) => {
    data.value.splice(index, 1)
}
</script>

<style lang="scss" scoped>
.process-warp {
    display: flex;
    justify-content: center;
    flex-direction: column;
}
</style>
