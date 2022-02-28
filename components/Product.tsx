import { Rating } from "./Rating";

interface ProductProps {
    data: {
        description: string;
        imageUrl: string;
        imageAlt: string;
        rating: number;
    }
}
  
export const Product = ({ data }: ProductProps) => {
    return <>
        <img src={data.imageUrl} alt={data.imageAlt} />
        <p>{data.description}</p>
        <Rating rating={data.rating}/>
    </>
};