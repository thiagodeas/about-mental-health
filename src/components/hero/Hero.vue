<script setup>    
import heroIllustration from '../../assets/images/hero-illustration.png'
</script>

<template>
    <div class="flex items-center justify-center min-h-screen w-full bg-lightGray">
        <div>
            <img :src=heroIllustration alt="Hero Illustration" class="h-[450px] w-[450px] animate-floating">
        </div>
        <div class="flex items-center justify-center flex-col text-center w-[700px] pb-12">
            <p class="text-[100px] font-amatic leading-tight">A importância do</p>
            <p class="text-[110px] font-amatic font-semibold leading-none text-lightPurple">Auto-Cuidado</p>
        </div>
    </div>
</template>
