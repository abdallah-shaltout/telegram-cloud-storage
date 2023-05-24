<template>
    <section>
        <div class="container">
            <form @submit.prevent="uploadFile" class="flex flex-col gap-5">
                <label
                    class="flex-center flex-col gap-4 border-2 border-dashed border-dark-20 rounded w-3/4 mx-auto py-20 cursor-pointer bg-very-dark trans hover:bg-dark-20 text-dark-20 hover:text-very-dark">
                    <input type="file" class="hidden" @change="addFile($event)" />
                    <UploadIcon class="w-12" />
                    <p class="text-lg font-semibold">Click To Upload</p>
                </label>
                <button type="submit" class="bg-dark-20 block w-fit mx-auto py-3 px-6 rounded text-xl font-bold trans hover:bg-very-dark hover:text-dark-20">Upload</button>
            </form>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useStore } from "@/store";
import UploadIcon from "@/assets/icons/cloud-upload.svg?component";
const theFile = ref<File | null | undefined>(null);
const store = useStore();

const uploadFile = (): void => {
    store.uploadFile(theFile.value);
};

const addFile = (e: Event): void => {
    const fileInput = e.target as HTMLInputElement;
    const file: File | undefined = fileInput.files?.[0];
    theFile.value = file;
};
</script>
