/**
 * AutoQuest - Tipos TypeScript
 */

// Usuário
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  level: number;
  title: string;
  coins: number;
  streak: number;
  totalXP: number;
}

// Questão de múltipla escolha
export interface Question {
  id: string;
  category: string;
  title: string;
  image?: string;
  options: {
    id: string;
    text: string;
  }[];
  correctAnswerId: string;
  explanation: string;
  videoUrl?: string;
  difficulty: 'easy' | 'medium' | 'hard';
  points: number;
}

// Simulado/Quiz
export interface Quiz {
  id: string;
  title: string;
  description: string;
  category: string;
  questions: Question[];
  totalQuestions: number;
  timeLimit?: number; // em minutos
  icon?: string;
}

// Categoria de aprendizado
export interface LearningCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  isLocked: boolean;
  progress: number; // 0-100
  questionsCount: number;
  completedCount: number;
}

// Conquista/Badge
export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  unlockedAt?: Date;
  isUnlocked: boolean;
}

// Resultado do Quiz
export interface QuizResult {
  id: string;
  quizId: string;
  userId: string;
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  timeTaken: number;
  completedAt: Date;
  answers: {
    questionId: string;
    selectedAnswerId: string;
    isCorrect: boolean;
  }[];
}

// Desafio do Dia
export interface DailyChallenge {
  id: string;
  date: Date;
  title: string;
  description: string;
  category: string;
  reward: number;
  icon: string;
  isCompleted: boolean;
}

// Carteira Digital (Carteira de Trânsito simulada)
export interface DigitalWallet {
  userId: string;
  name: string;
  category: string;
  level: number;
  achievements: Achievement[];
  totalPoints: number;
  joinedDate: Date;
}

// Estados de resposta em quiz
export type AnswerState = 'idle' | 'correct' | 'incorrect' | 'answered';

// Navigation types
export interface TabParamList {
  Home: undefined;
  Simulados: undefined;
  Carteira: undefined;
  Comunidade: undefined;
  Configuracoes: undefined;
}

export interface ScreenProps<T extends keyof TabParamList> {
  navigation: any;
  route: any;
}
