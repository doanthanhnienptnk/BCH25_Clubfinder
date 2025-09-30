export type Group = 'Học thuật' | 'Nghệ thuật' | 'Văn hoá' | 'Xã hội' | 'Thể thao'

export type GroupKey = 'academic' | 'artistic' | 'cultural' | 'social' | 'sports'

export interface Statement {
  text: string
  group: Group
}

// Fix: Use `Partial` for the score mapping to allow options to only specify relevant group scores.
// This aligns the type with the data in `constants.ts` and resolves all related errors.
export type QuestionOption = [string, Group, Partial<Record<Group, number>>]

export interface Question {
  q: string
  a: QuestionOption
  b: QuestionOption
  c: QuestionOption
  d: QuestionOption
  e: QuestionOption
}

export type Scores = Record<GroupKey, number>

export interface Club {
  name: string
  url: string
}

export type SuggestionMap = Record<GroupKey, Club[]>

export interface AnswerState {
  [key: string]: string | string[]
}
