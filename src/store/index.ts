import { defineStore } from "pinia";
// import { ref } from "vue";

export const useStore = defineStore("main", () => {
    const uploadFile = (theFile: File | null | undefined): void => {
        
    };
    return {
        uploadFile,
    };
});
