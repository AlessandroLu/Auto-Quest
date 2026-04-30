# 🎨 AutoQuest - Sistema de Design & Guia Visual

## Visão Geral

AutoQuest é um aplicativo mobile gamificado para ensinar legislação de trânsito e direção defensiva no Brasil. O design segue princípios de **Material Design**, com inspiração no estilo visual do Duolingo, adaptado ao universo automotivo.

---

## 📊 Paleta de Cores

### Cores Primárias
- **Verde Principal**: `#388E3C` - Sucesso, acertos, ações primárias
- **Verde Claro**: `#4CAF50` - Sinalização positiva, feedback
- **Verde Escuro**: `#1B5E20` - Fundo da Carteira Digital

### Cores Secundárias (Atenção/Gamificação)
- **Laranja Principal**: `#FFA726` - Alertas, atração visual, CTAs secundárias
- **Laranja Claro**: `#FFB74D` - Avisos leves, badges

### Cores Neutras
- **Branco**: `#FFFFFF` - Limpeza visual, backgrounds
- **Cinza Claro**: `#F5F5F5` - Backgrounds secundários
- **Cinza**: `#9E9E9E` - Textos desabilitados
- **Cinza Escuro**: `#212121` - Textos principais

### Status
- **Sucesso**: `#4CAF50` (Verde)
- **Erro**: `#E53935` (Vermelho)
- **Aviso**: `#FFB74D` (Laranja)
- **Informação**: `#1976D2` (Azul)

### Gamificação
- **Ouro**: `#FFD700`
- **Prata**: `#C0C0C0`
- **Bronze**: `#CD7F32`
- **Platina**: `#E5E4E2`

---

## 📝 Tipografia & Hierarquia

### Escala Tipográfica
```
Display    32px | Bold (700)   → Títulos muito grandes
H1         28px | Bold (700)   → Títulos principais
H2         24px | Bold (700)   → Títulos secundários
H3         20px | Semi-Bold (600) → Subtítulos
Body1      16px | Regular (400) → Texto principal
Body2      14px | Regular (400) → Texto secundário
Caption    12px | Regular (400) → Texto pequeno
Label      14px | Semi-Bold (600) → Botões, etiquetas
Button     16px | Semi-Bold (600) → CTAs (maiúsculas)
Overline   11px | Semi-Bold (600) → Pequenas etiquetas
```

### Hierarquia de Informações

#### Tela Home (Dashboard)
1. **Nível 1** - Header com saudação personalizada
2. **Nível 2** - Card "Desafio do Dia" (maior destaque)
3. **Nível 3** - Trilha de Aprendizado (4 categorias circulares)
4. **Nível 4** - Seção motivacional

#### Tela Quiz
1. **Nível 1** - Barra de progresso no topo
2. **Nível 2** - Imagem/Cenário do trânsito
3. **Nível 3** - Pergunta em card
4. **Nível 4** - Opções de resposta (grandes, touch-friendly)
5. **Nível 5** - Feedback visual após resposta

#### Tela Carteira Digital
1. **Nível 1** - Card verde da carteira (visual oficial)
2. **Nível 2** - Informações do usuário
3. **Nível 3** - Conquistas em grid de medalhas
4. **Nível 4** - Seção motivacional

---

## 🎯 Componentes Principais

### Button
**Variantes**: `primary` | `secondary` | `success` | `error` | `outline`
**Tamanhos**: `small` (40px) | `medium` (48px) | `large` (56px)
**Features**:
- Arredondado (24px border-radius)
- Sombra sutil
- Feedback tátil (activeOpacity 0.8)
- touch-friendly

### Card
**Variantes**: `elevated` | `default` | `filled` | `outlined`
**Features**:
- Border-radius: 12px
- Padding: 16px
- Sombra configurável

### Header
**Components**:
- Saudação personalizada com nome
- Avatar circular com borda colorida
- Indicador de Streak (🔥) com dias
- Indicador de Moedas (🪙) com total
- Fundo verde primário

### CircleCategory
**Features**:
- Círculo de 100px
- Progresso percentual na base
- Badge de conclusão (⭐) se completo
- Ícone de cadeado (🔒) se bloqueado
- Emoji representando a categoria

### Medal (Conquistas)
**Colors**: `gold` | `silver` | `bronze` | `platinum`
**Features**:
- Círculo de 80px
- Efeito de glow
- Sombra prominent
- Desbloqueável/Bloqueável

### ProgressBar
**Variantes**: `linear` | `circular`
**Temas**: `success` | `warning` | `error` | `info`
**Tamanhos**: `small` | `medium` | `large`

---

## 🎮 Padrões de Gamificação

### Feedback Visual Imediato
- **Resposta Correta**: Opção fica com fundo verde, checkmark aparece
- **Resposta Incorreta**: Opção fica com fundo vermelho, X aparece
- **Resposta Correta Destacada**: A opção correta fica verde mesmo que errada

### Elementos Motivacionais
- 🔥 Streak - Dias seguidos de estudo
- 🪙 Moedas - Moeda virtual acumulada
- 🏆 Medalhas - Conquistas desbloqueáveis
- ⭐ Estrelas - Conclusão de módulos
- 🎯 Desafios - Desafio diário com recompensa

### Recompensas
- Pontos por questão (varia por dificuldade)
- Moedas por desafio completado
- Unlock de conquistas ao atingir marcos
- Aumento de nível a cada 500 pontos

---

## 🎨 Espaçamento (Material Design - Escala 8px)

```
XS     4px   → Pequeno gap entre elementos
SM     8px   → Gap padrão
MD    16px   → Padding padrão, gap principal
LG    24px   → Padding de container
XL    32px   → Gap entre seções
XXL   48px   → Gap grande entre blocos
XXXL  64px   → Espaço muito grande
```

---

## 🎬 Acessibilidade

### Alto Contraste
- Textos primários em cinza escuro (`#212121`) sobre branco
- Textos em botões em branco sobre cores sólidas
- Novos condutores (jovens) têm visão geralmente boa, mas mantemos padrão WCAG AA

### Touch-Friendly
- Altura mínima de botões: 48px
- Altura mínima de áreas clicáveis: 44px
- Gap mínimo entre elementos clicáveis: 8px

### Ícones Intuitivos
- 🏠 Home
- 📝 Simulados
- 🎖️ Carteira
- 👥 Comunidade
- ⚙️ Configurações
- 🎓 Conhecimento
- 🚗 Direção
- ⚖️ Legislação
- 🔧 Manutenção

---

## 📱 Estrutura das Telas

### 1. Home Dashboard (HomeScreen)
```
┌─────────────────────────────┐
│  [Header com Streak/Moedas] │ (Verde)
├─────────────────────────────┤
│ Desafio do Dia 🎯           │
│ ┌───────────────────────┐   │
│ │ Placas de Sinalização │   │
│ │ Identifique 5 placas  │ 150🪙│
│ │ [Progresso: ████░░░]  │   │
│ │ [JOGAR AGORA]         │   │
│ └───────────────────────┘   │
│                             │
│ Trilha de Aprendizado 🗺️   │
│  🎓 🚗                      │
│  ⚖️ 🔧 (bloqueado)          │
│                             │
│ [Motivação/Progresso]       │
│                             │
└─────────────────────────────┘
│ 🏠🏠 | 📝 | 🎖️ | 👥 | ⚙️ │ (Tab Bar)
```

### 2. Tela de Quiz/Simulado (QuizScreen)
```
┌─────────────────────────────┐
│ Questão 3 de 10        [✕] │ (Verde)
│ [████████░░░░░░░░░░]        │
├─────────────────────────────┤
│                             │
│ ┌─────────────────────┐     │
│ │          🚫         │     │
│ └─────────────────────┘     │
│                             │
│ Qual é o significado da     │
│ placa vermelha com círculo? │
│                             │
│ ┌─────────────────────┐     │
│ │ A │ Estacionar...  │     │
│ └─────────────────────┘     │
│ ┌─────────────────────┐     │
│ │ B │ Entrada proib..│ ✓   │
│ └─────────────────────┘     │
│ ┌─────────────────────┐     │
│ │ C │ Passagem...    │     │
│ └─────────────────────┘     │
│ ┌─────────────────────┐     │
│ │ D │ Parada...      │     │
│ └─────────────────────┘     │
│                             │
│ 🎉 Parabéns!                │
│ Uma placa vermelha com...   │
│ [📹 Assistir Vídeo]         │
│ [PRÓXIMA]                   │
└─────────────────────────────┘
```

### 3. Carteira Digital (DigitalWalletScreen)
```
┌─────────────────────────────┐
│ Minha CDT 🎖️                │ (Verde)
│ Carteira de Trânsito        │
├─────────────────────────────┤
│ ┌───────────────────────┐   │
│ │  CARTEIRA DIGITAL 🚗  │   │ (Verde escuro)
│ │ AutoQuest             │   │
│ │ ┌─────┐               │   │
│ │ │ 👤 │ João Silva     │   │
│ │ └─────┘ Nível 5       │   │
│ │ [████████████░░░░░░]  │   │
│ │ Situação: Condutor... │   │
│ └───────────────────────┘   │
│                             │
│ Minhas Conquistas 🏆        │
│ 4 de 6 destravadas          │
│ 🥇 🥈 🥉 💎                 │
│ 🔒 🔒                       │
│                             │
│ Continue estudando! 🎯       │
└─────────────────────────────┘
```

---

## 🎨 Estados Visuais

### Button States
- **Default**: Cor cheia, sombra sutil
- **Hover/Active**: Opacity 0.8, sombra mais pronunciada
- **Disabled**: Opacity 0.5, sem interação
- **Loading**: Texto "Carregando..."

### Card States
- **Elevated**: Sombra medium, sem borda
- **Outlined**: Sem sombra, borda 1px
- **Filled**: Background cinza claro

### Resposta em Quiz
- **Idle**: Background cinza claro
- **Respondida (Correta)**: Checkmark verde, fundo 22% verde
- **Respondida (Incorreta)**: X vermelho, fundo 22% vermelho, mas correta destácada
- **Respondida (Destacada)**: Green 100%, sem X

---

## 🚀 Próximos Passos (Roadmap Visual)

1. **Sprint 1 (Atual)**: Protótipo de alta fidelidade (3 telas)
2. **Sprint 2**: Telas de Comunidade/Ranking + Configurações
3. **Sprint 3**: Animações e transições (Lottie)
4. **Sprint 4**: Temas personalizados (Dark Mode)
5. **Sprint 5**: Internacionalização (i18n)

---

## 📋 Checklist de Implementação

### Componentes Base
- ✅ Button (5 variantes × 3 tamanhos)
- ✅ Card (4 variantes)
- ✅ ProgressBar (2 variantes)
- ✅ Badge (6 cores)
- ✅ Header (com gamificação)
- ✅ CircleCategory
- ✅ Medal

### Telas
- ✅ HomeScreen (Desafio + Trilha + Motivação)
- ✅ QuizScreen (Pergunta + Opções + Feedback)
- ✅ DigitalWalletScreen (Carteira + Conquistas)
- ⏳ PlaceholderScreens (Comunidade, Configurações)

### Sistema de Design
- ✅ Cores (primárias, secundárias, status, gamificação)
- ✅ Tipografia (9 níveis)
- ✅ Espaçamento (7 nívéis)
- ✅ Sombras (3 níveis)
- ✅ Tamanhos padrão

---

## 🎯 Princípios de Design

1. **Clareza**: Hierarquia visual clara e intuitiva
2. **Motivação**: Elementos gamificados em todos os lugares
3. **Simplicidade**: Menos elementos, mais impacto
4. **Acessibilidade**: Alto contraste, tamanhos touch-friendly
5. **Consistência**: Utilizamos Material Design como base
6. **Foco**: Jovem no Brasil tirando CNH - interface clara para este público

---

## 📞 Suporte

Para dúvidas sobre o design system ou para novas solicitações, consulte este documento ou abra uma issue no repositório.

**Versão**: 1.0.0  
**Data**: 29 de abril de 2026  
**Designer**: UX/UI Mobile Specialist  
