import "./styles.css";

type ButtonProps = {
    onClick?: () => void;
    children?: React.ReactNode;
    type?: "button" | "submit" | "reset";
}

export const Button = ({onClick, children, type}: ButtonProps) => {
    return (
        <button type={type} onClick={onClick} className="button">{children}</button>
    )
}