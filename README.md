# 🍻 Boteco do Gordinho - React

![Boteco do Gordinho](./images/logobranca.png)

Site do Boteco do Gordinho transformado em uma aplicação React moderna e responsiva!

## 🚀 Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para construção de interfaces
- **Vite** - Build tool rápida e moderna
- **React Router DOM** - Sistema de rotas para navegação
- **CSS3** - Estilização moderna e responsiva

## ✨ Características

### Funcionalidades
- ✅ Single Page Application (SPA)
- ✅ Sistema de rotas com React Router
- ✅ Componentes reutilizáveis
- ✅ Design responsivo para mobile e desktop
- ✅ **Menu hambúrguer em telas pequenas**
- ✅ Modal interativo para detalhes dos produtos
- ✅ Slider de imagens nos produtos
- ✅ Formulário de contato funcional
- ✅ Integração com Google Maps
- ✅ Vídeo do YouTube incorporado

### Design Premium ✨
- ✅ **Paleta de cores original restaurada**
- ✅ **Animações suaves e elegantes** (15+ animações customizadas)
- ✅ **Gradientes modernos** em backgrounds e botões
- ✅ **Efeitos de hover sofisticados** em todos elementos
- ✅ **Tipografia premium** (Segoe UI)
- ✅ **Micro-interações** para melhor UX
- ✅ **Sombras profundas** para efeito 3D
- ✅ **Transições suaves** com cubic-bezier
- ✅ **Barra de rolagem customizada**
- ✅ **Parallax effect** no banner
- ✅ **Cards com animação sequencial**
- ✅ **Modal com backdrop blur**

## 📁 Estrutura do Projeto

```
Boteco_Do_Gordinho/
├── src/
│   ├── components/          # Componentes reutilizáveis
│   │   ├── Header.jsx       # Cabeçalho com navegação
│   │   ├── Footer.jsx       # Rodapé
│   │   └── ProductModal.jsx # Modal de detalhes do produto
│   ├── pages/              # Páginas da aplicação
│   │   ├── Home.jsx        # Página inicial
│   │   ├── Produtos.jsx    # Página de produtos/cardápio
│   │   └── Contato.jsx     # Página de contato
│   ├── App.jsx             # Componente principal
│   ├── main.jsx            # Ponto de entrada
│   └── index.css           # Estilos globais
├── images/                 # Imagens e assets
├── index.html             # HTML principal
├── package.json           # Dependências
└── vite.config.js         # Configuração do Vite
```

## 🛠️ Instalação e Execução

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Passo a Passo

1. **Instale as dependências:**
```bash
npm install
```

2. **Execute o servidor de desenvolvimento:**
```bash
npm run dev
```

3. **Acesse no navegador:**
```
http://localhost:3000
```

### Outros Comandos

```bash
# Criar build de produção
npm run build

# Visualizar build de produção
npm run preview
```

## 📱 Páginas

### 🏠 Home
- Banner principal com call-to-action
- Seção "Sobre Nós" com descrição do restaurante
- Localização com mapa interativo
- Prévia dos produtos
- Vídeo promocional

### 🍽️ Produtos
- Grid responsivo de produtos
- Cards interativos com hover effects
- Modal com slider de imagens
- Detalhes completos de cada produto

### 📞 Contato
- Formulário completo de contato
- Validação de campos obrigatórios
- Opções de preferência de contato
- Newsletter opt-in

## 🎨 Personalização

### Cores Principais (Paleta Original)
- **Verde Escuro:** `#2d5016` - Header, Footer, Títulos
- **Bege Claro:** `#f5f1e8` - Textos sobre fundos escuros
- **Dourado:** `#d4af37` - Destaques, Bordas, Ícones
- **Vermelho:** `#c41e3a` - Botões, Preços, CTAs
- **Bege:** `#e8e2d4` - Fundos de cards
- **Verde Médio:** `#5a7c32` - Hover effects
- **Amarelo Claro:** `#ffeaa3` - Hover em botões

### Gradiente de Fundo
```css
background: linear-gradient(90deg, rgba(41, 64, 30, 1) 0%, rgba(57, 130, 29, 1) 100%);
```

### Fontes
- Tahoma, Arial, sans-serif

📄 **Veja o arquivo `PALETA_DE_CORES.md` para referência completa**

## 📦 Dependências

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.20.0"
}
```

## 🌐 Deploy

Para fazer deploy da aplicação:

1. Execute o build:
```bash
npm run build
```

2. A pasta `dist` conterá todos os arquivos otimizados para produção

3. Faça upload da pasta `dist` para seu servidor ou serviço de hospedagem (Vercel, Netlify, etc)

## 📝 Notas de Desenvolvimento

- As imagens dos produtos estão sendo carregadas de URLs externas
- O projeto mantém a estrutura original de pastas de imagens
- Os estilos foram modularizados por componente
- React Router DOM gerencia toda a navegação
- **Menu hambúrguer ativado automaticamente em telas menores que 768px**
- **Paleta de cores original do site foi mantida e aprimorada**
- **Design completamente renovado com foco em elegância e profissionalismo**
- **15+ animações CSS customizadas para experiência premium**
- **Todas as transições otimizadas com cubic-bezier para movimento natural**
- **Barra de rolagem customizada com gradiente da marca**

📄 **Veja `MELHORIAS_VISUAIS.md` para detalhes completos das melhorias de design**

## 🤝 Contribuindo

Sinta-se à vontade para contribuir com melhorias:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## 📄 Licença

Todos os direitos reservados © Boteco Do Gordinho 2025

## 📧 Contato

- 📱 WhatsApp: 11 93453-3432
- 📧 Email: boteco.gordinho@gmail.com
- 📍 Endereço: R. Itapiru, 298 - Vila da Saúde, São Paulo - SP, 13320-030

---

Desenvolvido com ❤️ para o Boteco do Gordinho
