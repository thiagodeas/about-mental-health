<script setup>
import anxiety from '../../assets/images/anxiety.png'
</script>

<template>
    <div class="flex items-center justify-center min-h-screen flex-col text-center w-full">
      <div class="flex items-center justify-center bg-lightPurple pt-24 pb-24 flex-col w-full min-h-screen">
        <div class="flex items-center justify-center w-[600px] pb-12">
        <h1 class="text-7xl font-amatic text-lightGray">Como Você Tem Cuidado da <span class="text-lightRed font-bold">Sua Mente</span>?</h1>
      </div>

      <div class="flex items-center justify-center w-[990px] gap-16">
        <div class="flex items-center justify-center p-4">
          <p class ="text-2xl font-rbt font-light tracking-wider text-lightGray">A mente é um espaço valioso e fundamental para a nossa saúde e bem-estar. É nela que nossos pensamentos, sentimentos, reações e comportamentos são moldados, influenciando diretamente a forma como interagimos com o mundo ao nosso redor. <br /> <br />No entanto, em meio à correria do dia a dia, é fácil esquecer de cuidar de algo tão essencial, o que pode levar a um acúmulo de tensões, estresse e até problemas de saúde mental. <br /> <br /> Por isso, é crucial reservar momentos para refletir, relaxar e adotar práticas que promovam equilíbrio e harmonia, fortalecendo não apenas a mente, mas também o corpo e as relações ao nosso redor.</p>
        </div>
    </div>
      </div>
      

    <div class="flex items-center justify-start flex-row-reverse min-h-screen text-center w-full bg-white pr-8 gap-12">
        <div class="flex items-center flex-col justify-center p-4 w-[700px] gap-6">
          <p class ="text-xl font-rbt tracking-wider text-lightBlck">Muitas vezes, por não enxergarmos imediatamente as consequências de um cuidado negligenciado com a mente, acabamos priorizando outras áreas da vida, como trabalho, relacionamentos ou até mesmo a saúde física. No entanto, quando a mente está sobrecarregada, nossos pensamentos podem se tornar confusos, a sensação de estar "acima das nossas forças" se intensifica e, ao longo do tempo, o estresse pode se transformar em ansiedade, depressão e outros transtornos mentais.</p>
          <p class="text-xl font-rbt tracking-wider text-lightBlck">A ansiedade, por exemplo, é uma reação natural do nosso corpo ao estresse. No entanto, quando se torna constante e excessiva, ela pode interferir na nossa qualidade de vida. Preocupações excessivas, dificuldade para dormir e sensação de tensão são apenas alguns dos sintomas mais comuns. Felizmente, a ansiedade pode ser controlada com estratégias como a meditação, a terapia cognitivo-comportamental e a prática de atividades físicas.</p>
        </div>
        <div>
          <img :src="anxiety" alt="Anxiety Illustration">
        </div>
        </div>
    </div>

</template>
