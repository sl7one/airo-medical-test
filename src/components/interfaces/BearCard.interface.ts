export interface IBearCard {
  index: number;
  size: number;
  isChoosed: boolean;
  id: number;
  name: string;
  image_url: string;
  description: string;
  handleClick: (e: React.MouseEvent<HTMLDivElement>, id: number) => void;
}
