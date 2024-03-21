import { Star } from "../Star/Star";

type Props = {
    count: number;
};

export const Stars = ({count}: Props) => {
    if (!Number.isInteger(count) || count < 1 || count > 5) return null;

    console.log(count)
    return (
        <ul className="card_stars">
            {Array.from({length: count}, (_,index) => (
                <Star key={index} />
            ))}
        </ul>
    );
}
