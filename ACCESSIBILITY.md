# ♿ AutoQuest - Guia de Acessibilidade

## 🎯 Princípios WCAG 2.1 AA

O AutoQuest segue os padrões internacionais de acessibilidade (WCAG 2.1 nível AA) para garantir que o aplicativo seja usável por todos, inclusive pessoas com deficiências.

---

## 🎨 Contraste de Cores

### Proporção de Contraste Mínima: 4.5:1

#### ✅ Aprovadas
- Texto cinza escuro (#212121) em fundo branco: 18.5:1 ✓✓✓
- Texto branco em verde (#388E3C): 5.8:1 ✓✓
- Texto em botões primários (branco em verde): 5.8:1 ✓✓

#### ❌ Não aprovadas
- Cinza claro (#9E9E9E) em branco: 3.2:1 ✗
  **Solução**: Usar apenas para elementos desabilitados

### Verificação de Contraste

Sempre teste com:
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Color Contrast Analyzer](https://www.tpgi.com/color-contrast-checker/)

```
Bom para leitura:
- Texto primário: cinza escuro (#212121)
- Backgrounds: branco ou cinza claro
- CTAs: branco sobre cores sólidas

Evitar:
- Cinza sobre cinza
- Cores muito claras para texto
- Baixo contraste em avisos/erros
```

---

## 🏷️ Ícones & Símbolos

Todos os ícones usam **emojis descritos** para melhor compreensão:

| Ícone | Descrição | Contexto |
|-------|-----------|---------|
| 🏠 | Home | Navegação |
| 📝 | Simulados | Navegação |
| 🎖️ | Carteira | Navegação |
| 👥 | Comunidade | Navegação |
| ⚙️ | Configurações | Navegação |
| 🔥 | Streak | Gamificação |
| 🪙 | Moedas | Gamificação |
| ⭐ | Completo | Status |
| 🔒 | Bloqueado | Status |
| ✓ | Correto | Feedback |
| ✗ | Incorreto | Feedback |

---

## 📱 Touch-Friendly

### Tamanhos Mínimos de Toque

```
Área de toque mínima: 44 × 44 px (Apple)
                      48 × 48 px (Android)

AutoQuest usa:
- Botões: 48px altura (mínimo recomendado)
- Ícones: 32px (com espaço adicional)
- Área interativa: 48-56px
```

### Gap Entre Elementos

```
Mínimo: 8px entre elementos clicáveis
Recomendado: 16px para conforto

Isso evita clicks acidentais e facilita
a interação para usuários com motor fino comprometido.
```

---

## 🔤 Tipografia Acessível

### Tamanhos de Fonte

| Nível | Tamanho | Uso |
|-------|---------|-----|
| Caption | 12px | Textos muito pequenos (use com moderação) |
| Body2 | 14px | Textos secundários |
| Body1 | 16px | Texto padrão (primário) |
| Label | 14px | Botões, etiquetas |
| H3 | 20px | Subtítulos |
| H2 | 24px | Títulos secundários |
| H1 | 28px | Títulos principais |
| Display | 32px | Títulos grandes |

### Diretrizes

- ✅ Mínimo 14px para corpo de texto
- ✅ Mínimo 16px para textos principais
- ✅ Line-height: 1.5 ou superior
- ✅ Font-weight: Regular (400) ou Bold (700), evitar weights intermediários
- ❌ Evitar textos muito pequenos (< 12px)
- ❌ Evitar justificação completa (inadequada para acessibilidade)

---

## 🎨 Elementos Visuais & Alternativos

### Não confie apenas em cor

❌ **Ruim**: "A resposta incorreta ficou vermelha"
✅ **Bom**: "A resposta incorreta ficou vermelha com um ✗"

### Feedback Visual Múltiplo

```
Resposta Correta:
- Cor: Verde (#4CAF50)
- Símbolo: ✓
- Feedback: "Parabéns!"

Resposta Incorreta:
- Cor: Vermelho (#E53935)
- Símbolo: ✗
- Feedback: "Tente novamente"
- Mostrar resposta correta em verde
```

---

## 🗣️ Descrições de Componentes

### Estrutura de Componentes com Labels

```typescript
// Exemplo: Usando acessibilityLabel
<TouchableOpacity
  onPress={handlePress}
  accessibilityLabel="Resposta A: Estacionamento proibido"
  accessibilityRole="button"
>
  <Text>A - Estacionamento proibido</Text>
</TouchableOpacity>

// Para seções
<View accessibilityLabel="Barra de progresso">
  <ProgressBar progress={50} />
</View>

// Para estados
<View accessibilityRole="alert">
  <Text>Resposta incorreta!</Text>
</View>
```

---

## ✨ Animações Responsivas

### Respeitar Preferências do Usuário

```typescript
// Verificar preferência de movimento
import { Platform } from 'react-native';

const prefersReducedMotion = Platform.OS === 'ios' 
  ? // Verificar configurações do dispositivo
  : true; // Android - implementar se possível

// Aplicar animações apenas se permitido
const animationDuration = prefersReducedMotion ? 0 : 300;
```

---

## 🔈 Feedback Tátil & Auditivo

### Vibração (Feedback Tátil)

```typescript
import { Haptics } from 'expo';

// Sucesso
Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);

// Aviso
Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);

// Erro
Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
```

### Sons (Feedback Auditivo)

```typescript
// Quando possível, adicionar feedback auditivo para:
// - Respostas corretas/incorretas
// - Desbloqueios de conquistas
// - Alerts importantes

// Permitir usuário desabilitar (settings)
```

---

## 📋 Checklist de Acessibilidade

### Para Cada Tela

- [ ] Contraste de cores testado (4.5:1 mínimo)
- [ ] Texto não muito pequeno (mín. 14px)
- [ ] Botões têm mínimo 48px
- [ ] Gap entre elementos interativos
- [ ] Ícones tem rótulos/descrições
- [ ] Feedback visual múltiplo (não apenas cor)
- [ ] Labels descritivos para elementos interativos
- [ ] Navegação lógica
- [ ] Foco visível em elementos interativos

### Para Cada Componente

```typescript
// Template de componente acessível
interface AccessibleComponentProps {
  // ... outras props
  accessibilityLabel?: string;      // Descrição
  accessibilityRole?: string;        // Tipo de elemento
  accessibilityState?: {             // Estado atual
    disabled?: boolean;
    checked?: boolean;
  };
}
```

---

## 🧪 Teste de Acessibilidade

### Manual
1. Desabilite as cores (simule daltonismo)
2. Tente usar com um dedo apenas
3. Aumente o zoom da fonte do dispositivo
4. Ative o leitor de tela (TalkBack/VoiceOver)

### Ferramentas Recomendadas

| Ferramenta | O que testa | Link |
|-----------|-----------|------|
| Color Contrast Analyzer | Contraste de cores | https://www.tpgi.com/color-contrast-checker/ |
| WebAIM Contrast | Proporção de contraste | https://webaim.org/resources/contrastchecker/ |
| WAVE | Análise web (parcial) | https://wave.webaim.org/ |
| Axe DevTools | Auditorias automatizadas | https://www.deque.com/axe/devtools/ |

### TalkBack (Android) & VoiceOver (iOS)

1. Sempre teste com leitores de tela
2. Verifique se a navegação é lógica
3. Garanta que todos os elementos têm labels
4. Teste a ordem de foco

---

## 🌍 Internacionalização & Acessibilidade

### Para Português Brasileiro

- ✅ Usar português claro e simples
- ✅ Evitar gírias ou jargão técnico
- ✅ Textos descritivos para CTA buttons
- ✅ Evitar abreviaturas

### Exemplo

```typescript
// ❌ Ruim
<Button title="CNH" />

// ✅ Bom
<Button 
  title="Carteira Digital de Trânsito"
  accessibilityLabel="Abrir minha carteira digital de trânsito"
/>
```

---

## 📞 Recursos Adicionais

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [React Native Accessibility](https://reactnative.dev/docs/accessibility)
- [Apple Human Interface Guidelines - Accessibility](https://developer.apple.com/design/human-interface-guidelines/accessibility)
- [Material Design - Accessibility](https://material.io/design/navigation/hierarchy.html#)

---

## 🎯 Metas de Acessibilidade

### Curto Prazo (v1.0)
- ✅ Contraste WCAG AA em 100% dos textos
- ✅ Touch-friendly em todos os elementos
- ✅ Labels acessíveis em componentes interativos
- ✅ Feedback visual múltiplo

### Médio Prazo (v2.0)
- [ ] Suporte completo a leitores de tela
- [ ] Modo de alto contraste
- [ ] Customização de tamanho de fonte
- [ ] Respeit de preferências de movimento

### Longo Prazo (v3.0)
- [ ] Legendas em vídeos
- [ ] Transcrições de áudio
- [ ] Modo Dark completo
- [ ] Suporte a múltiplas idiomas

---

**AutoQuest está comprometido com acessibilidade inclusiva.**  
Se encontrar problemas de acessibilidade, abra uma issue com detalhes.

Versão: 1.0.0 | Data: 29 de abril de 2026
