import { createContext } from "react";

export type Feedback = {
    rating: number;
    message: string;
};

export type State = {
    feedback: Feedback;
    setFeedback: (feedback: Feedback) => void;
};

export const FeedbackContext = createContext<State>({feedback: {rating: 1, message: ''}, setFeedback: () => {return;}});