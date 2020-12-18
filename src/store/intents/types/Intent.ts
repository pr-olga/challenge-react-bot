export interface Intent {
  id: string
  name: string
  description: string
  trainingData: {
    expressionCount: number
    expressions: CommunicationSlot[]
  }
  reply: CommunicationSlot
}

export type CommunicationSlot = {
  id: string
  text: string
}
