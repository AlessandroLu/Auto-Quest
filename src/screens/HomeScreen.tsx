import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {
  Header,
  Card,
  Button,
  CircleCategory,
  ProgressBar,
} from '../components';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';
import { sizes, spacing } from '../theme/spacing';

const screenWidth = Dimensions.get('window').width;

export const HomeScreen: React.FC = ({ navigation }: any) => {
  const [user] = useState({
    name: 'João',
    coins: 2450,
    streak: 7,
  });

  const [dailyChallenge] = useState({
    title: 'Placas de Sinalização',
    description: 'Identifique 5 placas de trânsito corretamente',
    reward: 150,
    progress: 3,
    total: 5,
  });

  const [categories] = useState([
    {
      id: '1',
      title: 'Conhecimento Geral',
      emoji: '🎓',
      progress: 65,
      isLocked: false,
      isCompleted: false,
      color: colors.primary.main,
    },
    {
      id: '2',
      title: 'Condução Segura',
      emoji: '🚗',
      progress: 45,
      isLocked: false,
      isCompleted: false,
      color: colors.secondary.main,
    },
    {
      id: '3',
      title: 'Legislação',
      emoji: '⚖️',
      progress: 80,
      isLocked: false,
      isCompleted: true,
      color: colors.primary.main,
    },
    {
      id: '4',
      title: 'Manutenção',
      emoji: '🔧',
      progress: 0,
      isLocked: true,
      isCompleted: false,
      color: colors.neutral.gray,
    },
  ]);

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: colors.neutral.white,
      }}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <Header
        title="Vamos aprender!"
        userName={user.name}
        coins={user.coins}
        streak={user.streak}
        onProfilePress={() => navigation?.navigate?.('Profile')}
      />

      {/* Container principal */}
      <View style={{ padding: spacing.lg, gap: spacing.lg }}>
        {/* Desafio do Dia */}
        <View>
          <Text
            style={{
              ...typography.h3,
              color: colors.textPrimary,
              marginBottom: spacing.md,
            }}
          >
            Desafio do Dia 🎯
          </Text>

          <Card variant="elevated">
            <View
              style={{
                gap: spacing.md,
              }}
            >
              {/* Título e reward */}
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                }}
              >
                <View style={{ flex: 1 }}>
                  <Text
                    style={{
                      ...typography.h3,
                      color: colors.textPrimary,
                      marginBottom: spacing.sm,
                    }}
                  >
                    {dailyChallenge.title}
                  </Text>
                  <Text
                    style={{
                      ...typography.body2,
                      color: colors.textSecondary,
                    }}
                  >
                    {dailyChallenge.description}
                  </Text>
                </View>

                {/* Reward badge */}
                <View
                  style={{
                    backgroundColor: colors.secondary.main,
                    paddingHorizontal: spacing.md,
                    paddingVertical: spacing.sm,
                    borderRadius: 8,
                    alignItems: 'center',
                    marginLeft: spacing.md,
                  }}
                >
                  <Text style={{ fontSize: 12 }}>🪙</Text>
                  <Text
                    style={{
                      ...typography.label,
                      color: colors.neutral.white,
                      fontSize: 12,
                    }}
                  >
                    +{dailyChallenge.reward}
                  </Text>
                </View>
              </View>

              {/* Progress */}
              <View style={{ gap: spacing.sm }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}
                >
                  <Text style={{ ...typography.caption, color: colors.textSecondary }}>
                    Progresso
                  </Text>
                  <Text style={{ ...typography.caption, color: colors.textSecondary }}>
                    {dailyChallenge.progress}/{dailyChallenge.total}
                  </Text>
                </View>
                <ProgressBar
                  progress={(dailyChallenge.progress / dailyChallenge.total) * 100}
                  theme="warning"
                />
              </View>

              {/* Botão Jogar */}
              <Button
                title="Jogar Agora"
                variant="primary"
                size="large"
                onPress={() => navigation?.navigate?.('Simulados')}
              />
            </View>
          </Card>
        </View>

        {/* Trilha de Aprendizado */}
        <View>
          <Text
            style={{
              ...typography.h3,
              color: colors.textPrimary,
              marginBottom: spacing.md,
            }}
          >
            Trilha de Aprendizado 🗺️
          </Text>

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
              gap: spacing.lg,
            }}
          >
            {categories.map((category) => (
              <CircleCategory
                key={category.id}
                title={category.title}
                emoji={category.emoji}
                progress={category.progress}
                isLocked={category.isLocked}
                isCompleted={category.isCompleted}
                color={category.color}
                onPress={() =>
                  !category.isLocked && navigation?.navigate?.('Simulados')
                }
              />
            ))}
          </View>
        </View>

        {/* Seção de motivação */}
        <Card
          variant="outlined"
          style={{
            backgroundColor: colors.overlay,
            borderColor: colors.secondary.main,
          }}
        >
          <View
            style={{
              gap: spacing.sm,
              alignItems: 'center',
            }}
          >
            <Text style={{ fontSize: 32 }}>💪</Text>
            <Text
              style={{
                ...typography.h3,
                color: colors.neutral.white,
                textAlign: 'center',
              }}
            >
              Você está indo bem!
            </Text>
            <Text
              style={{
                ...typography.body2,
                color: colors.neutral.light,
                textAlign: 'center',
              }}
            >
              Você completou 2 de 4 módulos. Continue assim! 🚀
            </Text>
          </View>
        </Card>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
