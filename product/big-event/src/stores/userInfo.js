import {defineStore} from 'pinia'
import {ref} from 'vue'

export const useUserInfoStore = defineStore('userInfo', () => {
    const userInfo = ref({})
    
    const setInfo = (value) => {
        userInfo.value = value
        console.log(userInfo.value)
    }
    
    const removeInfo = () => {
        userInfo.value = {}
    }
    return {userInfo, setInfo, removeInfo}
}, 
{
    persist: true
})