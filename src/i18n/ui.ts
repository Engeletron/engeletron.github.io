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
