<script setup>
import wellBeingIllustration from '../../assets/images/well-being.png'
import leisure from '../../assets/images/leisure.png'
import refuge from '../../assets/images/refuge.png'
</script>

<template>
  <div class="w-full">
    
    <div class="w-full">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#e9e9e9"
          fill-opacity="1"
          d="M0,160L60,133.3C120,107,240,53,360,80C480,107,600,213,720,245.3C840,277,960,235,1080,213.3C1200,192,1320,192,1380,192L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
    </div>

    
    <div class="flex justify-center items-center min-h-screen w-full bg-white pl-16">
      <div class="flex justify-center items-center w-[700px] text-center">
        <p class="text-2xl font-rbt text-lightBlck tracking-wider">
          O cuidado da mente envolve tanto o autoconhecimento quanto o cultivo de práticas que promovem equilíbrio emocional e psicológico. Técnicas de relaxamento, como a meditação e a respiração profunda, são poderosas aliadas nesse processo, permitindo que a mente desacelere e se reequilibre. <br /> <br /> Além disso, atividades que estimulam o bem-estar, como a prática regular de exercícios físicos, o cuidado com a alimentação e o sono adequado, também têm um impacto significativo na saúde mental.
        </p>
      </div>
      <div>
        <img :src="wellBeingIllustration" alt="Well Being Illustration" class="w-[650px] h-[600px]" />
      </div>
    </div>

    <div class="flex justify-center flex-row-reverse items-center min-h-screen w-full bg-white pr-12">
      <div class="flex justify-center items-center w-[700px] flex-col text-center gap-8 tracking-wide">
        <p class="text-2xl text-lightBlck font-rbt tracking-wide">
          É importante também aprender a reconhecer sinais de alerta em nossa saúde mental, como a irritabilidade excessiva, dificuldades para dormir, perda de interesse por atividades que antes eram prazerosas e a sensação constante de cansaço. Identificar esses sinais logo no início pode ajudar a prevenir complicações mais graves.
        </p>
        <p class="text-2xl text-lightBlck font-rbt tracking-wide">
          Cuidar da mente não é um luxo, é uma necessidade para uma vida equilibrada e saudável. Ao praticarmos o autocuidado, buscamos uma maior conexão conosco mesmos, tornando-nos mais resilientes diante dos desafios e mais preparados para lidar com as adversidades da vida. Quando estamos bem mentalmente, nossa capacidade de tomar decisões, interagir com os outros e enfrentar situações difíceis se fortalece.
        </p>
      </div>
      <div>
        <img :src="leisure" alt="Leisure   Illustration" class="w-[600px] h-[600px]" />
      </div>
    </div>

    <div class="flex justify-start items-center min-h-screen flex-col w-full bg-white pt-8 gap-8">
      <div>
        <h1 class="font-amatic text-8xl font-bold text-lightRed tracking-wide pb-8">PRECONCEITO</h1>
      </div>

      <div class="flex justify-center items-center flex-col w-[800px] text-center bg-lightPurple p-10 rounded-2xl clip-path-softTilt">
        <p class="text-2xl font-rbt text-lightGray tracking-wider">O preconceito em relação à saúde mental ainda é uma barreira significativa que impede muitas pessoas de buscar a ajuda de que precisam. Muitas vezes, a falta de conhecimento ou a perpetuação de estigmas culturais leva à ideia de que problemas emocionais ou psicológicos são sinais de fraqueza ou incapacidade.
        </p>
        <br />
        <p class="text-2xl font-rbt text-lightGray tracking-wider">Essa visão distorcida pode causar vergonha ou medo de julgamento, levando indivíduos a esconderem seus sintomas ou evitarem compartilhar seus sentimentos. Como resultado, problemas que poderiam ser tratados de forma eficaz muitas vezes se agravam, causando mais sofrimento. Além disso, o preconceito pode influenciar negativamente os relacionamentos pessoais, ambientes de trabalho e até mesmo as políticas públicas, dificultando o acesso a recursos e tratamentos adequados.
        </p>
       <br />
      </div>

      <div class="flex justify-center items-center min-h-screen w-full bg-white">
      <div class="flex justify-center items-center flex-col w-[700px] text-center gap-4 pr-12">
        <p class="text-2xl font-rbt text-lightBlck tracking-wider">Se você enfrenta preconceito ou teme ser julgado, lembre-se de que não está sozinho nessa jornada. Existe uma rede de apoio composta por profissionais de saúde mental, organizações e comunidades dedicadas a ajudar e acolher. A busca por ajuda é um ato de coragem, e não um sinal de fraqueza.</p>
        <p class="text-2xl font-rbt text-lightBlck tracking-wider">Combater o preconceito começa com pequenos passos: educar-se, compartilhar experiências e apoiar aqueles que precisam. Juntos, podemos construir uma sociedade mais empática e compreensiva, onde cuidar da mente seja reconhecido como uma prioridade para todos.</p>
        </div>
        <div>
        <img :src="refuge" alt="Refuge Illustration" class="h-[450px] w-[450px]">
      </div>
    </div>
    </div>

  </div>
</template>
