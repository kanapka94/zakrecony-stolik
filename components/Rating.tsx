interface RatingProps {
    rating: number;
}
  
export const Rating = (props: RatingProps) => <span>{props.rating}</span>;