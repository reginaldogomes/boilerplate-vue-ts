# 🚀 Rest Countries API

## Projeto de Visualização de Países

Esta aplicação web interativa foi desenvolvida como parte de uma avaliação técnica com o objetivo de demonstrar habilidades em desenvolvimento front-end moderno, utilizando Vue 3, TypeScript, Composition API e Tailwind CSS.

O sistema permite a visualização e exploração de dados geográficos de forma eficiente e acessível, consumindo informações em tempo real a partir da API pública [REST Countries](https://restcountries.com/). A interface é responsiva, com foco em desempenho, usabilidade e boa experiência do usuário.

## Funcionalidades

- 🔎 **Busca em tempo real** por nome de país
- 📊 **Ordenação dinâmica** por nome ou população
- 📄 **Paginação incremental**, exibindo 12 países por vez com opção de "ver mais"
- 🗺️ **Visualização direta de dados** como bandeira, nome, capital e população na lista
- 🏅 **Ranking dos 12 países mais populosos**, com visualização destacada

---

## 📦 Tecnologias e Ferramentas

- ⚙️ **Vue 3 Composition API + TypeScript**
- 🔗 **Axios** para requisições HTTP
- 🎨 **Tailwind CSS 4**
- 🧠 **Pinia** (State Management)
- 🌍 **Vue Router** (SPA)
- 🧪 **Vitest** (Testes unitários)
- 🎭 **Playwright** (Testes E2E)
- 🧹 **ESLint + Prettier** (Code style)
- ⚡ **Vite** (Ferramenta de build)
- ✨ **JSX Support** via `@vitejs/plugin-vue-jsx`

---

## 🛠️ Scripts disponíveis

```bash
npm run dev         # Inicia o servidor de desenvolvimento
npm run build       # Gera a versão de produção
npm run preview     # Visualiza a build em um servidor local
npm run lint        # Corrige erros de lint automaticamente
npm run format      # Formata o código com Prettier
npm run type-check  # Verifica os tipos TypeScript
npm run test:unit   # Executa testes unitários com Vitest
npm run test:e2e    # Executa testes E2E com Playwright
```

---

## ✨ Começando

```bash
# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

---

## 🤖 Testes

- ✅ **Unitários** com [Vitest](https://vitest.dev)
- ✅ **End-to-End** com [Playwright](https://playwright.dev)

```bash
npm run test:unit   # Testes unitários
npm run test:e2e    # Testes de ponta a ponta
```

---

## 📐 Lint & Format

```bash
npm run lint      # Corrige automaticamente problemas de lint
npm run format    # Formata os arquivos com Prettier
```

---

## 📘 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

Feito por Reginaldo Gomes
