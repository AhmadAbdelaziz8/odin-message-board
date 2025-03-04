export interface Message {
  text: string;
  user: string;
  added: Date;
}

export const messages: Message[] = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];
