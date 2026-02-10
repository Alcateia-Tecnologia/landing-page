# Documentacao Atual do Projeto

## 1) Visao geral

Este repositorio contem a landing page institucional da **ALCATEIA**.

Objetivo principal:
- apresentar marca, proposta de valor e servicos;
- destacar projeto em evidencia (SOS Maringa);
- converter visitantes em contato comercial.

Estado atual:
- front-end React + TypeScript + Vite;
- layout moderno e responsivo;
- navegacao desktop e mobile (menu hamburguer);
- pipeline de seguranca configurada em GitHub Actions.

---

## 2) Estrutura do repositorio

```text
/
|- .github/
|  |- dependabot.yml
|  |- workflows/
|     |- ci-security.yml
|     |- secret-scan.yml
|     |- codeql.yml
|- webapp/
|  |- public/
|  |- src/
|  |  |- components/
|  |  |- pages/
|  |  |- styles/
|  |- package.json
|  |- package-lock.json
|- README.md
|- SECURITY.md
|- DOCUMENTACAO_ATUAL.md
```

---

## 3) Stack tecnica

- **Runtime/front-end:** React 19
- **Linguagem:** TypeScript
- **Bundler/dev server:** Vite 7
- **Lint:** ESLint 9
- **Gerenciador de pacotes:** npm

Dependencias centrais (webapp/package.json):
- `react`
- `react-dom`
- `vite`
- `typescript`
- `eslint`

---

## 4) Front-end atual (resumo funcional)

### Pagina principal
Arquivo: `webapp/src/pages/App.tsx`

Secoes principais:
1. Hero (marca ALCATEIA, proposta de valor, CTA)
2. Bloco de confianca/segmentos
3. Sobre
4. Missao, visao e valores
5. Projetos
6. Contato
7. Rodape

### Navegacao
Arquivo: `webapp/src/components/NavMenu.tsx`

Recursos implementados:
- menu desktop com links por ancora;
- CTA "Vamos conversar";
- menu mobile hamburguer;
- fechamento com `Escape`;
- fechamento automatico ao clicar em item;
- bloqueio de scroll do body quando menu mobile esta aberto;
- comportamento responsivo por breakpoint.

### Rodape
Arquivo: `webapp/src/components/Rodape.tsx`

- assinatura de marca "ALCATEIA";
- links rapidos;
- contatos;
- ano dinamico.

---

## 5) Como executar localmente

### Requisitos
- Node.js (recomendado: versao 22, alinhada com CI)
- npm

### Desenvolvimento
```bash
cd webapp
npm install
npm run dev
```

### Qualidade e build
```bash
cd webapp
npm run lint
npm run build
```

### Preview da build
```bash
cd webapp
npm run preview
```

---

## 6) Pipelines e seguranca (GitHub Actions)

### CI Security Gate
Arquivo: `.github/workflows/ci-security.yml`

Executa em push (main, cursor/**, feature/**, fix/**) e PR para main:
- install (`npm ci`)
- lint
- build
- audit (`npm audit --audit-level=moderate`)

### Secret Scan
Arquivo: `.github/workflows/secret-scan.yml`

Executa scan de segredos com **TruffleHog OSS** em push/PR.

### CodeQL
Arquivo: `.github/workflows/codeql.yml`

Executa analise estatica de seguranca para JavaScript/TypeScript:
- push na main
- PR para main
- execucao agendada (cron semanal)

### Dependabot
Arquivo: `.github/dependabot.yml`

Atualizacao automatica semanal para:
- dependencias npm (`/webapp`)
- GitHub Actions (`/`)

---

## 7) Politica de seguranca

Arquivo: `SECURITY.md`

Contem:
- versoes suportadas;
- canal de reporte privado de vulnerabilidades;
- controles de seguranca configurados;
- checklist de protecoes recomendadas para branch `main`.

---

## 8) Branches e governanca

Fluxo recomendado:
- desenvolvimento em branch de trabalho;
- PR para `main`;
- checks obrigatorios verdes antes de merge.

Importante:
- o repositorio teve hardening de pipeline;
- nao ha mais estrategia de merge automatico direto para `main`;
- protecoes de branch em nivel GitHub (rulesets/branch protection) devem ser confirmadas pelo owner/admin do repositorio.

---

## 9) Contato institucional

- Email: `corporativo.alcateia@outlook.com`
- Telefone: `(44) 99903-5478`

---

## 10) Proximos passos sugeridos

1. Ativar/confirmar protecoes de branch na `main` no painel do GitHub.
2. Exigir os checks:
   - `lint-build-audit`
   - `trufflehog`
   - `CodeQL`
3. Revisar e atualizar o `README.md` raiz (hoje esta desatualizado em alguns pontos de stack).
4. Criar uma secao de changelog para facilitar historico de entregas.
