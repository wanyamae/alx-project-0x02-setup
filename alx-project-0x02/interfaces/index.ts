export interface CardProps {
  id?: number;
  title: string;
  content: string;
  className?: string;
}
export interface PostModalProps {
  onAddPost: (post: { title: string; content: string}) => void;
}



export const cardData: CardProps[] = [
  { id: 1, title: 'Card 1', content: 'This is the content of card 1.' },
  { id: 2, title: 'Card 2', content: 'This is the content of card 2.' },
  { id: 3, title: 'Card 3', content: 'This is the content of card 3.' },
  { id: 4, title: 'Card 4', content: 'This is the content of card 4.' },
  { id: 5, title: 'Card 5', content: 'This is the content of card 5.' },
  { id: 6, title: 'Card 6', content: 'This is the content of card 6.' },
  { id: 7, title: 'Card 7', content: 'This is the content of card 7.' },
  { id: 8, title: 'Card 8', content: 'This is the content of card 8.' },
  { id: 9, title: 'Card 9', content: 'This is the content of card 9.' },
  { id: 10, title: 'Card 10', content: 'This is the content of card 10.' }
];