import request from "@/util/request.js"
import {useTokenStore} from "@/stores/token.js"

//文章分类查询
export const articleCategoryService = () => {
    return request.get("/category");
}

//文章分类添加
export const articleCategoryAddService = (category) => {
    return request.post("/category", category);
}

//文章分类修改
export const articleCategoryUpdateService = (category) => {
    return request.put("/category", category);
}

//文章分类删除
export const articleCategoryDeleteService = (id) => {
    return request.delete("/category?id=" + id);
}

//文章列表查询
export const articleListService = (params) => {
    return request.get("/article", {params:params});
}

//文章添加
export const articleAddService = (article) => {
    return request.post("/article", article);
}

//文章修改
export const articleUpdateService = (article) => {
    return request.put("/article", article);
}

//文章删除
export const articleDeleteService = (id) => {
    return request.delete("/article?id=" + id);
}