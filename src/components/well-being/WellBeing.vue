<script setup>
import wellBeingIllustration from '../../assets/images/well-being.png'
import badMood from '../../assets/images/bad-mood.png'
</script>

<template>
    <div class="flex justify-center items-center min-h-screen w-full bg-white pl-12">
        <div class="flex justify-center items-center w-[700px] text-center">
            <p class="text-2xl font-rbt text-lightBlck tracking-wide">O cuidado da mente envolve tanto o autoconhecimento quanto o cultivo de práticas que promovem equilíbrio emocional e psicológico. Técnicas de relaxamento, como a meditação e a respiração profunda, são poderosas aliadas nesse processo, permitindo que a mente desacelere e se reequilibre. Além disso, atividades que estimulam o bem-estar, como a prática regular de exercícios físicos, o cuidado com a alimentação e o sono adequado, também têm um impacto significativo na saúde mental.</p>
        </div>
        <div>
            <img :src="wellBeingIllustration" alt="Well Being Illustration" class="w-[600px] h-[600px]">
        </div>
    </div>

    <div class="flex justify-center flex-row-reverse items-center min-h-screen w-full bg-white pr-12">
        <div class="flex justify-center items-center w-[700px] flex-col text-center gap-8 tracking-wide">
            <p class="text-2xl text-lightBlck font-rbt">É importante também aprender a reconhecer sinais de alerta em nossa saúde mental, como a irritabilidade excessiva, dificuldades para dormir, perda de interesse por atividades que antes eram prazerosas e a sensação constante de cansaço. Identificar esses sinais logo no início pode ajudar a prevenir complicações mais graves.</p>
            <p class="text-2xl text-lightBlck font-rbt">Cuidar da mente não é um luxo, é uma necessidade para uma vida equilibrada e saudável. Ao praticarmos o autocuidado, buscamos uma maior conexão conosco mesmos, tornando-nos mais resilientes diante dos desafios e mais preparados para lidar com as adversidades da vida. Quando estamos bem mentalmente, nossa capacidade de tomar decisões, interagir com os outros e enfrentar situações difíceis se fortalece.</p>
        </div>
        <div>
            <img :src="badMood" alt="Bad Mood Illustration" class="w-[600px] h-[600px]">
        </div>
    </div>
</template>