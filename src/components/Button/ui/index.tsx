import "./styles.css";

type ButtonProps = {
    onClick?: () => void;
    children?: React.ReactNode;
}

export const Button = ({onClick, children}: ButtonProps) => {
    return (
        <button type="button" onClick={onClick} className="button">{children}</button>
    )
}