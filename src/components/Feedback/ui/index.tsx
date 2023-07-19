import { Button } from "../../Button";
import { StarRating } from "../../StarRating";
import "./styles.css";

type FeedbackProp = {
    title?: string;
}

export const Feedback = ({title}: FeedbackProp): JSX.Element => {
    return (
        <div className="feedback">
            <div className="feedback__content">
                {title && <h2 className="feedback__title">{title}</h2>}
                <StarRating />
                <textarea placeholder="What could we improve?" className="feedback__input" />
            </div>
            <div className="feedback__submit"><Button>Send</Button></div>
        </div>
    )
};