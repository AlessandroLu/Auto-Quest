# 📑 AutoQuest - Índice de Navegação & Guia Rápido

## 🎯 Comece Aqui

1. **[README.md](./README.md)** - Leia primeiro (guia geral do projeto)
2. **[BRIEFING_EXECUTIVO.md](./BRIEFING_EXECUTIVO.md)** - Resumo executivo com estatísticas
3. **[DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)** - Sistema de design completo

---

## 📱 Estrutura do Projeto

### Código Fonte

**Theme (Sistema de Design)**
- [colors.ts](./src/theme/colors.ts) - Paleta de 15+ cores
- [typography.ts](./src/theme/typography.ts) - 9 níveis tipográficos  
- [spacing.ts](./src/theme/spacing.ts) - Espaçamento, tamanhos e sombras

**Componentes Reutilizáveis**
- [Button.tsx](./src/components/Button.tsx) - 5 variantes × 3 tamanhos
- [Card.tsx](./src/components/Card.tsx) - 4 estilos diferentes
- [Header.tsx](./src/components/Header.tsx) - Header com gamificação
- [CircleCategory.tsx](./src/components/CircleCategory.tsx) - Categorias circulares
- [Medal.tsx](./src/components/Medal.tsx) - Conquistas com brilho
- [ProgressBar.tsx](./src/components/ProgressBar.tsx) - Barras de progresso
- [Badge.tsx](./src/components/Badge.tsx) - Tags e etiquetas
- [components/index.ts](./src/components/index.ts) - Exportação de componentes

**Telas Principais**
- [HomeScreen.tsx](./src/screens/HomeScreen.tsx) - Dashboard com desafio
- [QuizScreen.tsx](./src/screens/QuizScreen.tsx) - Simulado interativo
- [DigitalWalletScreen.tsx](./src/screens/DigitalWalletScreen.tsx) - Carteira Digital
- [screens/index.ts](./src/screens/index.ts) - Exportação de telas

**Navegação & Tipos**
- [BottomTabNavigator.tsx](./src/navigation/BottomTabNavigator.tsx) - Menu inferior (5 abas)
- [types/index.ts](./src/types/index.ts) - Interfaces TypeScript completas

**App Principal**
- [App.tsx](./App.tsx) - Aplicação com navegação

---

## 📚 Documentação

### Guias Principais
| Documento | Descrição | Tamanho |
|-----------|-----------|--------|
| [README.md](./README.md) | Guia geral, instalação, estrutura | 8KB |
| [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) | Sistema de design, cores, tipografia, componentes | 12KB |
| [BRIEFING_EXECUTIVO.md](./BRIEFING_EXECUTIVO.md) | Resumo executivo, estatísticas, roadmap | 11KB |
| [WIREFRAMES_ASCII.md](./WIREFRAMES_ASCII.md) | Wireframes visuais das 3 telas | 11KB |
| [ACCESSIBILITY.md](./ACCESSIBILITY.md) | Guia WCAG 2.1 AA, teste de acessibilidade | 8KB |

---

## 🎨 Design Visual

### Navegação Rápida por Tela

**🏠 HomeScreen (Dashboard)**
```
├── Header com saudação + Gamificação
├── Desafio do Dia (card grande)
├── Trilha de Aprendizado (4 categorias circulares)
└── Seção motivacional
```
📄 Ver: [WIREFRAMES_ASCII.md#1️⃣-home-dashboard](./WIREFRAMES_ASCII.md#1️⃣-home-dashboard)

**📝 QuizScreen (Simulado)**
```
├── Barra de progresso
├── Imagem/Cenário
├── Pergunta em card
├── 4 Opções de resposta
├── Feedback visual (verde/vermelho)
└── Card explicativo + vídeo
```
📄 Ver: [WIREFRAMES_ASCII.md#2️⃣-tela-de-simuladoquiz](./WIREFRAMES_ASCII.md#2️⃣-tela-de-simuladoquiz)

**🎖️ DigitalWalletScreen (Carteira)**
```
├── Card verde CNH simulada
├── Informações do usuário
├── Foto/Avatar
├── Grid de 6 conquistas
├── Progresso para próximo nível
└── Seção motivacional
```
📄 Ver: [WIREFRAMES_ASCII.md#3️⃣-carteira-digital](./WIREFRAMES_ASCII.md#3️⃣-carteira-digital)

---

## 🎨 Paleta de Cores

### Quick Reference

| Uso | Cor | Hex |
|-----|-----|-----|
| Primário | Verde | `#388E3C` |
| Sucesso | Verde Claro | `#4CAF50` |
| Atenção | Laranja | `#FFA726` |
| Erro | Vermelho | `#E53935` |
| Texto Principal | Cinza Escuro | `#212121` |
| Fundo | Branco | `#FFFFFF` |

📄 Ver: [DESIGN_SYSTEM.md#-paleta-de-cores](./DESIGN_SYSTEM.md#-paleta-de-cores)

---

## 🏆 Componentes

### Lista Completa

| Componente | Arquivo | Variantes | Uso |
|-----------|---------|-----------|-----|
| **Button** | Button.tsx | 5 variantes × 3 tamanhos | CTAs e ações |
| **Card** | Card.tsx | 4 estilos | Contêineres de conteúdo |
| **Header** | Header.tsx | - | Topo com gamificação |
| **CircleCategory** | CircleCategory.tsx | Desbloqueado/Bloqueado | Categorias de aprendizado |
| **Medal** | Medal.tsx | 4 cores (Ouro/Prata/Bronze/Platina) | Conquistas |
| **ProgressBar** | ProgressBar.tsx | Linear/Circular | Indicadores de progresso |
| **Badge** | Badge.tsx | 6 cores | Tags e etiquetas |
| **BottomTabNavigator** | BottomTabNavigator.tsx | 5 abas | Menu inferior |

📄 Ver guias detalhados em: [DESIGN_SYSTEM.md#🎯-componentes-principais](./DESIGN_SYSTEM.md#🎯-componentes-principais)

---

## 🔤 Tipografia

### Escala Tipográfica

```
32px - Display (Títulos muito grandes)
28px - H1 (Títulos principais)
24px - H2 (Títulos secundários)
20px - H3 (Subtítulos)
16px - Body1 (Texto padrão)
14px - Body2 (Texto secundário)
14px - Label (Botões)
12px - Caption (Texto pequeno)
11px - Overline (Etiquetas)
```

📄 Ver: [DESIGN_SYSTEM.md#📝-tipografia--hierarquia](./DESIGN_SYSTEM.md#📝-tipografia--hierarquia)

---

## ♿ Acessibilidade

### Checklist Rápido

- ✅ Contraste WCAG AA (4.5:1)
- ✅ Touch-friendly (48px+ botões)
- ✅ Alto contraste em textos
- ✅ Feedback visual múltiplo (não apenas cores)
- ✅ Ícones com labels descritivos

📄 Guia completo: [ACCESSIBILITY.md](./ACCESSIBILITY.md)

---

## 🚀 Como Começar

### Instalação Rápida

```bash
# 1. Navegue para o projeto
cd "/media/alessandro/Sata SSD/Projects/AutoQuest"

# 2. Instale dependências
npm install

# 3. Inicie o app
npm start

# 4. Escolha plataforma:
# Android: npm run android
# iOS: npm run ios
# Web: npm run web
```

📄 Ver: [README.md#-como-rodar](./README.md#-como-rodar)

---

## 📋 Tipos TypeScript

### Interfaces Principais

```typescript
// User
interface User {
  id: string;
  name: string;
  level: number;
  coins: number;
  streak: number;
  totalXP: number;
}

// Question
interface Question {
  id: string;
  title: string;
  options: { id: string; text: string }[];
  correctAnswerId: string;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

// Achievement
interface Achievement {
  id: string;
  title: string;
  emoji: string;
  color: 'gold' | 'silver' | 'bronze' | 'platinum';
  isUnlocked: boolean;
}
```

📄 Ver todos: [src/types/index.ts](./src/types/index.ts)

---

## 🎮 Gamificação

### Elementos

- 🔥 **Streaks**: Dias seguidos de estudo
- 🪙 **Moedas**: Moeda virtual acumulada
- 🏆 **Medalhas**: Ouro, Prata, Bronze, Platina
- ⭐ **Conclusão**: Marca de módulos completos
- 🎯 **Desafio Diário**: Questão destacada com recompensa
- 📈 **Níveis**: Progressão de nível a cada 500 pontos

📄 Ver: [DESIGN_SYSTEM.md#🎮-padrões-de-gamificação](./DESIGN_SYSTEM.md#🎮-padrões-de-gamificação)

---

## 🔄 Roadmap

### Sprint 2 - Placeholder Screens
- [ ] Tela Comunidade
- [ ] Tela Configurações
- [ ] Integração com navegação

### Sprint 3 - Animações  
- [ ] Lottie animations
- [ ] Transições
- [ ] Micro-interações

### Sprint 4 - Backend
- [ ] API integration
- [ ] Autenticação
- [ ] Persistência de dados

### Sprint 5 - Enhancements
- [ ] Dark mode
- [ ] Internacionalização
- [ ] Analytics

📄 Ver completo: [BRIEFING_EXECUTIVO.md#-próximos-passos-roadmap](./BRIEFING_EXECUTIVO.md#-próximos-passos-roadmap)

---

## 📞 Buscar por Tópico

### Cor/Design
- Paleta de cores: [DESIGN_SYSTEM.md#-paleta-de-cores](./DESIGN_SYSTEM.md#-paleta-de-cores)
- Tipografia: [DESIGN_SYSTEM.md#📝-tipografia--hierarquia](./DESIGN_SYSTEM.md#📝-tipografia--hierarquia)
- Espaçamento: [DESIGN_SYSTEM.md#-espaçamento-material-design---escala-8px](./DESIGN_SYSTEM.md#-espaçamento-material-design---escala-8px)
- Componentes: [DESIGN_SYSTEM.md#🎯-componentes-principais](./DESIGN_SYSTEM.md#🎯-componentes-principais)

### Código
- Componentes: [src/components/](./src/components/)
- Telas: [src/screens/](./src/screens/)
- Tipos: [src/types/](./src/types/)
- Tema: [src/theme/](./src/theme/)

### Documentação
- Wireframes: [WIREFRAMES_ASCII.md](./WIREFRAMES_ASCII.md)
- Acessibilidade: [ACCESSIBILITY.md](./ACCESSIBILITY.md)
- Briefing: [BRIEFING_EXECUTIVO.md](./BRIEFING_EXECUTIVO.md)

---

## 🎯 Estatísticas

```
✅ Componentes:        7
✅ Telas Principais:   3
✅ Arquivos TS/TSX:   17
✅ Linhas de Código:  1500+
✅ Documentação:      5 arquivos (50KB+)
✅ Sistema de Design: 50+ tokens
✅ Contraste WCAG:    100%
```

---

## ✨ Diferenciais

1. 🎨 **Design Moderno** - Similar a Duolingo, mas para trânsito
2. 🎮 **Gamificação Profunda** - Streaks, moedas, medals, níveis
3. 📱 **CNH Digital Simulada** - Elemento único e motivador
4. ♿ **Acessibilidade** - WCAG AA compliance completo
5. 🎯 **Feedback Imediato** - Respostas com explicações
6. 📚 **Documentação Extensiva** - 5 documentos + código comentado

---

## 🎓 Para Desenvolvedores

### Adicionar Novo Componente

1. Crie arquivo em `src/components/NovoComponente.tsx`
2. Use cores de `src/theme/colors.ts`
3. Use tipografia de `src/theme/typography.ts`
4. Use espaçamento de `src/theme/spacing.ts`
5. Exporte em `src/components/index.ts`

### Adicionar Nova Tela

1. Crie arquivo em `src/screens/NovaScreen.tsx`
2. Use componentes de `src/components/`
3. Exporte em `src/screens/index.ts`
4. Adicione navegação em `App.tsx`

### Boas Práticas

✅ TypeScript para tudo  
✅ Componentes funcionais  
✅ Reutilização de temas (colors, typography, spacing)  
✅ Prop drilling mínimo  
✅ Comentários para lógica complexa  

---

## 📄 Arquivo Summary

| Arquivo | Linhas | Descrição |
|---------|--------|-----------|
| App.tsx | ~70 | App principal com navegação |
| Button.tsx | ~80 | Componente Button |
| Card.tsx | ~50 | Componente Card |
| Header.tsx | ~120 | Componente Header gamificado |
| CircleCategory.tsx | ~110 | Componente Categoria circular |
| Medal.tsx | ~110 | Componente Medal/Conquista |
| ProgressBar.tsx | ~90 | Componente ProgressBar |
| Badge.tsx | ~70 | Componente Badge |
| HomeScreen.tsx | ~180 | Tela Home Dashboard |
| QuizScreen.tsx | ~280 | Tela Quiz Simulado |
| DigitalWalletScreen.tsx | ~230 | Tela Carteira Digital |
| BottomTabNavigator.tsx | ~70 | Navegação Bottom Tab |
| colors.ts | ~80 | Paleta de cores |
| typography.ts | ~80 | Sistema tipográfico |
| spacing.ts | ~70 | Espaçamento e tamanhos |
| types/index.ts | ~130 | Tipos TypeScript |

---

## 🔗 Links Rápidos

### Documentação
- [README.md](./README.md) - Leia primeiro ⭐
- [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) - Sistema de design
- [BRIEFING_EXECUTIVO.md](./BRIEFING_EXECUTIVO.md) - Resumo executivo
- [WIREFRAMES_ASCII.md](./WIREFRAMES_ASCII.md) - Visualizações
- [ACCESSIBILITY.md](./ACCESSIBILITY.md) - Acessibilidade

### Código Fonte
- [src/](./src/) - Código fonte completo
- [src/components/](./src/components/) - Componentes
- [src/screens/](./src/screens/) - Telas
- [src/theme/](./src/theme/) - Sistema de design
- [src/types/](./src/types/) - Tipos TypeScript

---

🎉 **Bem-vindo ao AutoQuest!**

Comece pelo [README.md](./README.md) e explore a documentação.

**Versão**: 1.0.0 | **Data**: 29 de abril de 2026

