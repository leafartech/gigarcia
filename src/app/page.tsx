"use client"

import { useEffect } from "react";
import Section from "./components/Section";

export default function Home() {

  let cont = 0
  useEffect(() => {
    if (cont === 0) {
      const div = document.createElement('div');
      div.className = '_form_1';
      document.body.appendChild(div);

      const script = document.createElement('script');
      script.src = 'https://gigarciaoliveira.activehosted.com/f/embed.php?id=1';
      script.type = 'text/javascript';
      script.charset = 'utf-8';
      document.body.appendChild(script);
      cont++
    }
  }, []);

  return (
    <div>
      <header className="relative min-h-screen sm:h-[720px] sm:flex sm:items-center">
        <img src="./images/bg.jpg" alt="Imagem de background da Gi" className="absolute hidden sm:block top-0 left-0 h-full w-full object-cover -z-10" />
        <img src="./images/lp7.jpg" alt="Imagem de background da Gi" className="block sm:hidden absolute top-0 left-0 w-full -z-50" />
        <img src="./images/lp6.png" alt="Imagem de background da Gi" className="block sm:hidden -z-10" />
        <Section>
          <div className="flex justify-start items-center z-50">
            <div className="flex flex-col items-center sm:items-start justify-center max-w-[500px]">
              <div className="flex flex-col items-center sm:items-start gap-3 mb-4">
                <img src="./images/logo.png" alt="" className="w-48" />
                <h3 className="rounded-full bg-green-600 text-white text-center py-1 w-[172px] text-sm sm:text-lg sm:px-6 sm:py-2">Ao vivo e gratuito</h3>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-xl text-center sm:text-left sm:text-[28px] font-bold line-mod">Descubra o melhor formato de conteúdo do Instagram para crescer com <span className="text-my">seguidores de ouro, <span className="underline">que compram de você</span></span></h1>
                <p className="text-center sm:text-left text-sm sm:text-lg mt-2 sm:mt-0">Apenas 1 post nesse formato me fez ganhar mais de 19.000 seguidores organicamente, <strong>e você vai fazer o mesmo</strong> pra nunca mais sentir que está perdendo tempo no digital</p>
                <div className="_form_1 -mt-4"></div>
                <p className="text-center">30 e 31 de agosto às 20h</p>
              </div>
            </div>
          </div>
        </Section>
      </header>
      <main className="bg-my">
        <Section>
          <div className="flex justify-center mt-16">
            <h1 className="text-xl sm:text-3xl font-semibold text-center max-w-[720px]">Eu aprendi a estrutura capaz de tornar um post carrossel comum <span className="text-my">em uma mina de ouro:</span></h1>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-2 mt-10">
            <img src="./images/lp.jpg" alt="Imagem demonstrativa" className="w-full sm:w-96 object-cover border border-my" />
            <div className="flex flex-col gap-4">
              <img src="./images/lp1.jpg" alt="Imagem demonstrativa" className="w-full sm:w-80 border border-my" />
              <img src="./images/lp2.jpg" alt="Imagem demonstrativa" className="w-full sm:w-80 border border-my" />
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <h4 className="text-lg max-w-[720px] text-center">Essa estrutura, sozinha, está me trazendo <strong>seguidores qualificados</strong> todos os dias e eu vou te ensinar tudo sobre ela em <span className="underline">duas aulas ao vivo</span>:</h4>
          </div>
        </Section>
        <Section>
          <div className="flex justify-center py-8 sm:py-24">
            <div className="h-[140px] w-[2px] rounded-full bg-my2"></div>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <img src="./images/lp3.png" alt="" className="h-[462px] object-cover sm:h-[600px]" />
            <img src="./images/lp4.png" alt="" className="h-[462px] object-cover sm:h-[600px]" />
          </div>
        </Section>
        <div className="my-16 py-10 sm:py-24 border-y border-my">
          <Section>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <h2 className="text-3xl font-semibold text-left w-full sm:max-w-[220px]">O <strong>Carrossel de Ouro</strong> é para quem:</h2>
              <div className="w-full sm:w-[664px]">
                <div className="flex gap-4 py-3 border-b border-b-gray-300">
                  <img src="./images/check.png" alt="Check icon" className="w-6 h-6 mt-1" />
                  <p className="text-lg">Empreende no Instagram e quer criar conteúdos que atraiam seguidores de ouro (que compram de você em pouco tempo).</p>
                </div>
                <div className="flex gap-4 py-3 border-b border-b-gray-300">
                  <img src="./images/check.png" alt="Check icon" className="w-6 h-6 mt-1" />
                  <p className="text-lg">Não quer ter que fazer dancinhas e seguir tendências pra alcançar altos resultados.</p>
                </div>
                <div className="flex gap-4 py-3">
                  <img src="./images/check.png" alt="Check icon" className="w-6 h-6 mt-1" />
                  <p className="text-lg">Está cansada de ser ignorada e quer ser reconhecida como uma referência de ouro no seu nicho.</p>
                </div>
              </div>
            </div>
          </Section>
        </div>
        <Section>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-12">
            <img src="./images/lp5.png" alt="Imagem da Gi" className="w-full sm:h-[564px] object-contain" />
            <div className="flex flex-col gap-6 max-w-[500px]">
              <h2 className="text-3xl font-semibold pb-3 border-b border-my">Quem será <span className="text-my">sua guia?</span></h2>
              <div className="flex flex-col gap-4">
                <p>Mentora de mais de 8.000 empreendedoras e prestadoras de serviço que atraem seguidores qualificados, engajam com seu público e <strong>vendem todos os dias por meio de conteúdos estratégicos.</strong></p>
                <p>Com apenas 18 anos, já tinha o seu primeiro negócio de produtos físicos na internet, onde sem investimento nenhum, <strong>alcançou mais de 40 mil seguidores</strong> fãs e esgotava estoques em menos de 7 dias.</p>
                <p>Logo em seguida, criou um novo perfil para ensinar as técnicas de marketing digital que aprendeu e alcançou <strong>10 mil seguidores em 33 dias</strong> e 300 mil seguidores em 6 meses.</p>
                <p>Os conteúdos dela não a fizeram somente alcançar números altos de engajamento e seguidores, mas também a fizeram <strong>faturar mais de R$3 milhões de reais com apenas 21 anos de idade.</strong></p>
                <p>Depois de mais de 1.000 posts criados em 2 perfis diferentes, não resta dúvidas de que o conteúdo estratégico, <strong>especialmente no formato Carrossel</strong>, é o melhor caminho pra que você alcance sua liberdade e seja vista no Instagram.</p>
                <p><strong>Minha missão é te mostrar a minha metodologia pra chegar lá.</strong></p>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <footer className="bg-my pt-12 sm:pt-32 pb-12">
        <p className="text-center text-sm"><strong>© 2023 • Gio Garcia</strong> <br />Todos os direitos reservados</p>
      </footer>
    </div>
  )
}