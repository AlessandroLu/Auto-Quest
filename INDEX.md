# AutoQuest - Índice de Navegação & Guia Rápido

## Comece Aqui

1. **[README.md](./README.md)** - Leia primeiro (guia geral do projeto)
2. **[DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)** - Sistema de design completo

---

## Estrutura do Projeto

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

## Documentação

### Guias Principais

| Documento                              | Descrição                                         |
| -------------------------------------- | ------------------------------------------------- |
| [README.md](./README.md)               | Guia geral, instalação, estrutura                 |
| [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) | Sistema de design, cores, tipografia, componentes |

---

## Design Visual

### Navegação Rápida por Tela

** HomeScreen (Dashboard)**

```
├── Header com saudação + Gamificação
├── Desafio do Dia (card grande)
├── Trilha de Aprendizado (4 categorias circulares)
└── Seção motivacional
```

** QuizScreen (Simulado)**

```
├── Barra de progresso
├── Imagem/Cenário
├── Pergunta em card
├── 4 Opções de resposta
├── Feedback visual (verde/vermelho)
└── Card explicativo + vídeo
```

** DigitalWalletScreen (Carteira)**

```
├── Card verde CNH simulada
├── Informações do usuário
├── Foto/Avatar
├── Grid de 6 conquistas
├── Progresso para próximo nível
└── Seção motivacional
```

---

## Paleta de Cores

### Quick Reference

| Uso             | Cor          | Hex       |
| --------------- | ------------ | --------- |
| Primário        | Verde        | `#388E3C` |
| Sucesso         | Verde Claro  | `#4CAF50` |
| Atenção         | Laranja      | `#FFA726` |
| Erro            | Vermelho     | `#E53935` |
| Texto Principal | Cinza Escuro | `#212121` |
| Fundo           | Branco       | `#FFFFFF` |

---

## 🏆 Componentes

### Lista Completa

| Componente             | Arquivo                | Variantes                           | Uso                       |
| ---------------------- | ---------------------- | ----------------------------------- | ------------------------- |
| **Button**             | Button.tsx             | 5 variantes × 3 tamanhos            | CTAs e ações              |
| **Card**               | Card.tsx               | 4 estilos                           | Contêineres de conteúdo   |
| **Header**             | Header.tsx             | -                                   | Topo com gamificação      |
| **CircleCategory**     | CircleCategory.tsx     | Desbloqueado/Bloqueado              | Categorias de aprendizado |
| **Medal**              | Medal.tsx              | 4 cores (Ouro/Prata/Bronze/Platina) | Conquistas                |
| **ProgressBar**        | ProgressBar.tsx        | Linear/Circular                     | Indicadores de progresso  |
| **Badge**              | Badge.tsx              | 6 cores                             | Tags e etiquetas          |
| **BottomTabNavigator** | BottomTabNavigator.tsx | 5 abas                              | Menu inferior             |

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
