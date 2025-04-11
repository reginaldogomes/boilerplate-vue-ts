# 🚀 Boilerplate Vue 3 + TypeScript + Tailwind 4

Este projeto é um boilerplate moderno e minimalista para desenvolvimento com **Vue 3** e **TypeScript**, com suporte a JSX, Tailwind CSS 4, Pinia, Router, testes com Vitest e Playwright, e boas práticas com ESLint + Prettier.

---

## 📦 Tecnologias e Ferramentas

- ✅ **Vue 3** + **TypeScript**
- 🎨 **Tailwind CSS 4**
- 🧠 **Pinia** (State Management)
- 🌐 **Vue Router** (SPA)
- 🧪 **Vitest** (Unit tests)
- 🎭 **Playwright** (E2E tests)
- 🧹 **ESLint** + **Prettier**
- ⚙️ **Vite** (Build tool)
- ✅ **JSX Support** via `@vitejs/plugin-vue-jsx`

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

## 🧱 Estrutura do Projeto

```
src/
├── assets/              # Imagens, ícones, fontes, etc.
├── components/          # Componentes reutilizáveis
├── layouts/             # Layouts com header/footer
├── pages/               # Páginas do app
├── router/              # Configuração de rotas
├── store/               # Gerenciamento de estado (Pinia)
├── styles/              # Arquivos CSS/Tailwind
├── App.vue              # Componente raiz
└── main.ts              # Ponto de entrada
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
