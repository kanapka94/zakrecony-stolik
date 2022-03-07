interface RatingProps {
  rating: number;
}

export const Rating = (props: RatingProps) => (
  <span className="text-orange-400">{props.rating}</span>
);
