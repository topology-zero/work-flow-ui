<template>
    <el-drawer v-model="open"
               title="设置分支条件">
        <el-form :model="localData"
                 label-width="auto">
            <el-form-item label="条件命名">
                <el-input v-model="localData.title" />
            </el-form-item>
            <!-- <el-form-item label="条件设置">
                <el-button type="success"
                           size="small">添加条件</el-button>
            </el-form-item> -->
            <el-form-item label="条件设置">
                <el-col :span="11">
                    <el-select v-model="localData.condition"
                               style="width: 100%;">
                        <el-option label="申请人"
                                   value="申请人" />
                    </el-select>
                </el-col>
                <el-col :span="2"
                        style="text-align: center;">=</el-col>
                <el-col :span="11">
                    <el-select v-model="localData.conditionValue"
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
                </el-col>
            </el-form-item>
        </el-form>

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
