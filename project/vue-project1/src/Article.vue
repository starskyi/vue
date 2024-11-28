<script lang="ts" setup>
import { ref } from "vue"
import type { ComponentSize } from 'element-plus'

//搜索表单
import { reactive } from 'vue'

const formInline = reactive({
    user: '',
    region: '',
    date: '',
})

const onSubmit = function() {
    console.log('submit!')
}

//操作按钮
import {
    Delete,
    Edit,
} from '@element-plus/icons-vue'

//内容
const tableData = [
    {
        title: '文章1',
        category: '军事',
        time: '2016-05-03',
        state: "已发布"
    },
    {
        title: '文章1',
        category: '军事',
        time: '2016-05-03',
        state: "已发布"
    },
    {
        title: '文章1',
        category: '军事',
        time: '2016-05-03',
        state: "已发布"
    },
]

//分页
const currentPage4 = ref(1)
const pageSize4 = ref(5)
const size = ref<ComponentSize>('default')
const background = ref(false)
const disabled = ref(false)
const total = ref(20)

const handleSizeChange = (val: number) => {
    console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
    console.log(`current page: ${val}`)
}
</script>

<template>
    <!--卡片-->
    <el-card >
        <div class="card-header">
            <span>文章管理</span>
            <el-button type="primary" @click="onSubmit">发布文章</el-button>
        </div>

        <div style="margin-top: 20px;">
            <hr>
        </div>

        <!--搜索表单-->
        <el-form :inline="true" :model="formInline" class="demo-form-inline">

            <el-form-item label="文章分类">
                <el-select v-model="formInline.region" placeholder="请选择" clearable>
                    <el-option label="新闻" value="新闻" />
                    <el-option label="科技" value="科技" />
                </el-select>
            </el-form-item>

            <el-form-item label="发布状态">
                <el-select v-model="formInline.region" placeholder="请选择" clearable>
                    <el-option label="已发布" value="已发布" />
                    <el-option label="草稿" value="草稿" />
                </el-select>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="onSubmit">搜索</el-button>
                <el-button type="Default" @click="onSubmit">重置</el-button>
            </el-form-item>

        </el-form>

        <!-- 内容 -->
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="title" label="文章标题" />
            <el-table-column prop="category" label="分类" />
            <el-table-column prop="time" label="发表时间" />
            <el-table-column prop="state" label="状态" />
            <el-table-column label="操作" width="180">
                <el-row>
                    <el-button type="primary" :icon="Edit" circle />
                    <el-button type="danger" :icon="Delete" circle />
                </el-row>
            </el-table-column>
        </el-table>

        <!-- 分页-->
        <el-pagination class="el-p" v-model:current-page="currentPage4" v-model:page-size="pageSize4"
            :page-sizes="[5, 10, 15, 20]" :size="size" :disabled="disabled" :background="background"
            layout="jumper, total, sizes, prev, pager, next" :total="total" @size-change="handleSizeChange"
            @current-change="handleCurrentChange" />leCurrentChange" />
    </el-card>
</template>

<style>
/*卡片样式*/
.card-header {
    justify-content: space-between;
    display: flex;
}

.el-p {
    margin-top: 50px;
    display: flex;
    justify-content: end;
}

/* 表单样式 */
.demo-form-inline .el-input {
    --el-input-width: 220px;
}

.demo-form-inline .el-select {
    --el-select-width: 220px;
}
</style>
  

  