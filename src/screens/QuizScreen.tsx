import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
  Animated,
} from 'react-native';
import { Button, Card, ProgressBar } from '../components';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';
import { sizes, spacing, shadows } from '../theme/spacing';

interface AnswerState {
  questionIndex: number;
  selectedAnswer: string | null;
  isAnswered: boolean;
  isCorrect: boolean | null;
}

export const QuizScreen: React.FC = ({ navigation, route }: any) => {
  const [answerState, setAnswerState] = useState<AnswerState>({
    questionIndex: 0,
    selectedAnswer: null,
    isAnswered: false,
    isCorrect: null,
  });

  const [questions] = useState([
    {
      id: '1',
      title: 'Qual é o significado da placa de sinalização VERMELHA com um círculo e barra diagonal?',
      image: '🚫', // Emoji representando a placa
      options: [
        { id: 'a', text: 'Estacionamento proibido' },
        { id: 'b', text: 'Entrada proibida' },
        { id: 'c', text: 'Passagem proibida' },
        { id: 'd', text: 'Parada proibida' },
      ],
      correctAnswerId: 'b',
      explanation: 'Uma placa vermelha com círculo e barra diagonal significa entrada proibida naquele local.',
      videoUrl: 'https://example.com/video',
      difficulty: 'easy',
      points: 10,
    },
    {
      id: '2',
      title: 'Em uma situação de aquaplanagem, qual é o procedimento CORRETO?',
      image: '💨',
      options: [
        { id: 'a', text: 'Freiar bruscamente para recuperar tração' },
        { id: 'b', text: 'Manter a velocidade e tentar estabilizar o veículo' },
        { id: 'c', text: 'Virar bruscamente para recuperar tração' },
        { id: 'd', text: 'Desacelerar gradualmente, sem frear bruscamente' },
      ],
      correctAnswerId: 'd',
      explanation: 'Em aquaplanagem, você deve desacelerar gradualmente sem frear bruscamente, pois o objetivo é recuperar a tração dos pneus com o pavimento.',
      videoUrl: 'https://example.com/video2',
      difficulty: 'medium',
      points: 25,
    },
    {
      id: '3',
      title: 'Qual é a distância mínima de segurança com o veículo à frente em rodovia?',
      image: '🛣️',
      options: [
        { id: 'a', text: '10 metros' },
        { id: 'b', text: 'Metade da velocidade em metros' },
        { id: 'c', text: 'Um terço da velocidade em metros' },
        { id: 'd', text: 'Aquela que permite parar sem colisão' },
      ],
      correctAnswerId: 'd',
      explanation: 'A distância segura é aquela que permite ao condutor parar o veículo sem colidir com o veículo à frente em caso de emergência.',
      videoUrl: 'https://example.com/video3',
      difficulty: 'hard',
      points: 50,
    },
  ]);

  const currentQuestion = questions[answerState.questionIndex];
  const totalQuestions = questions.length;
  const progress = ((answerState.questionIndex + 1) / totalQuestions) * 100;

  const handleAnswerPress = (answerId: string) => {
    if (answerState.isAnswered) return;

    const isCorrect = answerId === currentQuestion.correctAnswerId;
    setAnswerState({
      ...answerState,
      selectedAnswer: answerId,
      isAnswered: true,
      isCorrect: isCorrect,
    });
  };

  const handleNext = () => {
    if (answerState.questionIndex < totalQuestions - 1) {
      setAnswerState({
        questionIndex: answerState.questionIndex + 1,
        selectedAnswer: null,
        isAnswered: false,
        isCorrect: null,
      });
    } else {
      // Fim do quiz
      navigation?.navigate?.('QuizResult');
    }
  };

  const getOptionStyle = (optionId: string) => {
    if (!answerState.isAnswered) {
      return { backgroundColor: colors.neutral.light };
    }

    if (optionId === currentQuestion.correctAnswerId) {
      return { backgroundColor: colors.overlay + '22' };
    }

    if (optionId === answerState.selectedAnswer && !answerState.isCorrect) {
      return { backgroundColor: colors.error + '22' };
    }

    return { backgroundColor: colors.neutral.light };
  };

  const getBorderColor = (optionId: string) => {
    if (!answerState.isAnswered) {
      return colors.neutral.gray;
    }

    if (optionId === currentQuestion.correctAnswerId) {
      return colors.success;
    }

    if (optionId === answerState.selectedAnswer && !answerState.isCorrect) {
      return colors.error;
    }

    return colors.neutral.gray;
  };

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: colors.neutral.white,
      }}
      showsVerticalScrollIndicator={false}
    >
      {/* Header com progresso */}
      <View
        style={{
          backgroundColor: colors.primary.main,
          paddingHorizontal: spacing.lg,
          paddingVertical: spacing.lg,
          paddingTop: spacing.xl,
          gap: spacing.md,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text style={{ ...typography.h3, color: colors.neutral.white }}>
            Questão {answerState.questionIndex + 1} de {totalQuestions}
          </Text>
          <TouchableOpacity onPress={() => navigation?.goBack?.()}>
            <Text style={{ fontSize: 24 }}>✕</Text>
          </TouchableOpacity>
        </View>
        <ProgressBar progress={progress} theme="info" />
      </View>

      {/* Conteúdo */}
      <View
        style={{
          padding: spacing.lg,
          gap: spacing.lg,
        }}
      >
        {/* Imagem/Ilustração */}
        <View
          style={{
            backgroundColor: colors.neutral.light,
            height: 200,
            borderRadius: sizes.cardBorderRadius,
            alignItems: 'center',
            justifyContent: 'center',
            ...shadows.subtle,
          }}
        >
          <Text style={{ fontSize: 64 }}>{currentQuestion.image}</Text>
        </View>

        {/* Pergunta */}
        <Card variant="elevated">
          <Text
            style={{
              ...typography.h3,
              color: colors.textPrimary,
              lineHeight: 28,
            }}
          >
            {currentQuestion.title}
          </Text>
        </Card>

        {/* Opções de resposta */}
        <View style={{ gap: spacing.md }}>
          {currentQuestion.options.map((option, index) => (
            <TouchableOpacity
              key={option.id}
              onPress={() => handleAnswerPress(option.id)}
              disabled={answerState.isAnswered}
              style={{
                borderRadius: sizes.cardBorderRadius,
                borderWidth: 2,
                borderColor: getBorderColor(option.id),
                ...getOptionStyle(option.id),
              }}
              activeOpacity={answerState.isAnswered ? 1 : 0.7}
            >
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: spacing.lg,
                  gap: spacing.md,
                }}
              >
                {/* Opção letra/número */}
                <View
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 18,
                    backgroundColor: colors.primary.main,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Text
                    style={{
                      ...typography.label,
                      color: colors.neutral.white,
                    }}
                  >
                    {String.fromCharCode(65 + index)}
                  </Text>
                </View>

                {/* Texto da opção */}
                <Text
                  style={{
                    flex: 1,
                    ...typography.body1,
                    color: colors.textPrimary,
                  }}
                >
                  {option.text}
                </Text>

                {/* Feedback visual */}
                {answerState.isAnswered && (
                  <Text style={{ fontSize: 20 }}>
                    {option.id === currentQuestion.correctAnswerId ? '✓' : ''}
                    {option.id === answerState.selectedAnswer &&
                    !answerState.isCorrect
                      ? '✗'
                      : ''}
                  </Text>
                )}
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Feedback após resposta */}
        {answerState.isAnswered && (
          <Card
            variant="elevated"
            style={{
              backgroundColor:
                answerState.isCorrect
                  ? colors.overlay + '15'
                  : colors.error + '15',
              borderLeftWidth: 4,
              borderLeftColor: answerState.isCorrect
                ? colors.success
                : colors.error,
            }}
          >
            <View style={{ gap: spacing.md }}>
              <View style={{ flexDirection: 'row', gap: spacing.md }}>
                <Text style={{ fontSize: 32 }}>
                  {answerState.isCorrect ? '🎉' : '📚'}
                </Text>
                <View style={{ flex: 1 }}>
                  <Text
                    style={{
                      ...typography.h3,
                      color: colors.textPrimary,
                      marginBottom: spacing.sm,
                    }}
                  >
                    {answerState.isCorrect ? 'Parabéns!' : 'Não foi desta vez'}
                  </Text>
                  <Text
                    style={{
                      ...typography.body2,
                      color: colors.textSecondary,
                    }}
                  >
                    {currentQuestion.explanation}
                  </Text>
                </View>
              </View>

              {/* Botão de vídeo explicativo */}
              <Button
                title="📹 Assistir Vídeo Explicativo"
                variant="secondary"
                size="medium"
                onPress={() => {}}
              />
            </View>
          </Card>
        )}

        {/* Botão próxima questão */}
        {answerState.isAnswered && (
          <Button
            title={answerState.questionIndex === totalQuestions - 1 ? 'Finalizar' : 'Próxima'}
            variant="primary"
            size="large"
            onPress={handleNext}
          />
        )}
      </View>
    </ScrollView>
  );
};

export default QuizScreen;
