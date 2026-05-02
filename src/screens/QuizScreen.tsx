import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  TextStyle,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "../theme/colors";
import { typography } from "../theme/typography";
import { sizes, spacing, shadows } from "../theme/spacing";

interface Question {
  id: string;
  title: string;
  imageUrl: string;
  options: { id: string; text: string }[];
  correctAnswerId: string;
  explanation: string;
  points: number;
}

export const QuizScreen: React.FC<any> = ({ navigation }: any) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const questions: Question[] = [
    {
      id: "1",
      title:
        "Nesta situação de rotatória sem sinalização, quem tem a preferência de passagem?",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBxwsa7uk9Gz_MiDjo4h1kBzVATBx1dTK6I1gq_Q0eF-ZUokDvl9NsYNSXa6hla1WDMFmJG7z56OlsVfZngIDc8CnNFOAofhm8rpYAbbaB_FruX1Q8UY_7RTMIv2AGKRHmBhneGdGkCFOAfwNOzm3-zo3S6V47EgM8rwGAAuYjQU1x-A6ZfJ_v5tPfBlFlKWQLOVWAuvwfnmEUYHCrbMtH4CsyQRSn8201cQdZYHEztYLj1CjE4vFpGlTPkUSp9vseuxmIW5rBqebo",
      options: [
        { id: "a", text: "O veículo que já estiver circulando na rotatória." },
        {
          id: "b",
          text: "O veículo que estiver entrando pela via da direita.",
        },
        {
          id: "c",
          text: "O veículo que estiver desenvolvendo maior velocidade.",
        },
        { id: "d", text: "O condutor que acionar a buzina primeiro." },
      ],
      correctAnswerId: "a",
      explanation:
        "Veículos em rotatória têm preferência, salvo sinalização em contrário.",
      points: 10,
    },
    {
      id: "2",
      title:
        "Qual é a principal regra de prioridade em uma rotatória sem sinalização?",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBxwsa7uk9Gz_MiDjo4h1kBzVATBx1dTK6I1gq_Q0eF-ZUokDvl9NsYNSXa6hla1WDMFmJG7z56OlsVfZngIDc8CnNFOAofhm8rpYAbbaB_FruX1Q8UY_7RTMIv2AGKRHmBhneGdGkCFOAfwNOzm3-zo3S6V47EgM8rwGAAuYjQU1x-A6ZfJ_v5tPfBlFlKWQLOVWAuvwfnmEUYHCrbMtH4CsyQRSn8201cQdZYHEztYLj1CjE4vFpGlTPkUSp9vseuxmIW5rBqebo",
      options: [
        { id: "a", text: "Quem entrar primeiro mantém a preferência." },
        { id: "b", text: "Veículos na rotatória têm preferência." },
        { id: "c", text: "Veículos menores têm prioridade." },
        { id: "d", text: "Quem buzinar primeiro avança." },
      ],
      correctAnswerId: "b",
      explanation:
        "Em rotatórias, o veículo que já circula no interior da rotatória prevalece.",
      points: 10,
    },
  ];

  const currentQuestion = questions[questionIndex];
  const totalQuestions = questions.length;
  const progress = ((questionIndex + 1) / totalQuestions) * 100;

  const handleAnswerPress = (answerId: string) => {
    if (isAnswered) return;
    setSelectedAnswer(answerId);
  };

  const handleConfirm = () => {
    if (!selectedAnswer) return;
    const correct = selectedAnswer === currentQuestion.correctAnswerId;
    setIsCorrect(correct);
    setIsAnswered(true);
  };

  const handleNext = () => {
    if (questionIndex < totalQuestions - 1) {
      setQuestionIndex(questionIndex + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
      setIsCorrect(null);
    } else {
      navigation?.navigate?.("QuizResult");
    }
  };

  const getOptionBorder = (optionId: string) => {
    if (!selectedAnswer) {
      return colors.neutral.gray;
    }
    if (isAnswered) {
      if (optionId === currentQuestion.correctAnswerId) {
        return colors.success;
      }
      if (optionId === selectedAnswer && !isCorrect) {
        return colors.error;
      }
    }
    return colors.neutral.gray;
  };

  const getOptionBackground = (optionId: string) => {
    if (!selectedAnswer) {
      return colors.neutral.white;
    }
    if (isAnswered) {
      if (optionId === currentQuestion.correctAnswerId) {
        return colors.success + "15";
      }
      if (optionId === selectedAnswer && !isCorrect) {
        return colors.error + "15";
      }
    }
    return colors.neutral.white;
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.neutral.white }}>
      <View
        style={{
          backgroundColor: colors.neutral.white,
          borderBottomWidth: 2,
          borderBottomColor: colors.neutral.lighter,
          paddingHorizontal: spacing.lg,
          paddingTop: spacing.xl,
          paddingBottom: spacing.md,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: spacing.md,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation?.goBack?.()}
            style={{
              padding: spacing.sm,
              borderRadius: 999,
              backgroundColor: colors.neutral.white,
              borderWidth: 1,
              borderColor: colors.neutral.lighter,
            }}
          >
            <MaterialIcons
              name="close"
              size={20}
              color={colors.neutral.darkGray}
            />
          </TouchableOpacity>
          <View style={{ flex: 1, paddingHorizontal: spacing.md }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: spacing.xs,
              }}
            >
              <Text
                style={
                  {
                    ...typography.label,
                    color: colors.primary.main,
                    textTransform: "uppercase",
                    letterSpacing: 0.6,
                  } as TextStyle
                }
              >
                Questão {questionIndex + 1} de {totalQuestions}
              </Text>
              <Text
                style={
                  {
                    ...typography.label,
                    color: colors.neutral.gray,
                  } as TextStyle
                }
              >
                15:00
              </Text>
            </View>
            <View
              style={{
                height: 8,
                width: "100%",
                backgroundColor: colors.neutral.lighter,
                borderRadius: 999,
                overflow: "hidden",
              }}
            >
              <View
                style={{
                  height: "100%",
                  width: `${progress}%`,
                  backgroundColor: colors.primary.main,
                }}
              />
              <View
                style={{
                  position: "absolute",
                  top: 2,
                  left: "10%",
                  right: "10%",
                  height: 4,
                  backgroundColor: "rgba(255,255,255,0.3)",
                  borderRadius: 999,
                }}
              />
            </View>
          </View>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={{ paddingBottom: 180 }}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            marginHorizontal: spacing.lg,
            marginTop: spacing.lg,
            marginBottom: spacing.lg,
            borderRadius: sizes.cardBorderRadius,
            overflow: "hidden",
            backgroundColor: colors.neutral.white,
            borderWidth: 2,
            borderColor: colors.neutral.lighter,
            ...shadows.subtle,
            height: 220,
          }}
        >
          <Image
            source={{ uri: currentQuestion.imageUrl }}
            style={{ width: "100%", height: "100%" }}
            resizeMode="cover"
          />
          <View
            style={{
              position: "absolute",
              top: spacing.lg,
              right: spacing.lg,
              backgroundColor: colors.secondary.main,
              paddingHorizontal: spacing.sm,
              paddingVertical: spacing.xs,
              borderRadius: 999,
              flexDirection: "row",
              alignItems: "center",
              gap: spacing.xs,
            }}
          >
            <MaterialIcons
              name="directions-car"
              size={18}
              color={colors.neutral.white}
            />
            <Text
              style={
                {
                  ...typography.body2,
                  color: colors.neutral.white,
                } as TextStyle
              }
            >
              Prioridade
            </Text>
          </View>
        </View>

        <View style={{ paddingHorizontal: spacing.lg, gap: spacing.sm }}>
          <Text
            style={
              {
                ...typography.h3,
                color: colors.neutral.dark,
                lineHeight: 32,
              } as TextStyle
            }
          >
            {currentQuestion.title}
          </Text>
          <Text
            style={
              {
                ...typography.body1,
                color: colors.neutral.darkGray,
              } as TextStyle
            }
          >
            Observe atentamente o posicionamento do veículo verde e a
            sinalização horizontal.
          </Text>
        </View>

        <View
          style={{
            paddingHorizontal: spacing.lg,
            gap: spacing.md,
            marginTop: spacing.lg,
          }}
        >
          {currentQuestion.options.map((option, index) => (
            <TouchableOpacity
              key={option.id}
              onPress={() => handleAnswerPress(option.id)}
              disabled={isAnswered}
              style={{
                backgroundColor: getOptionBackground(option.id),
                borderWidth: 2,
                borderColor: getOptionBorder(option.id),
                borderBottomWidth: 4,
                borderRadius: sizes.cardBorderRadius,
                padding: spacing.md,
                flexDirection: "row",
                alignItems: "center",
                gap: spacing.md,
              }}
              activeOpacity={0.85}
            >
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 16,
                  backgroundColor: colors.neutral.lighter,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={
                    {
                      ...typography.h3,
                      color: colors.primary.main,
                    } as TextStyle
                  }
                >
                  {String.fromCharCode(65 + index)}
                </Text>
              </View>
              <Text
                style={
                  {
                    flex: 1,
                    ...typography.body1,
                    color: colors.neutral.dark,
                  } as TextStyle
                }
              >
                {option.text}
              </Text>
              {selectedAnswer === option.id && !isAnswered ? (
                <MaterialIcons
                  name="check"
                  size={20}
                  color={colors.primary.main}
                />
              ) : null}
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <View
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          paddingHorizontal: spacing.lg,
          paddingVertical: spacing.md,
          backgroundColor: colors.neutral.white,
          borderTopWidth: 2,
          borderTopColor: colors.neutral.lighter,
        }}
      >
        <TouchableOpacity
          onPress={isAnswered ? handleNext : handleConfirm}
          disabled={!selectedAnswer && !isAnswered}
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            height: 56,
            borderRadius: 20,
            backgroundColor:
              selectedAnswer || isAnswered
                ? colors.primary.main
                : colors.neutral.lighter,
            opacity: selectedAnswer || isAnswered ? 1 : 0.6,
          }}
        >
          <Text
            style={
              {
                ...typography.button,
                color: colors.neutral.white,
                marginRight: spacing.sm,
              } as TextStyle
            }
          >
            {isAnswered
              ? questionIndex === totalQuestions - 1
                ? "Finalizar"
                : "Continuar"
              : "Confirmar Resposta"}
          </Text>
          <MaterialIcons
            name="arrow-forward"
            size={20}
            color={colors.neutral.white}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default QuizScreen;
