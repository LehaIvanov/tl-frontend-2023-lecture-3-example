import { useState } from "react";
import { Star } from "../../Star";
import "./styles.css";

const createArray = (length: number): undefined[] => [...new Array<undefined>(length)];

type StarRatingProps = {
    totalStars?: number;
};

export const StarRating = ({totalStars = 5}: StarRatingProps): JSX.Element => {
    const [selectedStars, setSelectedStars] = useState(1);
    
    return (
        <div className="star-rating">
            <span className="star-rating__rating">{selectedStars}/{totalStars}</span>
            <div className="star-rating__stars">{createArray(totalStars).map((_, i) => (<Star key={i} selected={selectedStars > i} onSelect={() => setSelectedStars(i + 1)} />))}</div>
        </div>
    )
}