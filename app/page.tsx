'use client';

import Image from 'next/image';
import Link from 'next/link';
import QRCodeComponent from '../components/QRCode';
import { useCurrentUrl } from '../hooks/useCurrentUrl';

export default function Home() {
  const currentUrl = useCurrentUrl();
  const apkUrl = currentUrl ? `${currentUrl}/EcosRev.apk` : 'https://lpappmobileecosrev.netlify.app/EcosRev.apk';

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800">
      {/* Hero Section with Background Image */}
      <header className="relative overflow-hidden py-24">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <Image 
            src="https://raw.githubusercontent.com/AEntropia/EcosRev-PI/master/public/images/loginImg.jpg" 
            alt="Ecosrev background" 
            layout="fill" 
            objectFit="cover" 
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 drop-shadow-md">
              Ecosrev
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              Um app mobile para transformar o descarte de eletrônicos em uma experiência sustentável e recompensadora.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="https://ecos-rev-pi.vercel.app/">
                <button className="px-8 py-3 bg-white rounded-full text-[#9FC131] font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300">
                  Acesse nosso site
                </button>
              </Link>
            </div>
          </div>
        </div>  
      </header>

      {/* Main Content */}
      <section className="container mx-auto px-6 py-16">
        {/* About Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-2 mb-16">
          <div className="flex flex-col items-center text-center gap-8">
            <div className="w-72 h-36 relative mb-8">
              <Image 
                src="https://raw.githubusercontent.com/AEntropia/EcosRev-PI/master/public/images/logo.svg" 
                alt="Logo Ecosrev" 
                width={400} 
                height={400}
                priority
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div> 
              <h2 className="text-3xl font-bold text-center text-[#9FC131] mb-8 relative">Sobre o Projeto</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-12">
                Ecosrev é uma plataforma inovadora que revoluciona o descarte de resíduos eletroeletrônicos. 
                Nosso aplicativo conecta cidadãos conscientes a empresas especializadas em reciclagem, 
                transformando o descarte responsável em uma experiência recompensadora. Contribua para 
                um futuro mais sustentável enquanto ganha benefícios exclusivos a cada interação.
              </p>
            </div>
          </div>
        </div>
        
        {/* Histórico do Projeto */}
<div className="mb-16">
  <h2 className="text-3xl font-bold text-center text-[#9FC131] mb-8">Histórico do Projeto</h2>
  <div className="bg-white rounded-2xl shadow-xl p-8 text-gray-800 text-center">
    <p className="text-lg leading-relaxed mb-4">
      O Ecosrev foi desenvolvido como parte do Projeto Integrador do 5º semestre do curso de Desenvolvimento de Software Multiplataforma (DSM) da Fatec Votorantim.
    </p>
    <p className="text-lg leading-relaxed mb-4">
      A equipe passou por etapas de pesquisa, definição de requisitos, prototipação, desenvolvimento mobile com React Native (Expo), integração com backend e testes.
    </p>
    <p className="text-lg leading-relaxed mb-4">
      Também foram aplicadas práticas de integração e entrega contínua (CI/CD), utilizando serviços da AWS para garantir automação, disponibilidade e escalabilidade do sistema.
    </p>
    <p className="text-lg leading-relaxed font-semibold text-green-700 bg-green-50 px-4 py-2 rounded-lg inline-block mt-4">
      ✅ A primeira versão do app já pode ser testada! Baixe e envie seu feedback.
    </p>
  </div>
</div>


               {/* Download Section */}
               <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-[#9FC131] mb-8">Download</h2>
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex flex-col gap-12">
              {/* QR Code para APK */}
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">
                  Download direto do APK:
                </h3>
                <div className="flex flex-col items-center">
                  <div className="bg-gray-50 p-4 rounded-2xl shadow-inner mb-4">
                    <QRCodeComponent 
                      value={apkUrl}
                      size={180}
                      className="mx-auto"
                    />
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Escaneie o QR Code para baixar o APK
                  </p>
                  <div className="text-xs text-green-600 bg-green-50 px-3 py-2 rounded-lg mb-4 inline-block max-w-md">
                    💡 <strong>Dica:</strong> Após escanear, toque no link que aparecer no seu celular para iniciar o download.
                  </div>

                  <a
                    href="/EcosRev.apk"
                    download
                    className="inline-flex items-center gap-2 bg-[#9FC131] text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:bg-opacity-90 transition"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                    Baixar APK diretamente
                  </a>
                </div>
              </div>

              {/* Divisor visual */}
              <div className="border-t border-gray-200"></div>

              {/* Lojas de Aplicativos */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
                  Em breve nas lojas de aplicativos:
                </h3>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <a
                    href="https://play.google.com/"
                    className="flex items-center justify-center"
                  >
                    <Image
                      src="/images/GetItOnGooglePlay_Badge_Web_color_Portuguese-PT.png"
                      alt="Disponível na Play Store"
                      width={216}
                      height={60}
                      className="hover:scale-105 transition-transform duration-300"
                    />
                  </a>
                  <a
                    href="https://www.apple.com/br/app-store/"
                    className="flex items-center justify-center"
                  >
                    <Image
                      src="/images/Download_on_the_App_Store_Badge_PTBR_RGB_blk_092917.svg"
                      alt="Disponível na Apple App Store"
                      width={196}
                      height={60}
                      className="hover:scale-105 transition-transform duration-300"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-[#9FC131] mb-8">Equipe de Desenvolvimento</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { name: 'Gabriel Yamaoka', github: 'YamaokaK', role: 'Full-stack' },
              { name: 'Gesley de Oliveira Rosa', github: 'GesleyOliveira', role: 'Full-stack' },
              { name: 'João Lucas Melo', github: 'JoaoLucasMdO', role: 'Full-stack' },
              { name: 'Laura Jane', github: 'LauraJaneAntunes', role: 'Full-stack' },
              { name: 'Mariana Hirata', github: 'marianakakimoto', role: 'Full-stack' },
              { name: 'Mateus Ferreira', github: 'AEntropia', role: 'Full-stack' }
            ].map((dev, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition duration-300">
                <div className="h-3 bg-[#9FC131]"></div>
                <div className="p-4">
                  <h3 className="text-base font-bold mb-1">{dev.name}</h3>
                  <p className="text-gray-500 text-xs mb-2">{dev.role}</p>
                  <Link
                    href={`https://github.com/${dev.github}`}
                    target="_blank"
                    className="inline-flex items-center gap-1 text-[#9FC131] text-sm hover:text-opacity-80 transition"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    {dev.github}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fatec Votorantim Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16">
          <div className="flex flex-col items-center text-center">
            {/* Logo Fatec */}
            <div className="w-48 h-18 relative mb-8">
              <Image
                src="https://raw.githubusercontent.com/LauraJaneAntunes/IC/main/logoFatecVotorantim.png"
                alt="Logo Fatec Votorantim"
                width={192}
                height={192}
                priority
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Descrição */}
            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mb-6">
              O appMobile do Ecosrev é um projeto em desenvolvimento para o projeto integrador do 5º semestre do curso de DSM da Fatec Votorantim,
              com o objetivo de aplicar conhecimentos adquiridos e contribuir para soluções tecnológicas sustentáveis.
            </p>

            {/* Botão */}
            <Link
              href="https://fatecvotorantim.cps.sp.gov.br/"
              target="_blank"
              className="inline-block bg-[#9FC131] text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:bg-opacity-90 transition"
            >
              Saiba mais sobre a Fatec Votorantim
            </Link>
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#9FC131] text-white py-12">
        <div className="container mx-auto px-6 text-center">
          
          <h2 className="text-2xl font-bold mb-4">Ecosrev</h2>
          <p className="mb-6">Projeto Integrador - 5º Semestre DSM - Fatec Votorantim</p>
          <div className="flex justify-center gap-4">
            <Link 
              href="https://ecos-rev-pi.vercel.app/" 
              target="_blank"
              className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </Link>
            <Link 
              href="https://github.com/ecosrev" 
              target="_blank"
              className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </Link>
             
          </div>
          <p className="mt-8 text-sm text-white/70">
            © {new Date().getFullYear()} Ecosrev. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}