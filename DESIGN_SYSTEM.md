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
