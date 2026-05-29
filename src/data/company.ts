// Estrutura societária Engeletron (fonte única). Os rótulos de papel
// ("Desenvolvido por" / "Comercializado por") ficam no i18n (company.role.*).
export const companies = {
  developer: { name: 'Engeletron Engenharia Elétrica Ltda', cnpj: '37.912.040/0001-10' },
  seller:    { name: 'Engeletron Comércio e Importação Ltda', cnpj: '54.338.273/0001-70' },
} as const;

export const companyCity = 'Matinhos‑PR';

// Endereço compartilhado pelas duas empresas — NÃO exibido no site por ora (decisão do dono):
// Av. Beira Mar, 9009, Sala 1, Balneário Albatroz — Matinhos‑PR, CEP 83260‑000
