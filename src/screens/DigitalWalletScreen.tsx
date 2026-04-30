import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import {
  Shield,
  Star,
  ParkingCircle,
  Gauge,
  HeartPulse,
  Eye,
  GraduationCap,
  Lock,
  History,
  TrendingUp,
  Timer,
  Share2,
  ChevronRight,
  User,
} from "lucide-react-native";

// Paleta extraída do seu Tailwind config
const themeColors = {
  background: "#f5fbef",
  primary: "#006e1c",
  onPrimaryFixedVariant: "#005313",
  surfaceContainer: "#eaf0e4",
  surfaceContainerHigh: "#e4eade",
  outlineVariant: "#becab9",
  onSurface: "#171d16",
  onSurfaceVariant: "#3f4a3c",
  secondary: "#8b5000",
  tertiary: "#a63360",
  secondaryContainer: "#ff9800",
  primaryContainer: "#4caf50",
  tertiaryContainer: "#f26f9d",
};

export const DigitalWalletScreen: React.FC<any> = ({ navigation }: any) => {
  const [wallet] = useState({
    name: "LUCAS OLIVEIRA",
    registry: "047291883-9",
    category: "Nível 5 - Condutor Prudente",
  });

  const achievements = [
    {
      id: "1",
      title: "Mestre do Estacionamento",
      icon: ParkingCircle,
      bgColor: themeColors.secondaryContainer,
      iconColor: "#fff",
      locked: false,
    },
    {
      id: "2",
      title: "Rei da Rodovia",
      icon: Gauge,
      bgColor: themeColors.primaryContainer,
      iconColor: "#fff",
      locked: false,
    },
    {
      id: "3",
      title: "Primeiros Socorros",
      icon: HeartPulse,
      bgColor: themeColors.tertiaryContainer,
      iconColor: "#fff",
      locked: false,
    },
    {
      id: "4",
      title: "Olhar de Águia",
      icon: Eye,
      bgColor: "#3b82f6",
      iconColor: "#fff",
      locked: false,
    },
    {
      id: "5",
      title: "Aluno Nota 10",
      icon: GraduationCap,
      bgColor: "#fbbf24",
      iconColor: "#fff",
      locked: false,
    },
    {
      id: "6",
      title: "Bloqueado",
      icon: Lock,
      bgColor: "#e4e4e7",
      iconColor: "#a1a1aa",
      locked: true,
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: themeColors.background }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 20, gap: 32, paddingBottom: 100 }}
      >
        {/* Seção do Cartão CDT */}
        <View
          style={{
            backgroundColor: themeColors.primary,
            borderRadius: 24,
            padding: 24,
            borderBottomWidth: 8,
            borderBottomColor: themeColors.onPrimaryFixedVariant,
            elevation: 8,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.15,
            shadowRadius: 12,
          }}
        >
          {/* Header do Cartão */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: 24,
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: "bold",
                  color: "rgba(255,255,255,0.8)",
                  textTransform: "uppercase",
                  letterSpacing: 1,
                }}
              >
                República Federativa do Brasil
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "bold",
                  color: "#fff",
                  textTransform: "uppercase",
                }}
              >
                Carteira Digital de Trânsito
              </Text>
            </View>
            <Shield color="rgba(255,255,255,0.4)" size={36} />
          </View>

          {/* Conteúdo: Foto e Dados */}
          <View style={{ flexDirection: "row", gap: 16, alignItems: "center" }}>
            {/* Silhueta do Cartão CDT */}
            <View
              style={{
                width: 96,
                height: 128,
                backgroundColor: "#fff",
                borderRadius: 8,
                padding: 4,
              }}
            >
              <View
                style={{
                  flex: 1,
                  backgroundColor: themeColors.surfaceContainerHigh,
                  borderRadius: 6,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <User color={themeColors.outlineVariant} size={48} />
              </View>
            </View>

            <View style={{ flex: 1, gap: 8 }}>
              <View>
                <Text
                  style={{
                    fontSize: 10,
                    color: "rgba(255,255,255,0.7)",
                    textTransform: "uppercase",
                  }}
                >
                  Nome do Condutor
                </Text>
                <Text
                  style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}
                >
                  {wallet.name}
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 10,
                    color: "rgba(255,255,255,0.7)",
                    textTransform: "uppercase",
                  }}
                >
                  Registro Nacional
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "bold",
                    color: "#fff",
                    letterSpacing: 2,
                  }}
                >
                  {wallet.registry}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "rgba(255,255,255,0.2)",
                  paddingHorizontal: 12,
                  paddingVertical: 6,
                  borderRadius: 16,
                  gap: 6,
                  alignSelf: "flex-start",
                  marginTop: 4,
                }}
              >
                <Star color="#fff" size={14} fill="#fff" />
                <Text
                  style={{ fontSize: 12, fontWeight: "bold", color: "#fff" }}
                >
                  {wallet.category}
                </Text>
              </View>
            </View>
          </View>

          {/* Footer do Cartão */}
          <View
            style={{
              marginTop: 24,
              alignItems: "flex-end",
            }}
          >
            <Text
              style={{
                fontSize: 8,
                color: "rgba(255,255,255,0.5)",
                textTransform: "uppercase",
              }}
            ></Text>
          </View>
        </View>

        {/* Seção de Conquistas */}
        <View style={{ gap: 16 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 24,
                fontWeight: "600",
                color: themeColors.onSurface,
              }}
            >
              Minhas Conquistas
            </Text>
            <TouchableOpacity
              style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
            >
              <Text
                style={{
                  color: themeColors.primary,
                  fontWeight: "600",
                  fontSize: 14,
                }}
              >
                Ver todas
              </Text>
              <ChevronRight color={themeColors.primary} size={16} />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              gap: 16,
              justifyContent: "space-between",
            }}
          >
            {achievements.map((item) => {
              const Icon = item.icon;
              return (
                <TouchableOpacity
                  key={item.id}
                  activeOpacity={0.8}
                  style={{
                    width: "30%",
                    backgroundColor: "#fff",
                    borderRadius: 16,
                    padding: 16,
                    alignItems: "center",
                    borderWidth: 2,
                    borderColor: themeColors.outlineVariant + "50",
                    borderBottomWidth: 4,
                    gap: 8,
                  }}
                >
                  <View
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 24,
                      backgroundColor: item.bgColor,
                      alignItems: "center",
                      justifyContent: "center",
                      elevation: item.locked ? 0 : 4,
                    }}
                  >
                    <Icon color={item.iconColor} size={24} />
                  </View>
                  <Text
                    style={{
                      fontSize: 10,
                      fontWeight: "bold",
                      color: item.locked
                        ? "#a1a1aa"
                        : themeColors.onSurfaceVariant,
                      textAlign: "center",
                    }}
                  >
                    {item.title}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* Estatísticas (Bento Box Style) */}
        <View style={{ flexDirection: "row", gap: 16 }}>
          <View
            style={{
              flex: 1,
              backgroundColor: themeColors.surfaceContainer,
              borderRadius: 16,
              padding: 16,
              borderWidth: 2,
              borderColor: themeColors.outlineVariant + "40",
              justifyContent: "space-between",
              aspectRatio: 1,
            }}
          >
            <History color={themeColors.primary} size={32} />
            <View>
              <Text
                style={{
                  fontSize: 32,
                  fontWeight: "bold",
                  color: themeColors.primary,
                }}
              >
                128
              </Text>
              <Text
                style={{ fontSize: 14, color: themeColors.onSurfaceVariant }}
              >
                Simulados Feitos
              </Text>
            </View>
          </View>

          <View style={{ flex: 1, gap: 16 }}>
            <View
              style={{
                flex: 1,
                backgroundColor: themeColors.surfaceContainerHigh,
                borderRadius: 16,
                padding: 16,
                borderWidth: 2,
                borderColor: themeColors.outlineVariant + "40",
                flexDirection: "row",
                alignItems: "center",
                gap: 12,
              }}
            >
              <View
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: themeColors.secondary,
                  borderRadius: 12,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <TrendingUp color="#fff" size={24} />
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    color: themeColors.onSurface,
                  }}
                >
                  85%
                </Text>
                <Text
                  style={{
                    fontSize: 10,
                    fontWeight: "bold",
                    color: themeColors.onSurfaceVariant,
                    textTransform: "uppercase",
                  }}
                >
                  Precisão
                </Text>
              </View>
            </View>

            <View
              style={{
                flex: 1,
                backgroundColor: themeColors.surfaceContainerHigh,
                borderRadius: 16,
                padding: 16,
                borderWidth: 2,
                borderColor: themeColors.outlineVariant + "40",
                flexDirection: "row",
                alignItems: "center",
                gap: 12,
              }}
            >
              <View
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: themeColors.tertiary,
                  borderRadius: 12,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Timer color="#fff" size={24} />
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    color: themeColors.onSurface,
                  }}
                >
                  14h
                </Text>
                <Text
                  style={{
                    fontSize: 10,
                    fontWeight: "bold",
                    color: themeColors.onSurfaceVariant,
                    textTransform: "uppercase",
                  }}
                >
                  De Estudo
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Botão de Ação */}
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            width: "100%",
            height: 56,
            backgroundColor: themeColors.primary,
            borderRadius: 16,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
            borderBottomWidth: 4,
            borderBottomColor: themeColors.onPrimaryFixedVariant,
            marginTop: 8,
          }}
        >
          <Share2 color="#fff" size={20} />
          <Text style={{ color: "#fff", fontSize: 16, fontWeight: "700" }}>
            Compartilhar Perfil
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DigitalWalletScreen;
