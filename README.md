# AutoQuest - Aplicativo de Educação em Trânsito Gamificado

## Visão Geral

AutoQuest é um aplicativo mobile gamificado desenvolvido em **React Native** que ensina legislação de trânsito e direção defensiva para novos condutores no Brasil. Com um design moderno similar ao Duolingo e elementos de gamificação robustos, o app torna a aprendizagem interativa e motivadora.

**Público-alvo**: Jovens brasileiros tirando CNH, novos condutores  
**Plataforma**: iOS e Android (via React Native + Expo)

---

## Características Principais

### Gamificação

- **Streaks**: Acompanhamento de dias seguidos de estudo com ícone de fogo
- **Moedas Virtuais**: Acumule moedas realizando desafios
- **Conquistas/Badges**: Desbloqueáveis (Ouro, Prata, Bronze, Platina)
- **Desafio do Dia**: Questão destacada com recompensa especial
- **Níveis**: Progresso de nível

### Educação

- **Quiz Interativo**: Múltipla escolha com feedback imediato
- **Feedback Visual**: Respostas corretas/incorretas com explicações
- **Vídeos Explicativos**: Links para material extra
- **Trilha de Aprendizado**: 4 categorias (Conhecimento, Direção, Legislação, Manutenção)

### Telas Principais

1. **Home Dashboard**: Saudação personalizada, desafio do dia, trilha de aprendizado
2. **Simulado/Quiz**: Interface interativa com feedback imediato

---

## Como Rodar

### Pré-requisitos

- Node.js 18+
- npm ou yarn
- Expo CLI (`npm install -g expo-cli`)

### Instalação

```bash
# 1. Clone o repositório do projeto
git clone https://github.com/AlessandroLu/Auto-Quest
cd Auto-Quest

# 2. Instale dependências
npm install

# 3. Inicie o app
npm start

# 4. Para plataforma específica:
npm run android   # Android
npm run ios       # iOS
npm run web       # Web (browser)
```

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

<<<<<<< HEAD

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

> > > > > > > # master
> > > > > > >
> > > > > > > master
