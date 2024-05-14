import "./Button.scss"

type ButtonProps ={
    label: string;
}

const Button = ({label}: ButtonProps) => {
    return(
            <button className="button" >{label}</button>
    )
}

export default Button;