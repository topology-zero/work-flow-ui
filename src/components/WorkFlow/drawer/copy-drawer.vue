<template>
    <el-drawer v-model="open"
               title="设置抄送人">
        <el-select v-model="localData.copyUser"
                   style="width: 100%;">
            <el-option label="张三"
                       value="张三" />
            <el-option label="李四"
                       value="李四" />
            <el-option label="王五"
                       value="王五" />
            <el-option label="赵六"
                       value="王五" />
        </el-select>
        <template #footer>
            <div>
                <el-button @click="open = false">取 消</el-button>
                <el-button type="primary"
                           @click="handleConfirm">确 认</el-button>
            </div>
        </template>
    </el-drawer>
</template>

<script setup>
import { ref, watch } from 'vue'

// v-model
const open = defineModel({ type: Boolean })
const data = defineModel('data', { type: Object })

// data
const localData = ref({})

watch(open, () => {
    if (open.value) {
        localData.value = {}
        Object.assign(localData.value, data.value)
    }
})

// 确认修改
const handleConfirm = () => {
    Object.assign(data.value, localData.value)
    open.value = false
}
</script>

<style lang="scss" scoped>
</style>
