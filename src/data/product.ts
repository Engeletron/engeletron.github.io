export const eetx433a = {
  partNumber: 'EETX433A',
  freq: '433.92 MHz', power: '+13 dBm (ajustável)', keys: '1 a 6',
  encoding: 'Código fixo · 1.000.000 códigos', txTime: '800 ms – 5 s',
  oscillator: 'Interno (sem cristal/SAW)', protocol: 'Compatível HT6P20B',
  programming: 'Não requer (pronto p/ uso)', package: 'SOIC‑8 (150/50 mil), SMD',
  supply: 'Tape & reel — 4.000 pç/rolo (MOQ)',
  glb: '/assets/SOIC-8-web.glb',
  whatsapp: 'https://wa.me/5541999042212',
  email: 'danilo@engeletron.com.br',
} as const;

// Datasheets por idioma (PDF) — servidos de public/assets/datasheets/
export const datasheets: Record<string, string> = {
  pt: '/assets/datasheets/EETX433A_pt-BR.pdf',
  en: '/assets/datasheets/EETX433A_en-US.pdf',
  es: '/assets/datasheets/EETX433A_es-ES.pdf',
  zh: '/assets/datasheets/EETX433A_zh-CN.pdf',
};

// Downloads de datasheet ATIVADOS (PDFs revisados publicados 2026-06-02). Mude para false para desativar.
export const datasheetsEnabled = true;

// Notas de aplicação (PDF) — cada nota documenta um produto real feito com o EETX433A.
// Servidas de public/assets/appnotes/; originais em assets/application_notes/.
// Cada nota tem os 4 idiomas (mesmos locales dos datasheets). Título/descrição = i18n
// (`product.docs.an.<id>.label` / `.sub`). Mude appNotesEnabled p/ false para ocultar a subseção.
export const appNotesEnabled = true;
export const anLocale: Record<string, string> = { pt: 'pt-BR', en: 'en-US', es: 'es-ES', zh: 'zh-CN' };
export const appNotes = [
  { id: 'tx',      prefix: 'AN-TX',      icon: '🔑', version: 'v1.0' },
  { id: 'mag',     prefix: 'AN-MAG',     icon: '🧲', version: 'v1.1' },
  { id: 'pir',     prefix: 'AN-PIR',     icon: '🚶', version: 'v1.0' },
  { id: 'txflash', prefix: 'AN-TXFLASH', icon: '🚗', version: 'v1.0' },
] as const;
export const advantagesEliminated = ['Cristal SMD 3225 (XTAL)','Ressonador SAW SMD','2× diodo LL4148 (MiniMELF)','Diodo duplo BAV70 (SOT‑23)'];
export const applications = [
  {icon:'🚪', key:'gates'}, {icon:'🚨', key:'alarms'}, {icon:'🔑', key:'access'},
];

// Valores de especificação localizados (PT é o padrão em `eetx433a`; aqui só os
// campos com palavras — freq/txTime/package são neutros e não precisam de tradução).
export const eetx433aI18n: Record<string, Record<string, string>> = {
  en: { power:'+13 dBm (adjustable)', keys:'1 to 6', encoding:'Fixed code · 1,000,000 codes', oscillator:'Internal (no crystal/SAW)', protocol:'HT6P20B compatible', programming:'Not required (ready to use)', supply:'Tape & reel — 4,000 pcs/reel (MOQ)' },
  es: { power:'+13 dBm (ajustable)', keys:'1 a 6', encoding:'Código fijo · 1.000.000 códigos', oscillator:'Interno (sin cristal/SAW)', protocol:'Compatible HT6P20B', programming:'No requiere (listo para usar)', supply:'Tape & reel — 4.000 pzs/carrete (MOQ)' },
  zh: { power:'+13 dBm（可调）', keys:'1～6', encoding:'固定码 · 100万种编码', oscillator:'内置（无晶振/SAW）', protocol:'兼容 HT6P20B', programming:'无需（开箱即用）', supply:'Tape & reel — 4,000 颗/卷（MOQ）' },
};
export const advantagesEliminatedI18n: Record<string, string[]> = {
  en: ['SMD 3225 crystal (XTAL)','SMD SAW resonator','2× LL4148 diode (MiniMELF)','BAV70 dual diode (SOT‑23)'],
  es: ['Cristal SMD 3225 (XTAL)','Resonador SAW SMD','2× diodo LL4148 (MiniMELF)','Diodo doble BAV70 (SOT‑23)'],
  zh: ['SMD 3225 晶振（XTAL）','SMD SAW 谐振器','2× LL4148 二极管（MiniMELF）','BAV70 双二极管（SOT‑23）'],
};
