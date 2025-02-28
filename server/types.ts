
export interface Message {
  id: number;
  text: string;
  user: string;
  date: Date;
}

export interface CreateMessageInput {
  text: string;
  user: string;
}
