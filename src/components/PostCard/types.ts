export type Props = {
  title?: string;
  image?: string;
  isFavorite?: boolean;
  comment: string;
  id: string;
  toggleFav: (id: string) => void;
  onClick?: (id: string) => void;
};
