import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  TextStyle,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Card, Button } from "../components";
import { colors, ColorSystem } from "../theme/colors";
import { typography } from "../theme/typography";
import { sizes, spacing } from "../theme/spacing";

export const HomeScreen: React.FC<any> = ({ navigation }: any) => {
  const [user] = useState({
    name: "Lucas",
    points: 1250,
  });

  const [progress] = useState({
    module: "Sinalização Viária",
    percentage: 75,
  });

  const [dailyChallenge] = useState({
    title: "Mestre das Rotatórias",
    description:
      "Domine as regras de preferência e evite multas! Complete este quiz rápido para ganhar bônus em dobro hoje.",
    points: 50,
  });

  return (
    <View style={{ flex: 1, backgroundColor: colors.neutral.white }}>
      {/* Custom Header */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: spacing.lg,
          paddingVertical: spacing.md,
          height: 64,
          backgroundColor: colors.neutral.white,
          borderBottomWidth: 4,
          borderBottomColor: colors.neutral.light,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: spacing.sm,
          }}
        >
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: colors.neutral.light,
              borderWidth: 2,
              borderColor: colors.neutral.light,
            }}
          >
            <MaterialIcons
              name="person"
              size={24}
              color={colors.neutral.darkGray}
            />
          </View>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "900",
              color: colors.primary.main,
              fontFamily: "Lexend",
            }}
          >
            AutoQuest
          </Text>
        </View>
        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {}}
        >
          <MaterialIcons
            name="notifications"
            size={24}
            color={colors.primary.main}
          />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 96 }}
      >
        {/* Welcome & Score Section */}
        <View
          style={{
            paddingHorizontal: spacing.lg,
            paddingTop: spacing.xl,
            paddingBottom: spacing.md,
          }}
        >
          <Text
            style={
              {
                ...typography.h1,
                color: ColorSystem.textPrimary,
                marginBottom: spacing.xs,
              } as TextStyle
            }
          >
            Bem-Vindo ao AutoQuest, {user.name}!
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: spacing.sm,
              marginTop: spacing.sm,
            }}
          >
            <View
              style={{
                width: 32,
                height: 32,
                borderRadius: 16,
                backgroundColor: colors.primary.main,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MaterialIcons
                name="toll"
                size={16}
                color={colors.neutral.white}
              />
            </View>
            <Text
              style={
                {
                  ...typography.h2,
                  color: colors.secondary.main,
                } as TextStyle
              }
            >
              {user.points.toLocaleString()} Pontos
            </Text>
          </View>
        </View>

        {/* Progress Section */}
        <View
          style={{ paddingHorizontal: spacing.lg, paddingBottom: spacing.xl }}
        >
          <Card
            variant="outlined"
            style={{ borderWidth: 2, borderColor: colors.neutral.light }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View style={{ flex: 1 }}>
                <Text
                  style={
                    {
                      ...typography.h2,
                      color: ColorSystem.textPrimary,
                      marginBottom: spacing.xs,
                    } as TextStyle
                  }
                >
                  Jornada de Formação
                </Text>
                <Text
                  style={
                    {
                      ...typography.body2,
                      color: ColorSystem.textSecondary,
                      marginBottom: spacing.sm,
                    } as TextStyle
                  }
                >
                  Módulo: {progress.module}
                </Text>
                {/* Tactile Progress Bar */}
                <View
                  style={{
                    width: "100%",
                    height: 16,
                    backgroundColor: colors.neutral.light,
                    borderRadius: 8,
                    overflow: "hidden",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      height: "100%",
                      width: `${progress.percentage}%`,
                      backgroundColor: colors.primary.main,
                      borderRadius: 8,
                      position: "relative",
                    }}
                  >
                    <View
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "50%",
                        backgroundColor: colors.neutral.white,
                        opacity: 0.2,
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8,
                      }}
                    />
                  </View>
                </View>
              </View>
              <View
                style={{
                  marginLeft: spacing.md,
                  width: 80,
                  height: 80,
                  borderRadius: 40,
                  borderWidth: 4,
                  borderColor: colors.neutral.light,
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                {/* Simple circular progress - for simplicity, using a view */}
                <View
                  style={{
                    width: 72,
                    height: 72,
                    borderRadius: 36,
                    borderWidth: 4,
                    borderColor: colors.primary.main,
                    position: "absolute",
                  }}
                />
                <Text
                  style={
                    {
                      ...typography.h1,
                      color: ColorSystem.textPrimary,
                    } as TextStyle
                  }
                >
                  {progress.percentage}%
                </Text>
              </View>
            </View>
          </Card>
        </View>

        {/* Daily Challenge Section */}
        <View
          style={{ paddingHorizontal: spacing.lg, paddingBottom: spacing.xl }}
        >
          <Text
            style={
              {
                ...typography.h2,
                color: ColorSystem.textPrimary,
                marginBottom: spacing.sm,
              } as TextStyle
            }
          >
            Desafios do Dia
          </Text>
          <Card
            variant="elevated"
            style={{
              borderWidth: 2,
              borderColor: colors.neutral.light,
              shadowColor: colors.neutral.black,
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.3,
              shadowRadius: 8,
              elevation: 8,
            }}
          >
            <View
              style={{
                height: 128,
                backgroundColor: colors.secondary.main,
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <View
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: colors.secondary.main,
                  opacity: 0.8,
                }}
              />
              <MaterialIcons
                name="directions-car"
                size={80}
                color={colors.neutral.white}
              />
            </View>
            <View style={{ padding: spacing.md }}>
              <Text
                style={
                  {
                    ...typography.h1,
                    color: ColorSystem.textPrimary,
                    marginBottom: spacing.sm,
                  } as TextStyle
                }
              >
                {dailyChallenge.title}
              </Text>
              <View
                style={{
                  backgroundColor: colors.tertiary.main,
                  paddingHorizontal: spacing.sm,
                  paddingVertical: spacing.xs,
                  borderRadius: 12,
                  borderWidth: 1,
                  borderColor: colors.tertiary.light,
                  alignSelf: "flex-start",
                  marginBottom: spacing.sm,
                }}
              >
                <Text
                  style={{
                    ...typography.body2,
                    color: colors.tertiary.dark,
                    fontWeight: "600",
                  }}
                >
                  +{dailyChallenge.points} pontos
                </Text>
              </View>
              <Text
                style={
                  {
                    ...typography.body1,
                    color: ColorSystem.textSecondary,
                    marginBottom: spacing.md,
                  } as TextStyle
                }
              >
                {dailyChallenge.description}
              </Text>
              <Button
                title="Começar"
                variant="primary"
                size="large"
                onPress={() => navigation?.navigate?.("Simulados")}
                icon={
                  <MaterialIcons
                    name="play-arrow"
                    size={20}
                    color={colors.neutral.white}
                  />
                }
              />
            </View>
          </Card>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
