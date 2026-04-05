import React, { useState, useEffect } from 'react';
import { 
  User, MessageCircle, ShieldCheck, Zap, Handshake, 
  Clock, Instagram, ChevronDown, MapPin, Package, Mail, Phone, Truck
} from 'lucide-react';

// --- IMPORT DAS FOTOS ---
import fotoJoao from './assets/joao.png'; 
import heroImg from './assets/HeroSection.png';
import fotoContato from './assets/contato.png';
import logoImg from './assets/logotipo.png';

export default function App() {
  const whatsappLink = "https://wa.me/seunumerosaqui"; // Substitua pelo seu número
  const [showFloatBtn, setShowFloatBtn] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowFloatBtn(true);
      } else {
        setShowFloatBtn(false);
      }

      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans text-slate-700 antialiased selection:bg-orange-100 scroll-smooth relative">
      
      {/* CSS das Animações */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes pulse-orange {
          0% { box-shadow: 0 0 0 0 rgba(249, 115, 22, 0.7); }
          70% { box-shadow: 0 0 0 20px rgba(249, 115, 22, 0); }
          100% { box-shadow: 0 0 0 0 rgba(249, 115, 22, 0); }
        }
        @keyframes blink-glow {
          0%, 100% { filter: brightness(1); transform: scale(1); }
          50% { filter: brightness(1.2); transform: scale(1.05); box-shadow: 0 0 25px rgba(249, 115, 22, 0.6); }
        }
      `}} />

      {/* BOTÃO FLUTUANTE */}
      <a 
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-8 right-8 z-[100] flex items-center justify-center w-16 h-16 bg-orange-500 text-white rounded-full shadow-[0_0_20px_rgba(249,115,22,0.6)] transition-all duration-500 transform ${
          showFloatBtn ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        } hover:bg-orange-600 hover:scale-110`}
        style={{ animation: 'pulse-orange 2s infinite' }}
      >
        <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .004 5.412.001 12.049c0 2.123.554 4.197 1.608 6.02L0 24l6.117-1.605a11.845 11.845 0 005.933 1.583h.005c6.637 0 12.046-5.414 12.049-12.052 0-3.217-1.252-6.241-3.53-8.52z"/>
        </svg>
        <div className="absolute -top-1 -right-1 flex items-center justify-center w-6 h-6 bg-red-600 text-white text-[10px] font-bold rounded-full border-2 border-white shadow-sm">1</div>
      </a>

      {/* 1. NAVBAR */}
     <nav className={`fixed top-0 w-full z-50 transition-all duration-300 h-16 flex items-center ${
  isScrolled 
  ? "bg-blue-900 shadow-lg border-b border-blue-800" // Azul quando rola
  : "bg-transparent border-b border-transparent"    // Transparente no topo
}`}>
  <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
    
    {/* Logo: Fica branco no topo e mantém branco (ou muda) no scroll */}
    <div className={`flex items-center gap-2 uppercase font-black tracking-tighter shrink-0 transition-colors ${
      isScrolled ? "text-white" : "text-white"
    }`}>
      <div className={`${isScrolled ? "bg-blue-800" : "bg-blue-900"} p-1 rounded text-white transition-colors`}>
        <User size={16} />
      </div>
      Seu Jão
    </div>

    <div className="flex items-center gap-12 flex-1 justify-end">
      {/* Links de Navegação: Brancos no topo, Brancos no azul (ou ajuste se preferir) */}
      <div className={`hidden md:flex gap-8 font-bold text-[10px] uppercase tracking-[0.2em] transition-colors ${
        isScrolled ? "text-blue-100" : "text-white"
      }`}>
        <a href="#inicio" className="hover:text-orange-500 transition-colors">Início</a>
        <a href="#sobre" className="hover:text-orange-500 transition-colors">Sobre</a>
        <a href="#servicos" className="hover:text-orange-500 transition-colors">Serviços</a>
        <a href="#parceiros" className="hover:text-orange-500 transition-colors">Parceiros</a>
        <a href="#contato" className="hover:text-orange-500 transition-colors">Contato</a>
      </div>

      {/* Botão: Mudei para fundo laranja no scroll para destacar no azul */}
      <a 
        href= "https://seujao-shop.vercel.app/"
        className={`px-5 py-2 rounded-lg font-bold text-[10px] tracking-widest transition-all shadow-md shrink-0 uppercase ${
          isScrolled 
          ? "bg-orange-500 text-white hover:bg-orange-600" 
          : "bg-white text-blue-900 hover:bg-orange-500 hover:text-white"
        }`}
      >
        ACESSAR LOJA
      </a>
    </div>
  </div>
</nav>

      {/* 2. HEROSECTION */}
      <section id="inicio" className="w-full h-screen flex items-center justify-center bg-white relative pt-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            alt="Background Seu Jão" 
            className="w-full h-full object-cover object-right lg:object-center"
          />
          <div className="absolute inset-0 bg-white/30 lg:bg-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center w-full relative z-10">
          <div className="space-y-6">
            
            <h1 className="text-5xl md:text-7xl font-black text-blue-900 leading-tight tracking-tighter">
             TUDO O QUE VOCÊ PRECISA<br/><span className="text-orange-500">NUM SÓ LUGAR</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 max-w-xl font-bold leading-snug">
              Qualidade na escolha, economia no bolso e agilidade na entrega.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 text-center">
              <a 
                href= "https://seujao-shop.vercel.app/"
                className="inline-flex items-center justify-center gap-3 bg-orange-500 text-white px-8 py-4 rounded-xl font-black text-sm uppercase tracking-[0.15em] transition-all group"
                style={{ animation: 'blink-glow 1.5s infinite ease-in-out' }}
              >
                <MessageCircle size={20} fill="currentColor" className="text-white"/> COMPRAR ONLINE
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-slate-300 animate-bounce z-10">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* 3. SOBRE */}
      <section id="sobre" className="w-full h-screen flex items-center justify-center bg-blue-900 text-white pt-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center w-full">
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
                <h2 className="text-4xl font-black uppercase tracking-[0.2em] opacity-90 italic">Nossa Trajetória</h2>
                <div className="h-1.5 w-20 bg-orange-500 rounded-full"></div>
            </div>
            <div className="space-y-6 text-blue-50">
                <p className="text-xl leading-relaxed font-medium">
                  Tudo começou com o empenho de <span className="text-orange-500 font-bold underline decoration-white/20">Seu João Neto</span>, 
                  que iniciou sua jornada percorrendo as ruas de <span className="font-bold">Parnamirim</span> vendendo de porta em porta.
                </p>
                <p className="text-lg leading-relaxed opacity-90">
                  Com o pé na estrada e o compromisso de entregar sempre o melhor, a confiança dos clientes cresceu. 
                  Hoje, expandimos para o mundo digital, levando nossa praticidade para entregas e pedidos online com a mesma essência do início.
                </p>
                <div className="bg-blue-950/40 p-6 rounded-2xl border border-blue-800 flex items-start gap-4">
                    <Package className="text-orange-500 shrink-0" size={28} />
                    <p className="text-sm">
                      <strong className="text-white uppercase block mb-1">Pronta Entrega</strong>
                      Contamos com estoque próprio e logística otimizada para garantir que o seu pedido chegue rápido e seguro.
                    </p>
                </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 w-full max-w-lg mx-auto">
            <div className="relative group">
              <div className="absolute -inset-4 bg-orange-500/20 rounded-[2.5rem] blur-xl opacity-50"></div>
              <div className="rounded-[2rem] overflow-hidden border-4 border-blue-800 shadow-2xl h-[450px] bg-white">
                {fotoJoao ? (
                    <img src={fotoJoao} alt="Seu João Neto" className="w-full h-full object-cover" />
                ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-slate-100 text-slate-300">
                        <User size={80} strokeWidth={1}/>
                        <span className="mt-2 text-sm font-bold">joao.png não encontrada</span>
                    </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVIÇOS */}
      <section id="servicos" className="w-full h-screen flex items-center justify-center bg-slate-50 pt-16">
        <div className="max-w-7xl mx-auto px-6 w-full space-y-16">
            <div className="text-center space-y-3">
                <h2 className="text-4xl font-black text-blue-900 tracking-tighter">O Que Fazemos por Você</h2>
                <p className="text-xl text-slate-500 max-w-2xl mx-auto">Facilitamos sua vida com serviços ágeis e de confiança em Parnamirim.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl space-y-4">
                    <Zap className="text-orange-500" size={36}/>
                    <h3 className="text-2xl font-black text-blue-900 tracking-tight">Entregas Rápidas</h3>
                    <p className="text-slate-500">Logística local otimizada para que você receba o que precisa em tempo recorde.</p>
                </div>
                <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl space-y-4">
                    <ShieldCheck className="text-orange-500" size={36}/>
                    <h3 className="text-2xl font-black text-blue-900 tracking-tight">Produtos Selecionados</h3>
                    <p className="text-slate-500">Trabalhamos apenas com marcas e produtos que passaram pelo controle de qualidade.</p>
                </div>
                <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl space-y-4">
                    <Truck className="text-orange-500" size={36}/>
                    <h3 className="text-2xl font-black text-blue-900 tracking-tight">Pedidos Online</h3>
                    <p className="text-slate-500">Praticidade de pedir pelo WhatsApp e receber no conforto da sua casa.</p>
                </div>
            </div>
        </div>
      </section>

{/* 5. CATEGORIAS DE PRODUTOS COM IMAGENS DE FUNDO - AJUSTADO PARA CIMA */}
      <section id="parceiros" className="w-full h-screen flex items-center justify-center bg-blue-950 pt-0">
        <div className="max-w-7xl mx-auto px-6 w-full space-y-8">
            <div className="text-center space-y-2">
                <div className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest inline-block italic">
                  O que você precisa
                </div>
                <h2 className="text-4xl font-black text-white tracking-tighter">
                  Tudo para você e sua casa
                </h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center text-center">
                
                {/* Categoria 1 - Eletro */}
                <div className="group relative overflow-hidden h-40 rounded-3xl border border-blue-800 cursor-pointer flex items-center justify-center">
                    <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=500&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Eletro"/>
                    <div className="absolute inset-0 bg-blue-900/80 group-hover:bg-orange-500/90 transition-colors duration-300"></div>
                    <div className="relative z-10">
                        <Zap className="text-orange-500 group-hover:text-white mx-auto mb-2" size={32} />
                        <span className="text-white font-black uppercase tracking-widest text-[10px]">Eletro &<br/>Utilidades</span>
                    </div>
                </div>

                {/* Categoria 2 - Tecnologia */}
                <div className="group relative overflow-hidden h-40 rounded-3xl border border-blue-800 cursor-pointer flex items-center justify-center">
                    <img src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=500&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Tech"/>
                    <div className="absolute inset-0 bg-blue-900/80 group-hover:bg-orange-500/90 transition-colors duration-300"></div>
                    <div className="relative z-10">
                        <Truck className="text-orange-500 group-hover:text-white mx-auto mb-2" size={32} />
                        <span className="text-white font-black uppercase tracking-widest text-[10px]">Informática &<br/>Acessórios</span>
                    </div>
                </div>

                {/* Categoria 3 - Casa */}
                <div className="group relative overflow-hidden h-40 rounded-3xl border border-blue-800 cursor-pointer flex items-center justify-center">
                    <img src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=500&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Casa"/>
                    <div className="absolute inset-0 bg-blue-900/80 group-hover:bg-orange-500/90 transition-colors duration-300"></div>
                    <div className="relative z-10">
                        <Package className="text-orange-500 group-hover:text-white mx-auto mb-2" size={32} />
                        <span className="text-white font-black uppercase tracking-widest text-[10px]">Cama, Mesa<br/>& Banho</span>
                    </div>
                </div>

                {/* Categoria 4 - Ferramentas */}
                <div className="group relative overflow-hidden h-40 rounded-3xl border border-blue-800 cursor-pointer flex items-center justify-center">
                    <img src="https://images.unsplash.com/photo-1581147036324-c17ac41dfa6c?q=80&w=500&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Ferramentas"/>
                    <div className="absolute inset-0 bg-blue-900/80 group-hover:bg-orange-500/90 transition-colors duration-300"></div>
                    <div className="relative z-10">
                        <ShieldCheck className="text-orange-500 group-hover:text-white mx-auto mb-2" size={32} />
                        <span className="text-white font-black uppercase tracking-widest text-[10px]">Ferramentas &<br/>Manutenção</span>
                    </div>
                </div>

                {/* Categoria 5 - Esporte */}
                <div className="group relative overflow-hidden h-40 rounded-3xl border border-blue-800 cursor-pointer flex items-center justify-center">
                    <img src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=500&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Esporte"/>
                    <div className="absolute inset-0 bg-blue-900/80 group-hover:bg-orange-500/90 transition-colors duration-300"></div>
                    <div className="relative z-10">
                        <Zap className="text-orange-500 group-hover:text-white mx-auto mb-2" size={32} />
                        <span className="text-white font-black uppercase tracking-widest text-[10px]">Esporte &<br/>Lazer</span>
                    </div>
                </div>

                {/* Categoria 6 - Higiene */}
                <div className="group relative overflow-hidden h-40 rounded-3xl border border-blue-800 cursor-pointer flex items-center justify-center">
                    <img src="https://images.unsplash.com/photo-1584622781564-1d987f7333c1?q=80&w=500&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Limpeza"/>
                    <div className="absolute inset-0 bg-blue-900/80 group-hover:bg-orange-500/90 transition-colors duration-300"></div>
                    <div className="relative z-10">
                        <User className="text-orange-500 group-hover:text-white mx-auto mb-2" size={32} />
                        <span className="text-white font-black uppercase tracking-widest text-[10px]">Higiene &<br/>Limpeza</span>
                    </div>
                </div>

                {/* Categoria 7 - Móveis */}
                <div className="group relative overflow-hidden h-40 rounded-3xl border border-blue-800 cursor-pointer flex items-center justify-center">
                    <img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=500&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Moveis"/>
                    <div className="absolute inset-0 bg-blue-900/80 group-hover:bg-orange-500/90 transition-colors duration-300"></div>
                    <div className="relative z-10">
                        <Handshake className="text-orange-500 group-hover:text-white mx-auto mb-2" size={32} />
                        <span className="text-white font-black uppercase tracking-widest text-[10px]">Móveis &<br/>Decoração</span>
                    </div>
                </div>

                {/* Categoria 8 - Presentes */}
                <div className="group relative overflow-hidden h-40 rounded-3xl border border-blue-800 cursor-pointer flex items-center justify-center">
                    <img src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=500&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Presentes"/>
                    <div className="absolute inset-0 bg-blue-900/80 group-hover:bg-orange-500/90 transition-colors duration-300"></div>
                    <div className="relative z-10">
                        <Clock className="text-orange-500 group-hover:text-white mx-auto mb-2" size={32} />
                        <span className="text-white font-black uppercase tracking-widest text-[10px]">Presentes &<br/>Variedades</span>
                    </div>
                </div>

            </div>
        </div>
      </section>

{/* 6. CONTATO MELHORADO */}
<section id="contato" className="w-full min-h-screen flex items-center justify-center bg-white py-24">
  <div className="max-w-7xl mx-auto px-6 w-full">
    <div className="bg-slate-50 rounded-[3rem] overflow-hidden shadow-sm border border-slate-100 grid lg:grid-cols-2 items-stretch">
      
      {/* Lado Esquerdo: Texto e Infos */}
      <div className="p-12 md:p-20 space-y-10">
        <div className="space-y-4">
          <div className="bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest inline-block italic">
            Estamos Online
          </div>
          <h2 className="text-5xl font-black text-blue-900 leading-[0.9] tracking-tighter">
            PRECISA DE <br/><span className="text-orange-500">ALGO AGORA?</span>
          </h2>
          <p className="text-slate-500 font-medium text-lg max-w-sm">
            Não perca tempo com filas. Tire suas dúvidas ou faça seu pedido em segundos.
          </p>
        </div>

        <div className="space-y-4">
          <a href={`tel:84900000000`} className="group flex items-center gap-4 text-slate-700 bg-white p-5 rounded-2xl border border-slate-100 hover:border-orange-500 transition-all hover:shadow-lg">
            <div className="bg-blue-50 p-3 rounded-xl text-blue-900 group-hover:bg-orange-500 group-hover:text-white transition-colors">
              <Phone size={24} />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-bold text-slate-400">Ligue para nós</span>
              <span className="font-black text-blue-900">(84) 9XXXX-XXXX</span>
            </div>
          </a>

          <a href="mailto:contato@seujao.com.br" className="group flex items-center gap-4 text-slate-700 bg-white p-5 rounded-2xl border border-slate-100 hover:border-orange-500 transition-all hover:shadow-lg">
            <div className="bg-blue-50 p-3 rounded-xl text-blue-900 group-hover:bg-orange-500 group-hover:text-white transition-colors">
              <Mail size={24} />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-bold text-slate-400">E-mail oficial</span>
              <span className="font-black text-blue-900 italic">contato@seujao.com.br</span>
            </div>
          </a>
        </div>
      </div>

      {/* Lado Direito: Call to Action Visual */}
      <div className="bg-blue-900 relative flex flex-col items-center justify-center p-12 text-center text-white overflow-hidden">
        {/* Círculo de fundo para destaque */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-800 rounded-full opacity-20"></div>
        
        <div className="relative z-10 space-y-8 flex flex-col items-center">
          {/* Container da Imagem do Seu Jão */}
          <div className="relative">
            <div className="w-56 h-56 bg-white/10 rounded-full flex items-center justify-center border-4 border-white/10 backdrop-blur-sm overflow-hidden">
              <img 
                    src={fotoContato} 
                    alt="Atendimento Seu Jão" 
                    className="w-full h-full object-cover scale-110 translate-y-2"
                    />
            </div>
            {/* Indicador de Status Online */}
            <div className="absolute top-4 right-4 w-10 h-10 bg-green-500 rounded-full border-4 border-blue-900 animate-pulse z-20"></div>
          </div>

          <div className="space-y-3">
            <h3 className="text-3xl font-black leading-none uppercase">Compras</h3>
            <p className="text-blue-200 text-sm max-w-xs mx-auto">
              Nosso catálogo inteiro disponível na palma da sua mão. Clique abaixo e acesse nossa loja online.
            </p>
          </div>

          <a 
            href="https://seujao-shop.vercel.app/"
            className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all shadow-2xl hover:scale-105 active:scale-95 flex items-center gap-3"
            style={{ animation: 'blink-glow 2s infinite' }}
          >
             COMPRAR ONLINE <Zap size={18} fill="currentColor" />
          </a>
        </div>
      </div>

    </div>
  </div>
</section>

 {/* 7. FOOTER MELHORADO */}
      <footer className="w-full bg-slate-900 text-slate-400 py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
            
            {/* Coluna 1: Logo e Descrição */}
            <div className="space-y-6 col-span-1 md:col-span-1">
                <div className="flex items-center gap-2 uppercase font-black text-white tracking-tighter shrink-0 text-2xl">
                    <div className="bg-blue-600 p-1.5 rounded-lg text-white shadow-lg shadow-blue-600/20">
                      <User size={20} fill="currentColor" />
                    </div> 
                    Seu Jão
                </div>
                <p className="text-sm leading-relaxed text-slate-500">
                  O padrão de qualidade que Parnamirim confia. Variedade, economia e a agilidade que o seu dia a dia pede.
                </p>
                <div className="flex items-center gap-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-orange-500 hover:scale-110 transition-all duration-300">
                      <Instagram size={18} />
                    </a>
                    <a href={whatsappLink} className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-green-500 hover:scale-110 transition-all duration-300">
                      <MessageCircle size={18} />
                    </a>
                </div>
            </div>

            {/* Coluna 2: Links Rápidos */}
            <div className="space-y-6">
                <h4 className="text-white font-bold uppercase tracking-widest text-xs">Navegação</h4>
                <ul className="space-y-3 text-sm">
                    <li><a href="#inicio" className="hover:text-orange-500 transition-colors">Início</a></li>
                    <li><a href="#sobre" className="hover:text-orange-500 transition-colors">Sobre Nós</a></li>
                    <li><a href="#servicos" className="hover:text-orange-500 transition-colors">Nossos Serviços</a></li>
                    <li><a href="#parceiros" className="hover:text-orange-500 transition-colors">Categorias</a></li>
                </ul>
            </div>

            {/* Coluna 3: Contato Profissional */}
            <div className="space-y-6">
                <h4 className="text-white font-bold uppercase tracking-widest text-xs">Atendimento</h4>
                <div className="space-y-4 text-sm">
                    <div className="flex items-start gap-3">
                        <Phone size={16} className="text-orange-500 shrink-0" />
                        <span>(84) 9XXXX-XXXX</span>
                    </div>
                    <div className="flex items-start gap-3">
                        <Mail size={16} className="text-orange-500 shrink-0" />
                        <span className="break-all">contato@seujao.com.br</span>
                    </div>
                    <div className="flex items-start gap-3">
                        <MapPin size={16} className="text-orange-500 shrink-0" />
                        <span>Parnamirim, RN</span>
                    </div>
                </div>
            </div>

            {/* Coluna 4: Newsletter/Horário */}
            <div className="space-y-6">
                <h4 className="text-white font-bold uppercase tracking-widest text-xs">Horário de Funcionamento</h4>
                <div className="bg-slate-800/50 p-4 rounded-2xl border border-white/5">
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Segunda a Sexta: 08h às 18h<br/>
                      Sábado: 08h às 13h<br/>
                      <span className="text-orange-500 font-bold mt-2 block">Domingo: Fechado</span>
                    </p>
                </div>
            </div>
        </div>

        {/* Linha Final de Copyright */}
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest font-medium">
            <p>© 2024 SEUJÃO - TODOS OS DIREITOS RESERVADOS</p>
  
        </div>
      </footer>

    </div>
  );
}
