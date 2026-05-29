export const languages = { pt: 'Português', en: 'English', es: 'Español', zh: '中文' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'pt';

export const ui = {
  pt: {
    'nav.products':'Produtos','nav.tech':'Tecnologia','nav.apps':'Aplicações',
    'nav.company':'Empresa','nav.contact':'Contato','cta.sample':'Solicitar amostra',
    'home.hero.eyebrow':'◢ Fabless RF Semiconductor · Brasil',
    'home.hero.title.a':'Projetamos o ','home.hero.title.em':'silício','home.hero.title.b':' que transmite.',
    'home.hero.tag':'Circuitos integrados de RF em 433.92 MHz para controles, alarmes e acesso — sem cristal, sem SAW, sem diodos. Da Engeletron, engenharia brasileira.',
    'cta.knowProduct':'Conheça o EETX433A','cta.whatsapp':'WhatsApp','cta.email':'E‑mail','cta.viewProduct':'Ver produto',
    'silicon.eyebrow':'◢ Projetamos o silício',
    'silicon.title.a':'Do projeto do CI ao ','silicon.title.em':'wafer fabricado e cortado','silicon.title.b':'.',
    'silicon.lead':'A Engeletron não apenas usa chips — nós projetamos o circuito integrado. O EETX433A nasce como um die em lâmina de silício, fabricado em wafer e cortado em milhares de unidades, encapsuladas em SOIC‑8.',
    'silicon.br.title':'🇧🇷 Brasil — Engeletron','silicon.br.body':'A ideia, a arquitetura de RF e o projeto/IP do EETX433A são nossos, feitos no Brasil.',
    'silicon.cn.title':'🌏 Parceiros — China','silicon.cn.body':'A produção do wafer e o encapsulamento são feitos por foundries parceiras na China, que reúnem o equipamento, a equipe e o custo necessários para produzir com qualidade.',
    'silicon.fabless':'Modelo fabless, com transparência: o projeto e a propriedade do EETX433A são da Engeletron; a fabricação fica com parceiros que têm a estrutura para isso — como operam as maiores empresas de chips do mundo.',
    'silicon.br.eyebrow':'◢ Concepção & Projeto',
    'silicon.cn.eyebrow':'◢ Fabricação & Wafer',
    'silicon.point1.label':'Projeto do die',
    'silicon.point1.body':'arquitetura de RF, oscilador interno e codificação, em silício.',
    'silicon.point2.label':'Fabricação em wafer',
    'silicon.point2.body':'centenas de dies por lâmina.',
    'silicon.point3.label':'Corte (dicing)',
    'silicon.point3.body':'a lâmina é serrada em chips individuais.',
    'silicon.point4.label':'Encapsulamento',
    'silicon.point4.body':'cada die vira um EETX433A em SOIC‑8, pronto para produção.',
    'silicon.wafer.caption':'Wafer de silício · fabricação e dicing',
    'silicon.step1.title':'Projeto','silicon.step1.body':'Design do CI de RF',
    'silicon.step2.title':'Wafer','silicon.step2.body':'Fabricação em lâmina',
    'silicon.step3.title':'Dicing','silicon.step3.body':'Corte em chips',
    'silicon.step4.title':'EETX433A','silicon.step4.body':'SOIC‑8 pronto',
    'spec.freq':'Frequência de operação','spec.power':'Potência de saída',
    'spec.keys':'Número de teclas','spec.encoding':'Codificação',
    'spec.txTime':'Tempo de transmissão','spec.oscillator':'Oscilador',
    'spec.protocol':'Protocolo','spec.programming':'Gravação na produção',
    'spec.package':'Encapsulamento','spec.supply':'Fornecimento',
    'adv.bad.heading':'✕ Solução convencional exige',
    'adv.good.heading':'✓ Com o EETX433A',
    'adv.benefit1':'Oscilador interno — sem cristal e sem SAW',
    'adv.benefit2':'Matriz de até 6 teclas — sem diodos',
    'adv.benefit3':'Pronto para uso — sem gravação',
    'adv.benefit4':'Menos BOM · placa menor · menor custo',
    'app.gates.title':'Portões eletrônicos',
    'app.gates.body':'Controles remotos para portões automáticos residenciais e prediais.',
    'app.alarms.title':'Alarmes',
    'app.alarms.body':'Armar/desarmar alarmes residenciais e automotivos via RF.',
    'app.access.title':'Controle de acesso',
    'app.access.body':'Chaveiros e transmissores para sistemas de acesso.',
    'product.card.partnumber':'Part number',
    'product.card.keys':'teclas',
    'product.card.comb':'comb.',
    'product.card.art':'[ chip 3D / foto do produto ]',
    'contact.cta.eyebrow':'◢ Vamos conversar',
    'contact.cta.title':'Solicite uma amostra do EETX433A',
    'contact.cta.sub':'Cadastro rápido · amostras e datasheet · ou fale direto conosco.',
  },
  en: {}, es: {}, zh: {},
} as const;

export function useTranslations(lang: Lang) {
  return function t(key: keyof typeof ui['pt']): string {
    return (ui[lang] as Record<string,string>)[key] ?? ui.pt[key];
  };
}
export function getLangFromUrl(url: URL): Lang {
  const seg = url.pathname.split('/')[1];
  return (seg in languages ? seg : defaultLang) as Lang;
}
