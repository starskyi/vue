
import requst from "@/util/request.js"

//获取所有文章函数
export function getArticles(){
    return requst.get("http://localhost:8080/article/getAll");
}

//根据条件获取文章
export function searchArticleByConditions(searchConditions){
    return requst.get("http://localhost:8080/article/search", {params:searchConditions});
}