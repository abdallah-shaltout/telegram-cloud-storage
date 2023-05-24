<template>
    <header class="bg-very-dark text-light py-5 shadow">
        <div class="container flex-between">
            <router-link :to="{ name: 'home' }"><h1 class="text-2xl font-bold">Telegram Cloud Storage</h1></router-link>
            <nav>
                <ul class="flex gap-4 items-center">
                    <li><router-link :to="{ name: 'home' }" class="block py-3 px-6 font-medium text-lg text-light-50 trans hover:bg-dark hover:text-light rounded">Home</router-link></li>
                    <li><router-link :to="{ name: 'upload' }" class="block py-3 px-6 font-medium text-lg text-light-50 trans hover:bg-dark hover:text-light rounded">Upload</router-link></li>
                    <li><router-link :to="{ name: 'download' }" class="block py-3 px-6 font-medium text-lg text-light-50 trans hover:bg-dark hover:text-light rounded">Download</router-link></li>
                    <li><router-link :to="{ name: 'delete' }" class="block py-3 px-6 font-medium text-lg text-light-50 trans hover:bg-dark hover:text-light rounded">Delete</router-link></li>
                </ul>
            </nav>
        </div>
    </header>
</template>
