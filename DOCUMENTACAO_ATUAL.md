# Documentacao Atual - Landing Page Alcateia

## 1) Visao geral

Este repositorio contem a landing institucional da Alcateia e a pagina dedicada do produto `SOS Maringa`.

Objetivos:
- apresentar marca e proposta de valor;
- mostrar projetos em destaque;
- direcionar visitantes para contato comercial;
- detalhar o produto SOS Maringa em rota propria.

## 2) Estrutura

```text
landing-page/
|- .github/
|  |- dependabot.yml
|  |- workflows/
|     |- ci-security.yml
|     |- secret-scan.yml
|     |- codeql.yml
|- webapp/
|  |- src/
|  |  |- components/
|  |  |  |- NavMenu.tsx
|  |  |  |- Rodape.tsx
|  |  |- pages/
|  |  |  |- App.tsx
|  |  |  |- SosMaringaPage.tsx
|  |  |  |- main.tsx
|  |  |- styles/
|  |     |- App.css
|  |     |- NavMenu.css
|  |     |- Rodape.css
|  |     |- SosMaringaPage.css
|  |- package.json
|  |- package-lock.json
|- README.md
|- SECURITY.md
|- DOCUMENTACAO_ATUAL.md
```

## 3) Stack

- React 19 + TypeScript
- Vite 7
- react-router-dom (roteamento)
- ESLint
- npm

Dependencias centrais:
- `react`
- `react-dom`
- `react-router-dom`

## 4) Front-end atual

### Rotas

- `/` -> landing principal
- `/projetos/sos-maringa` -> pagina detalhada do produto SOS Maringa

### Pagina principal (`webapp/src/pages/App.tsx`)

Secoes:
1. Hero
2. Segmentos/Confianca
3. Sobre
4. Missao, visao e valores
5. Projetos
6. Contato
7. Rodape

No card de projetos, `SOS Maringa` direciona para a pagina dedicada do produto.

### Pagina de produto (`webapp/src/pages/SosMaringaPage.tsx`)

Conteudo:
- problema que o app resolve;
- publico-alvo;
- funcionalidades principais;
- status do MVP;
- CTA para contato.

Comportamento:
- ao abrir a rota, a pagina inicia no topo (`scrollTo(0,0)`).

### Navegacao (`webapp/src/components/NavMenu.tsx`)

- menu desktop e mobile;
- links para secoes da landing (`/#...`);
- CTA `Vamos conversar` direcionando para `/#contatos`;
- fechamento com `Escape` e bloqueio de scroll no menu mobile aberto.

## 5) Execucao local

```bash
cd webapp
npm install
npm run dev
```

Comandos de qualidade:

```bash
cd webapp
npm run lint
npm run build
```

## 6) CI e seguranca

Pipelines ativos em GitHub Actions:
- `ci-security.yml` (lint + build + audit)
- `secret-scan.yml` (TruffleHog OSS)
- `codeql.yml` (analise estatica)

Dependabot configurado para:
- npm em `/webapp`
- GitHub Actions no repositorio

## 7) Deploy

Deploy em Vercel.

Projeto validado:
- `https://alcateiatec.vercel.app`

## 8) Pendencias recomendadas

1. Manter padrao de copy institucional na pagina dedicada de produto.
2. Revisar periodicamente CTA e textos de conversao.
3. Opcional: adicionar analytics para acompanhar origem de contatos.
