import { FormEvent, useRef, useState } from "react";
import { Button } from "../../Button";
import { StarRating } from "../../StarRating";
import "./styles.css";

type FeedbackProp = {
    title?: string;
}

export const Feedback = ({title}: FeedbackProp): JSX.Element => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const [selectedStars, setSelectedStars] = useState(1);

    const submit = (e: FormEvent) => {
        e.preventDefault();
        const message = textareaRef.current?.value ?? "";
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
            <div className="feedback__submit"><Button onClick={() => {console.log(textareaRef.current?.value)}}>Send</Button></div>
        </form>
    )
};