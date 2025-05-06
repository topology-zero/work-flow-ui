<template>
    <div class="work-flow-node-box">
        <div class="work-flow-node">
            <div class="node-title"></div>
            <div class="node-content"> <svg-icon icon-class="end"></svg-icon> 流程结束</div>
        </div>
    </div>
</template>

<script setup>
import './common.scss'
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
    background: #ccc;
}
.node-content {
    color: #ccc;
}
</style>
