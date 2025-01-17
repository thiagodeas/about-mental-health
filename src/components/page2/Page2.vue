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
        <p class="text-2xl font-rbt text-lightBlck tracking-wider">Cuidar da mente é um processo contínuo que envolve o autoconhecimento e a adoção de práticas que promovem o equilíbrio emocional e psicológico. Técnicas como meditação e respiração profunda são eficazes para acalmar a mente, reduzir o estresse e restaurar o foco. <br /><br/>Além disso, hábitos saudáveis como uma alimentação nutritiva e um sono de qualidade têm um impacto direto na saúde mental, ajudando a manter o cérebro equilibrado e funcionando de forma otimizada. Reconhecer a importância desse cuidado diário é essencial, pois pequenas mudanças podem gerar grandes benefícios ao longo do tempo.</p>
      </div>
      <div>
        <img :src="wellBeingIllustration" alt="Well Being Illustration" class="w-[650px] h-[600px]" />
      </div>
    </div>

    <div class="flex justify-center flex-row-reverse items-center min-h-screen w-full bg-white pr-12">
      <div class="flex justify-center items-center w-[700px] flex-col text-center gap-8 tracking-wide">
        <p class="text-2xl text-lightBlck font-rbt tracking-wide">
          É fundamental aprender a identificar sinais de alerta na nossa saúde mental, como irritabilidade excessiva, dificuldades para dormir, perda de interesse por atividades antes prazerosas e sensação constante de cansaço. Detectar esses sinais precocemente pode evitar complicações maiores.
        </p>
        <p class="text-2xl text-lightBlck font-rbt tracking-wide">
          Cuidar da mente não é um luxo, mas uma necessidade para uma vida equilibrada. O autocuidado fortalece nossa conexão consigo mesmos, tornando-nos mais resilientes diante dos desafios e melhor preparados para enfrentar adversidades. Quando nossa saúde mental está equilibrada, nossa capacidade de tomar decisões, interagir com os outros e lidar com situações difíceis é aprimorada.
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
        <p class="text-2xl font-rbt text-lightGray tracking-wider">O preconceito sobre saúde mental ainda é uma barreira que impede muitas pessoas de buscar ajuda. Estigmas culturais e a falta de informação muitas vezes levam à crença de que problemas emocionais são sinais de fraqueza ou incapacidade.
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
