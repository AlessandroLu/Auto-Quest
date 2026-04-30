# 📐 AutoQuest - Wireframes em ASCII Art

Visualização rápida das estruturas das três telas principais.

---

## 1️⃣ HOME DASHBOARD (HomeScreen)

```
╔═════════════════════════════════════╗
║  HEADER - Verde (#388E3C)           ║
║  ┌─────────────────────────────┐    ║
║  │ Olá, João! 👋              │ 👤 │
║  │ Vamos aprender!             │    │
║  └─────────────────────────────┘    ║
║  🔥 7 dias | 🪙 2.450 moedas        ║
╠═════════════════════════════════════╣
║                                     ║
║  📌 DESAFIO DO DIA 🎯              ║
║  ╭─────────────────────────────╮   ║
║  │ PLACAS DE SINALIZAÇÃO    150🪙  │
║  │ Identifique 5 placas      │     │
║  │ Progresso: [████░░░]  3/5 │     │
║  │ ╭─────────────────────────╮│     ║
║  │ │  [JOGAR AGORA]          ││     ║
║  │ ╰─────────────────────────╯│     ║
║  ╰─────────────────────────────╯   ║
║                                     ║
║  🗺️  TRILHA DE APRENDIZADO          ║
║                                     ║
║  ┌──────────┐    ┌──────────┐      ║
║  │  65%     │    │  45%     │      ║
║  │  🎓      │    │  🚗      │      ║
║  │Conhec.  │    │Direção   │      ║
║  │Geral    │    │Segura    │      ║
║  └──────────┘    └──────────┘      ║
║                                     ║
║  ┌──────────┐    ┌──────────┐      ║
║  │  80% ⭐  │    │  🔒      │      ║
║  │  ⚖️      │    │  🔧      │      ║
║  │Legislação│   │Manutenção│      ║
║  │         │    │(bloqueado)│      ║
║  └──────────┘    └──────────┘      ║
║                                     ║
║  ╭─────────────────────────────╮   ║
║  │ 💪 Você está indo bem!      │   ║
║  │ Completou 2 de 4 módulos.   │   ║
║  │ Continue assim! 🚀           │   ║
║  ╰─────────────────────────────╯   ║
║                                     ║
╠═════════════════════════════════════╣
║ 🏠 | 📝 | 🎖️ | 👥 | ⚙️ (TAB BAR)  ║
╚═════════════════════════════════════╝
```

### Hierarquia de Informações (Home)
```
NÍVEL 1 (Máximo destaque)
   ↓
Header com saudação + Gamificação
   ↓
NÍVEL 2 (Destaque alto)
   ↓
Card "Desafio do Dia" (grande, colorido)
   ↓
NÍVEL 3 (Destaque médio)
   ↓
Trilha de Aprendizado (4 categorias)
   ↓
NÍVEL 4 (Destaque baixo)
   ↓
Card motivacional
```

---

## 2️⃣ TELA DE SIMULADO/QUIZ (QuizScreen)

```
╔═════════════════════════════════════╗
║  HEADER - Verde (#388E3C)           ║
║  Questão 3 de 10              [✕]  ║
║  [████████░░░░░░░░░░] 30%          ║
╠═════════════════════════════════════╣
║                                     ║
║  ╭─────────────────────────────╮   ║
║  │                             │   ║
║  │          🚫                 │   ║
║  │    (Imagem/Cenário)         │   ║
║  │                             │   ║
║  ╰─────────────────────────────╯   ║
║                                     ║
║  ╭─────────────────────────────╮   ║
║  │ Qual é o significado da     │   ║
║  │ placa VERMELHA com círculo? │   ║
║  ╰─────────────────────────────╯   ║
║                                     ║
║  ╭─────────────────────────────╮   ║
║  │ A │ Estacionamento proibido │   ║
║  ╰─────────────────────────────╯   ║
║                                     ║
║  ╭─────────────────────────────╮   ║
║  │ B │ Entrada proibida     ✓ │◄──┤ (Correta)
║  ╰─────────────────────────────╯   ║
║                                     ║
║  ╭─────────────────────────────╮   ║
║  │ C │ Passagem proibida        │   ║
║  ╰─────────────────────────────╯   ║
║                                     ║
║  ╭─────────────────────────────╮   ║
║  │ D │ Parada proibida          │   ║
║  ╰─────────────────────────────╯   ║
║                                     ║
║ ┌─────────────────────────────────┐ ║
║ │ 🎉 PARABÉNS!                    │ ║
║ │ Uma placa vermelha com círculo  │ ║
║ │ e barra diagonal significa      │ ║
║ │ entrada proibida naquele local. │ ║
║ │ ┌───────────────────────────┐   │ ║
║ │ │ 📹 ASSISTIR VÍDEO         │   │ ║
║ │ └───────────────────────────┘   │ ║
║ └─────────────────────────────────┘ ║
║                                     ║
║  ╭─────────────────────────────╮   ║
║  │    [PRÓXIMA QUESTÃO]        │   ║
║  ╰─────────────────────────────╯   ║
║                                     ║
╠═════════════════════════════════════╣
║ 🏠 | 📝 | 🎖️ | 👥 | ⚙️ (TAB BAR)  ║
╚═════════════════════════════════════╝
```

### Estados de Resposta

#### Antes de responder (Idle)
```
┌─────────────────────────┐
│ A │ Opção A (cinza)    │
└─────────────────────────┘
```

#### Depois de responder (Correta)
```
┌─────────────────────────┐
│ B │ Opção B (verde) ✓  │
└─────────────────────────┘
```

#### Depois de responder (Incorreta, mas a correta destacada)
```
┌─────────────────────────┐
│ C │ Opção C (vermelho) ✗│
└─────────────────────────┘

┌─────────────────────────┐
│ B │ Opção B (verde) ✓   │ ◄── Correta
└─────────────────────────┘
```

---

## 3️⃣ CARTEIRA DIGITAL (DigitalWalletScreen)

```
╔═════════════════════════════════════╗
║  HEADER - Verde (#388E3C)           ║
║  Minha CDT 🎖️                      ║
║  Carteira Digital de Trânsito       ║
╠═════════════════════════════════════╣
║                                     ║
║  ╭─────────────────────────────╮   ║
║  │ CARTEIRA DIGITAL 🚗         │   ║
║  │ AutoQuest                   │   ║
║  │                             │   ║
║  │ ┌───────┐ João Silva        │   ║
║  │ │   👤  │ Nível 5           │   ║
║  │ │       │ Condutor Prudente │   ║
║  │ └───────┘                   │   ║
║  │                             │   ║
║  │ Categoria: Nível 5          │   ║
║  │ Pontos:    🪙 2.450         │   ║
║  │ Membro:    15/01/2024       │   ║
║  │                             │   ║
║  │ [████████████░░░░░░] 75%    │   ║
║  │ Próx. Nível: Legendário     │   ║
║  ╰─────────────────────────────╯   ║
║                                     ║
║  🏆 MINHAS CONQUISTAS                ║
║     4 de 6 destravadas              ║
║                                     ║
║  ┌─────────┐  ┌─────────┐           ║
║  │   🥇   │  │   🥈   │           ║
║  │ OURO   │  │ PRATA  │           ║
║  │Estacion│  │Rodovia │           ║
║  └─────────┘  └─────────┘           ║
║                                     ║
║  ┌─────────┐  ┌─────────┐           ║
║  │   🥉   │  │   💎   │           ║
║  │ BRONZE │  │PLATINA │           ║
║  │Piloto │  │Legis │           ║
║  └─────────┘  └─────────┘           ║
║                                     ║
║  ┌─────────┐  ┌─────────┐           ║
║  │   🔒   │  │   🔒   │           ║
║  │Manutenç│  │Defensivo│          ║
║  │BLOQUEADA│ │BLOQUEADA│          ║
║  └─────────┘  └─────────┘           ║
║                                     ║
║  ╭─────────────────────────────╮   ║
║  │ 🎯 Continue estudando!      │   ║
║  │ Faltam 2 conquistas para    │   ║
║  │ desbloquear o próximo nível!│   ║
║  ╰─────────────────────────────╯   ║
║                                     ║
╠═════════════════════════════════════╣
║ 🏠 | 📝 | 🎖️ | 👥 | ⚙️ (TAB BAR)  ║
╚═════════════════════════════════════╝
```

### Hierarquia de Informações (Carteira)

```
NÍVEL 1 (Máximo destaque)
   ↓
Card "Carteira Digital" - Visual oficial
(Verde escuro, destaque principal)
   ↓
NÍVEL 2 (Destaque alto)
   ↓
Informações pessoais + Foto
   ↓
NÍVEL 3 (Destaque médio)
   ↓
Medalhas/Conquistas (grid visual)
   ↓
NÍVEL 4 (Destaque baixo)
   ↓
Card motivacional
```

---

## 📐 Componentes Visuais

### Button Estados

```
NORMAL (Primary)
╭──────────────────────╮
│ [JOGAR AGORA]        │ Verde (#388E3C)
╰──────────────────────╯

HOVER/ACTIVE
╭──────────────────────╮
│ [JOGAR AGORA]        │ Verde com sombra
╰──────────────────────╯ Opacity 80%

DISABLED
╭──────────────────────╮
│ [JOGAR AGORA]        │ Verde/Opacity 50%
╰──────────────────────╯
```

### Card Variantes

```
ELEVATED (com sombra)
╭────────────────────────╮
│ Conteúdo          ≈    │ Sombra sutil
│                        │
╰────────────────────────╯

OUTLINED (com borda)
┌────────────────────────┐
│ Conteúdo               │ Borda 1px cinza
│                        │
└────────────────────────┘

FILLED (fundo cinza)
╔════════════════════════╗
║ Conteúdo               ║ Fundo cinza claro
║                        ║
╚════════════════════════╝
```

### CircleCategory

```
        ⭐ Completo
      ╱ (canto superior)
    ╱
  🎓  (Emoji central)
  ┌──┐
  │  │ Progresso na base: [████░]
  └──┘     65%

Desbloqueado                 Bloqueado
┌──────┐                    ┌──────┐
│ 🎓  │                    │ 🔒  │ (Sobreposição)
│   │                    │ 🔧 │
│ 65% │                    │ 0%  │ (Opacidade 60%)
└──────┘                    └──────┘
```

### Medal (Conquista)

```
        DESBLOQUEADA          BLOQUEADA
        
        ✨ Glow              
       ╱  ╲              
      ╱    ╲             
    ╱   🥇   ╲           ╭─────╮
   ╱         ╲          │ 🔒  │
  │ OURO      │         │ 🥉  │
  │ Brilho    │         │ BRONZE
  │ Alto      │         │ 40% opacity
  ╰───────────╯         ╰─────╯

Mestre do           Manutentor
Estacionamento      Expert
 🅿️
```

---

## 🎨 Paleta de Cores - Referência Visual

```
PRIMÁRIAS
█ #388E3C (Verde Principal)      Ações, sucesso
█ #4CAF50 (Verde Claro)          Feedback positivo
█ #1B5E20 (Verde Escuro)         Carteira fundo

SECUNDÁRIAS
█ #FFA726 (Laranja)              Atenção, CTAs
█ #FFB74D (Laranja Claro)        Avisos leves

STATUS
█ #4CAF50 (Success - Verde)      Acertos
█ #E53935 (Error - Vermelho)     Erros
█ #FFB74D (Warning - Laranja)    Avisos
█ #1976D2 (Info - Azul)          Informações

NEUTROS
█ #FFFFFF (Branco)               Backgrounds
█ #F5F5F5 (Cinza Claro)          Secondary BG
█ #9E9E9E (Cinza)                Textos desab.
█ #212121 (Cinza Escuro)         Textos princ.

GAMIFICAÇÃO
█ #FFD700 (Ouro)                 Primeira conquista
█ #C0C0C0 (Prata)                Segunda
█ #CD7F32 (Bronze)               Terceira
█ #E5E4E2 (Platina)              Premium
```

---

## 📊 Dimensões & Espaçamento

```
BOTÕES
Small:   40px altura | Horizontal: 16px
Medium:  48px altura | Horizontal: 24px (touch-friendly)
Large:   56px altura | Horizontal: 32px

CARDS
Border Radius: 12px
Padding: 16px
Sombra: Sutil a Prominent

ÍCONES
XSmall:  16px
Small:   24px
Medium:  32px
Large:   48px
XLarge:  64px (Medalhas)

ESPAÇAMENTO (8px base)
XS:  4px
SM:  8px
MD: 16px
LG: 24px
XL: 32px
```

---

Este wireframe serve como guia visual durante o desenvolvimento. 
Todos os componentes, cores e dimensões estão documentados em DESIGN_SYSTEM.md.
