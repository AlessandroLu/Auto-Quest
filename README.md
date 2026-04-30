<<<<<<< HEAD
# Auto-Quest
=======
# 🚗 AutoQuest - Aplicativo de Educação em Trânsito Gamificado

## 📱 Visão Geral

AutoQuest é um aplicativo mobile gamificado desenvolvido em **React Native** que ensina legislação de trânsito e direção defensiva para novos condutores no Brasil. Com um design moderno similar ao Duolingo e elementos de gamificação robustos, o app torna a aprendizagem interativa e motivadora.

**Público-alvo**: Jovens brasileiros tirando CNH, novos condutores  
**Plataforma**: iOS e Android (via React Native + Expo)  
**Versão**: 1.0.0 (Protótipo de Alta Fidelidade)

---

## ✨ Características Principais

### 🎯 Gamificação
- **Streaks**: Acompanhamento de dias seguidos de estudo com ícone de fogo
- **Moedas Virtuais**: Acumule moedas realizando desafios
- **Conquistas/Badges**: Desbloqueáveis (Ouro, Prata, Bronze, Platina)
- **Desafio do Dia**: Questão destacada com recompensa especial
- **Níveis**: Progresso de nível a cada 500 pontos

### 📚 Educação
- **Quiz Interativo**: Múltipla escolha com feedback imediato
- **Feedback Visual**: Respostas corretas/incorretas com explicações
- **Vídeos Explicativos**: Links para material extra
- **Trilha de Aprendizado**: 4 categorias (Conhecimento, Direção, Legislação, Manutenção)

### 📋 Telas Principais
1. **Home Dashboard**: Saudação personalizada, desafio do dia, trilha de aprendizado
2. **Simulado/Quiz**: Interface interativa com feedback imediato
3. **Carteira Digital**: Perfil gamificado simulando a CNH brasileira

---

## 🎨 Design System (Material Design + Duolingo)

### Paleta de Cores
- **Verde** (#388E3C): Ações primárias, sucesso
- **Laranja** (#FFA726): Alertas, atenção, gamificação
- **Branco/Cinzas**: Backgrounds e neutralidade
- **Status**: Verde (sucesso), Vermelho (erro), Laranja (aviso)

### Tipografia
- 9 níveis (Display até Overline)
- Alto contraste para acessibilidade
- Fonte padrão do sistema

### Componentes
- **Button**: 5 variantes × 3 tamanhos
- **Card**: 4 estilos
- **Header**: Com gamificação integrada
- **ProgressBar**: Linear e circular
- **CircleCategory**: Categorias com progresso
- **Medal**: Conquistas desbloqueáveis

---

## 📁 Estrutura do Projeto

```
AutoQuest/
├── src/
│   ├── theme/
│   │   ├── colors.ts          # Paleta de cores
│   │   ├── typography.ts      # Tipografia
│   │   └── spacing.ts         # Espaçamento e tamanhos
│   ├── components/            # Componentes reutilizáveis
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Header.tsx
│   │   ├── CircleCategory.tsx
│   │   ├── Medal.tsx
│   │   ├── ProgressBar.tsx
│   │   └── index.ts
│   ├── screens/               # Telas principais
│   │   ├── HomeScreen.tsx     # Dashboard
│   │   ├── QuizScreen.tsx     # Simulado
│   │   ├── DigitalWalletScreen.tsx  # Carteira
│   │   └── index.ts
│   ├── navigation/
│   │   └── BottomTabNavigator.tsx  # Menu inferior
│   ├── types/
│   │   └── index.ts           # Tipos TypeScript
│   └── utils/                 # Funções utilitárias
├── assets/                    # Imagens e ícones
├── App.tsx                    # Aplicação principal
├── app.json                   # Configuração Expo
├── package.json
├── tsconfig.json
├── DESIGN_SYSTEM.md           # Guia do sistema de design
└── README.md                  # Este arquivo

```

---

## 🚀 Como Rodar

### Pré-requisitos
- Node.js 18+
- npm ou yarn
- Expo CLI (`npm install -g expo-cli`)

### Instalação

```bash
# 1. Clone ou navegue para o diretório
cd /media/alessandro/Sata\ SSD/Projects/AutoQuest

# 2. Instale dependências
npm install

# 3. Inicie o app
npm start

# 4. Para plataforma específica:
npm run android   # Android
npm run ios       # iOS
npm run web       # Web (browser)
```

### Estrutura de Pastas para Extensão

Ao adicionar novas features:

```bash
# Nova tela
src/screens/NovaScreen.tsx

# Novo componente
src/components/NovoComponente.tsx

# Novo contexto/hooks
src/utils/useNovoHook.ts

# Novos tipos
src/types/novosTipos.ts
```

---

## 📱 Navegação (Bottom Tab Menu)

```
┌────────────────────────────┐
│  [Conteúdo da Tela]        │
├────────────────────────────┤
│ 🏠 | 📝 | 🎖️ | 👥 | ⚙️  │
└────────────────────────────┘
```

- **🏠 Home**: Dashboard principal
- **📝 Simulados**: Quiz interativo
- **🎖️ Carteira**: Perfil gamificado
- **👥 Comunidade**: Planejado para Sprint 2
- **⚙️ Configurações**: Planejado para Sprint 2

---

## 🎮 Mecânicas de Gamificação

### Sistema de Pontos
- Questão Fácil: 10 pontos
- Questão Média: 25 pontos
- Questão Difícil: 50 pontos
- Desafio do Dia: Bônus +150 moedas

### Níveis
```
Nível 1 - Novato (0-500 pontos)
Nível 2 - Aprendiz (500-1000)
Nível 3 - Intermediário (1000-1500)
Nível 4 - Avançado (1500-2000)
Nível 5 - Condutor Prudente (2000+)
```

### Streaks & Motivação
- 🔥 7+ dias: "Incrível!"
- 🔥 14+ dias: "Extraordinário!"
- 🔥 30+ dias: "Lendário!"

---

## 🔧 Tecnologias

- **Framework**: React Native
- **Runtime**: Expo
- **Linguagem**: TypeScript
- **Styling**: React Native StyleSheet
- **Componentes**: Customizados (sem dependências externas)

### Dependências Principais
```json
{
  "expo": "~54.0.33",
  "expo-status-bar": "~3.0.9",
  "react": "19.1.0",
  "react-native": "0.81.5"
}
```

---

## 📚 Documentação Adicional

- **[DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)**: Guia completo do sistema de design, cores, tipografia, componentes
- **[src/types/index.ts](./src/types/index.ts)**: Interfaces TypeScript e tipos do aplicativo
- **[src/theme/](./src/theme/)**: Configurações de cores, tipografia e espaçamento

---

## 🎯 Roadmap Futuro

### Sprint 2
- [ ] Tela de Comunidade/Ranking
- [ ] Tela de Configurações
- [ ] Animações com Lottie
- [ ] Notificações push

### Sprint 3
- [ ] Dark Mode
- [ ] Histórico de respostas
- [ ] Relatório de progresso detalhado

### Sprint 4
- [ ] Integração com backend
- [ ] Sincronização em nuvem
- [ ] Internacionalização (pt-BR, en, es)

### Sprint 5
- [ ] Multiplayer/Competição
- [ ] Social features
- [ ] Analytics e tracking

---

## 👨‍💻 Desenvolvimento

### Convenções de Código
- **Components**: PascalCase, arquivos separados
- **Hooks/Utils**: camelCase
- **Types**: PascalCase, suffix `Type` ou interface
- **Screens**: `NameScreen.tsx`

### Exemplo de Novo Componente

```typescript
import React from 'react';
import { View, Text } from 'react-native';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';

interface MyComponentProps {
  title: string;
  onPress?: () => void;
}

export const MyComponent: React.FC<MyComponentProps> = ({
  title,
  onPress,
}) => {
  return (
    <View>
      <Text style={{ ...typography.h3, color: colors.textPrimary }}>
        {title}
      </Text>
    </View>
  );
};

export default MyComponent;
```

---

## 🐛 Troubleshooting

### Erro: "Cannot find module"
```bash
rm -rf node_modules package-lock.json
npm install
```

### Erro no Expo
```bash
expo start --clear
```

### Problema de Performance
- Remova logs console em produção
- Use `memo()` para componentes complexos
- Implemente virtualização em listas longas (FlatList)

---

## 📞 Suporte & Contato

Para dúvidas ou sugestões sobre o design ou implementação:

1. Consulte [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)
2. Verifique a estrutura de tipos em [src/types/](./src/types/)
3. Abra uma issue no repositório

---

## 📄 Licença

Este projeto é de propriedade da AutoQuest Inc. Todos os direitos reservados.

---

**Desenvolvido com ❤️ para novos condutores brasileiros**  
**AutoQuest v1.0.0 - Protótipo de Alta Fidelidade**  
**Data**: 29 de abril de 2026
>>>>>>> master
