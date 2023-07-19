import { FormEvent, useContext, useRef, useState } from "react";
import { Button } from "../../Button";
import { StarRating } from "../../StarRating";
import "./styles.css";
import { FeedbackContext } from "../../../context/feedback";

type FeedbackFormProp = {
    title?: string;
}

export const FeedbackForm = ({title}: FeedbackFormProp): JSX.Element => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const [selectedStars, setSelectedStars] = useState(1);
    const {setFeedback} = useContext(FeedbackContext);

    const submit = (e: FormEvent) => {
        e.preventDefault();
        const message = textareaRef.current?.value ?? "";
        setFeedback({message, rating: selectedStars})
        if (textareaRef.current) {
            textareaRef.current.value = "";
        }
    }

    return (
        <form className="feedback" onSubmit={submit}>
            <div className="feedback__content">
                {title && <h2 className="feedback__title">{title}</h2>}
                <StarRating initialSelectedStars={selectedStars} onChange={(selStrs) => setSelectedStars(selStrs)} />
                <textarea placeholder="What could we improve?" className="feedback__input" ref={textareaRef} />
            </div>
            <div className="feedback__submit"><Button type="submit">Send</Button></div>
        </form>
    )
};