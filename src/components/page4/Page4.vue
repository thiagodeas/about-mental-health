<script setup>
import anxiety from '../../assets/images/anxiety.png'
import selfCare from '../../assets/images/self-care.png'
</script>

<template>
<div class="w-full">
    
    <div class="w-full">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#4E27BE"
          fill-opacity="1"
          d="M0,160L60,133.3C120,107,240,53,360,80C480,107,600,213,720,245.3C840,277,960,235,1080,213.3C1200,192,1320,192,1380,192L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
    </div>

    <div class="flex items-center justify-center w-full min-h-screen text-center bg-white">
        
        <div class="flex items-center justify-center flex-col w-[700px] gap-6">
            <h1 class="font-rbt text-4xl"><span class="text-lightPurple">Ansiedade:</span> Como Reconhecer os Sinais e Controlá-la?</h1>
            <p class="font-rbt text-2xl text-lightBlck">
                A ansiedade é uma reação natural do nosso corpo ao estresse. No entanto, quando se torna constante e excessiva, ela pode interferir na nossa qualidade de vida. Preocupações excessivas, dificuldade para dormir e sensação de tensão são apenas alguns dos sintomas mais comuns.
            </p>
            <p class="font-rbt text-2xl text-lightBlck">Reconhecer os sinais da ansiedade é o primeiro passo para tratá-la. Ao buscar as abordagens corretas, é possível viver com mais tranquilidade e equilíbrio.</p>
        </div>
        <div>
            <img :src="anxiety" alt="Anxiety Illustration" class="h-[500px] w-[500px]">
        </div>
    </div>

    <div class="flex items-start justify-center w-full min-h-screen text-center bg-white">
        <div class="flex items-center justify-center flex-col w-[800px] border-2 bg-[#ffffff] rounded-md p-6 shadow-[#4d27bea9] shadow-md">
            <p class="font-rbt text-2xl text-lightBlck tracking-wider">
            Embora a ansiedade seja uma resposta natural, ela não precisa dominar sua vida. Felizmente, existem várias maneiras de controlar e reduzir seus impactos. Estratégias como a meditação, que ajuda a acalmar a mente e reduzir os níveis de estresse, e a terapia cognitivo-comportamental, que permite entender e reestruturar padrões de pensamento prejudiciais, são extremamente eficazes. A prática regular de atividades físicas também desempenha um papel crucial, pois liberta endorfinas que promovem sensações de bem-estar e relaxamento.
            </p>
            <br />
            <p class="font-rbt text-2xl text-lightBlck tracking-wider">
                Além dessas abordagens, o autocuidado é fundamental. Garantir um tempo para si mesmo, descansar adequadamente, manter uma alimentação equilibrada e procurar apoio emocional quando necessário são passos importantes na gestão da ansiedade. Também é essencial aprender a gerenciar as fontes de estresse do dia a dia, estabelecendo limites saudáveis e praticando técnicas de relaxamento, como a respiração profunda.
            </p>
        </div>
        
    </div>

    <div class="flex items-center justify-center flex-row-reverse w-full min-h-screen text-center bg-white pt-24">
        <div class="flex items-center flex-col justify-center w-[700px] gap-6 pl-12">
            <img :src="selfCare" alt="">
        </div>
        
    </div>

    <div class="flex items-center justify-center flex-row-reverse w-full min-h-screen text-center bg-white pt-24">
        <div class="flex items-center flex-col justify-center w-[1000px] gap-6 pl-12">
            <h1 class="font-rbt text-4xl"><span class="text-lightRed">Depressão:</span> Identificando os Sintomas e Buscando Ajuda</h1>
            <p class="font-rbt text-2xl text-lightBlck tracking-wider">A depressão não é apenas uma tristeza passageira. Ela é uma condição médica séria que afeta profundamente o estado emocional e físico. A perda de interesse em atividades que antes eram prazerosas, uma sensação constante de vazio, cansaço extremo e até pensamentos negativos e suicidas são sinais claros de que a pessoa pode estar enfrentando um quadro de depressão.</p>
            <p class="font-rbt text-2xl text-lightBlck tracking-wider">
                É importante reconhecer que a depressão não é uma fraqueza ou falta de esforço, mas uma condição que exige atenção e tratamento especializado. O tratamento da depressão é fundamental e pode envolver diferentes abordagens, como a terapia, apoio social de amigos e familiares, e, em alguns casos, medicamentos que ajudam a equilibrar as substâncias químicas no cérebro.
            </p>
        </div>
    </div>

    <div class="flex items-start justify-center flex-row-reverse w-full min-h-screen text-center bg-white pt-24 pb-12">
        <div class="flex items-center flex-col justify-center w-[900px] gap-6">
            <h1 class="font-amatic text-8xl font-bold text-lightPurple pb-6">Você não está sozinho!</h1>
            <p class="font-rbt text-2xl text-lightBlck tracking-wider">Buscar ajuda é um passo essencial no processo de recuperação. A depressão é uma doença tratável, e com o apoio certo, é possível superá-la. Ter coragem de procurar ajuda, seja com um profissional de saúde mental, amigos ou familiares, pode ser o primeiro passo para encontrar a luz no fim do túnel.</p>
            <p class="font-rbt text-2xl text-lightBlck tracking-wider"> Lembre-se de que, mesmo nos momentos mais difíceis, sempre existe um caminho para a recuperação. Buscar ajuda é um passo corajoso, e você merece viver uma vida cheia de equilíbrio, saúde e bem-estar. Não tenha medo de pedir ajuda – sua jornada de cura começa com o primeiro passo.</p>
        </div>
    </div>
</div>
</template>