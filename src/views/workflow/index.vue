<template>
    <div class="workflow-container">
        <WorkFlow v-model="data" />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import WorkFlow from '@/components/WorkFlow/workflow.vue'

// const data = ref([])
const data = ref([
    { type: 'start' },
    {
        type: 'condition-box', children: [
            [{ type: 'condition-node' }],
            [
                { type: 'condition-node' },
                {
                    type: 'condition-box', children: [
                        [{ type: 'condition-node' }],
                        [{ type: 'condition-node' }]
                    ]
                }
            ]
        ]
    },
    { type: 'approve' },
    { type: 'end' }
])
</script>
<style>
.workflow-container {
    width: 100%;
    height: 100%;
}
</style>
