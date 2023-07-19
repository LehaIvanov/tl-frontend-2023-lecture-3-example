import DefaultStar from "../../../assets/default_star.svg";
import { FilledStar } from "./FilledStar";

type StarProps = {
    selected: boolean;
    onSelect?: () => void;
};

export const Star = ({selected, onSelect}: StarProps): JSX.Element => {
    return <div onClick={onSelect}>{selected ? <FilledStar /> :<img src={DefaultStar} alt="Empty star" />}</div>
};