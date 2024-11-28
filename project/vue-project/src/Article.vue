<script setup>
    import axios from "axios";
    import {ref} from "vue";
    import {getArticles, searchArticleByConditions} from "@/api/article.js"


    const articleList = ref([]);

    // axios.get("http://localhost:8080/article/getAll")
    // .then(result=>{
    //     articleList.value = result.data;
    // }).catch(err=>{
    //     console.log(err);
    // });

    //获取所有文章
    const getAllarticle = async function(){
        articleList.value = await getArticles();
    };
    
    getAllarticle();

    const searchConditions = ref({
        category:"",
        state:""
    });

    // const search = function(){
    //     axios.get("http://localhost:8080/article/search", {params:{...searchConditions.value}})
    //     .then(result=>{
    //         articleList.value = result.data;
    //     })
    //     .catch((err)=>{
    //         console.log(err);
    //     })
    // }
    
    //根据条件获取文章
    const search = async function(){
            articleList.value = await searchArticleByConditions({...searchConditions.value});
    }
    


</script>

<template>
    <div>

        文章分类: <input type="text" v-model="searchConditions.category">

        发布状态: <input type="text" v-model="searchConditions.state">

        <button @click="search">搜索</button>

        <br />
        <br />
        <table border="1 solid" colspa="0" cellspacing="0">
            <tr>
                <th>文章标题</th>
                <th>分类</th>
                <th>发表时间</th>
                <th>状态</th>
                <th>操作</th>
            </tr>
            <tr v-for="(article, index) in articleList">
                <td>{{article.title}}</td>
                <td>{{article.category}}</td>
                <td>{{article.time}}</td>
                <td>{{article.state}}</td>
                <td>
                    <button>编辑</button>
                    <button>删除</button>
                </td>
            </tr>
            <!-- <tr>
                <td>标题1</td>
                <td>分类1</td>
                <td>2000-01-01</td>
                <td>已发布</td>
                <td>
                    <button>编辑</button>
                    <button>删除</button>
                </td>
            </tr>
            <tr>
                <td>标题2</td>
                <td>分类2</td>
                <td>2000-01-01</td>
                <td>已发布</td>
                <td>
                    <button>编辑</button>
                    <button>删除</button>
                </td>
            </tr>
            <tr>
                <td>标题3</td>
                <td>分类3</td>
                <td>2000-01-01</td>
                <td>已发布</td>
                <td>
                    <button>编辑</button>
                    <button>删除</button>
                </td>
            </tr> -->
        </table>
    </div>
</template>

