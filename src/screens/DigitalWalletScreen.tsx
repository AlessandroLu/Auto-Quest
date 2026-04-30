import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Medal, Card, ProgressBar, Badge } from '../components';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';
import { sizes, spacing, shadows } from '../theme/spacing';

const screenWidth = Dimensions.get('window').width;

export const DigitalWalletScreen: React.FC = ({ navigation }: any) => {
  const [wallet] = useState({
    name: 'João Silva Santos',
    category: 'Nível 5 - Condutor Prudente',
    level: 5,
    joinedDate: new Date('2024-01-15'),
    totalPoints: 2450,
    photo: '👤',
  });

  const [achievements] = useState([
    {
      id: '1',
      title: 'Mestre do Estacionamento',
      emoji: '🅿️',
      color: 'gold',
      isUnlocked: true,
      unlockedAt: new Date('2024-02-01'),
    },
    {
      id: '2',
      title: 'Rei da Rodovia',
      emoji: '🛣️',
      color: 'silver',
      isUnlocked: true,
      unlockedAt: new Date('2024-02-15'),
    },
    {
      id: '3',
      title: 'Piloto Perfeito',
      emoji: '🏁',
      color: 'bronze',
      isUnlocked: true,
      unlockedAt: new Date('2024-03-01'),
    },
    {
      id: '4',
      title: 'Conhecedor de Leis',
      emoji: '⚖️',
      color: 'platinum',
      isUnlocked: true,
      unlockedAt: new Date('2024-03-15'),
    },
    {
      id: '5',
      title: 'Manutentor Expert',
      emoji: '🔧',
      color: 'gold',
      isUnlocked: false,
      unlockedAt: undefined,
    },
    {
      id: '6',
      title: 'Defensivo Champion',
      emoji: '🛡️',
      color: 'platinum',
      isUnlocked: false,
      unlockedAt: undefined,
    },
  ]);

  const getTitleColor = () => {
    if (wallet.level >= 5) return colors.secondary.main;
    if (wallet.level >= 3) return colors.primary.main;
    return colors.info;
  };

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: colors.neutral.light,
      }}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View
        style={{
          backgroundColor: colors.primary.main,
          paddingHorizontal: spacing.lg,
          paddingVertical: spacing.xl,
          paddingTop: spacing.xl,
          alignItems: 'center',
          gap: spacing.md,
        }}
      >
        <Text
          style={{
            ...typography.h2,
            color: colors.neutral.white,
          }}
        >
          Minha CDT
        </Text>
        <Text
          style={{
            ...typography.body2,
            color: colors.neutral.light,
          }}
        >
          Carteira Digital de Trânsito
        </Text>
      </View>

      {/* Carteira Principal */}
      <View style={{ paddingHorizontal: spacing.lg, paddingVertical: spacing.lg }}>
        <Card
          variant="elevated"
          style={{
            backgroundColor: '#1B5E20',
            padding: spacing.lg,
            ...shadows.prominent,
          }}
        >
          {/* Header da carteira */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: spacing.lg,
              borderBottomWidth: 1,
              borderBottomColor: 'rgba(255,255,255,0.2)',
              paddingBottom: spacing.md,
            }}
          >
            <View>
              <Text
                style={{
                  ...typography.caption,
                  color: 'rgba(255,255,255,0.7)',
                  marginBottom: spacing.xs,
                }}
              >
                CARTEIRA DIGITAL
              </Text>
              <Text
                style={{
                  ...typography.h2,
                  color: colors.neutral.white,
                }}
              >
                AutoQuest
              </Text>
            </View>
            <Text style={{ fontSize: 40 }}>🚗</Text>
          </View>

          {/* Foto e informações principais */}
          <View
            style={{
              gap: spacing.lg,
              marginBottom: spacing.lg,
            }}
          >
            {/* Foto/Avatar */}
            <View
              style={{
                width: 80,
                height: 80,
                borderRadius: 8,
                backgroundColor: colors.neutral.white,
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 2,
                borderColor: colors.secondary.main,
                ...shadows.subtle,
              }}
            >
              <Text style={{ fontSize: 40 }}>{wallet.photo}</Text>
            </View>

            {/* Nome e informações */}
            <View>
              <Text
                style={{
                  ...typography.h3,
                  color: colors.neutral.white,
                  marginBottom: spacing.sm,
                }}
              >
                {wallet.name}
              </Text>

              <View style={{ gap: spacing.sm }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingVertical: spacing.sm,
                    borderBottomWidth: 1,
                    borderBottomColor: 'rgba(255,255,255,0.1)',
                  }}
                >
                  <Text
                    style={{
                      ...typography.body2,
                      color: 'rgba(255,255,255,0.8)',
                    }}
                  >
                    Categoria:
                  </Text>
                  <Text
                    style={{
                      ...typography.label,
                      color: colors.secondary.light,
                    }}
                  >
                    {wallet.category}
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingVertical: spacing.sm,
                    borderBottomWidth: 1,
                    borderBottomColor: 'rgba(255,255,255,0.1)',
                  }}
                >
                  <Text
                    style={{
                      ...typography.body2,
                      color: 'rgba(255,255,255,0.8)',
                    }}
                  >
                    Pontos Total:
                  </Text>
                  <Text
                    style={{
                      ...typography.label,
                      color: colors.secondary.light,
                      fontSize: 16,
                    }}
                  >
                    🪙 {wallet.totalPoints}
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingVertical: spacing.sm,
                  }}
                >
                  <Text
                    style={{
                      ...typography.body2,
                      color: 'rgba(255,255,255,0.8)',
                    }}
                  >
                    Membro desde:
                  </Text>
                  <Text
                    style={{
                      ...typography.label,
                      color: colors.secondary.light,
                    }}
                  >
                    {wallet.joinedDate.toLocaleDateString('pt-BR')}
                  </Text>
                </View>
              </View>
            </View>
          </View>

          {/* Barra de Nível */}
          <View style={{ gap: spacing.sm }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  ...typography.body2,
                  color: 'rgba(255,255,255,0.8)',
                }}
              >
                Progresso para Nível {wallet.level + 1}:
              </Text>
              <Text
                style={{
                  ...typography.label,
                  color: colors.secondary.light,
                }}
              >
                75%
              </Text>
            </View>
            <ProgressBar progress={75} theme="warning" />
          </View>
        </Card>
      </View>

      {/* Conquistas */}
      <View style={{ paddingHorizontal: spacing.lg, paddingVertical: spacing.lg, gap: spacing.lg }}>
        <View>
          <Text
            style={{
              ...typography.h3,
              color: colors.textPrimary,
              marginBottom: spacing.lg,
            }}
          >
            Minhas Conquistas 🏆
          </Text>

          <Text
            style={{
              ...typography.body2,
              color: colors.textSecondary,
              marginBottom: spacing.md,
            }}
          >
            {achievements.filter((a) => a.isUnlocked).length} de{' '}
            {achievements.length} destravadas
          </Text>

          {/* Grid de medalhas */}
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
              gap: spacing.lg,
            }}
          >
            {achievements.map((achievement) => (
              <Medal
                key={achievement.id}
                title={achievement.title}
                emoji={achievement.emoji}
                medalColor={
                  achievement.color as 'gold' | 'silver' | 'bronze' | 'platinum'
                }
                isUnlocked={achievement.isUnlocked}
              />
            ))}
          </View>
        </View>

        {/* Dica motivacional */}
        <Card
          variant="outlined"
          style={{
            backgroundColor: colors.overlay + '08',
            borderColor: colors.secondary.main,
          }}
        >
          <View
            style={{
              gap: spacing.md,
              alignItems: 'center',
            }}
          >
            <Text style={{ fontSize: 32 }}>🎯</Text>
            <View style={{ gap: spacing.sm, alignItems: 'center' }}>
              <Text
                style={{
                  ...typography.h3,
                  color: colors.textPrimary,
                  textAlign: 'center',
                }}
              >
                Continue estudando!
              </Text>
              <Text
                style={{
                  ...typography.body2,
                  color: colors.textSecondary,
                  textAlign: 'center',
                }}
              >
                Você está faltando apenas 2 conquistas para desbloquear o próximo nível!
              </Text>
            </View>
          </View>
        </Card>
      </View>
    </ScrollView>
  );
};

export default DigitalWalletScreen;
