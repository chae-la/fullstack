import "./Button.scss"

type ButtonProps ={
    label: string;
    link: string;
}

const Button = ({label, link}: ButtonProps) => {
    return(
            <a className="button" href={link}>{label}</a>
    )

}

export default Button;