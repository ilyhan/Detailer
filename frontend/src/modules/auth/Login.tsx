import { forgotUrl } from "./authLinks";
import AuthButton from "./components/AuthButton";
import { AuthInput, AuthInputWrapper, AuthLabel, AuthLink, AuthSeparator } from "./styles";

export default function Login() {

    // ToDo
    const handleClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

    }
    return (
        <>
            <AuthInputWrapper>
                <AuthLabel htmlFor="email" >Email</AuthLabel>
                <AuthInput id="email" type="email" placeholder="user@gmail.com" required />
            </AuthInputWrapper>

            <AuthInputWrapper>
                <AuthLabel htmlFor="password" >Пароль</AuthLabel>
                <AuthInput id="password" type="password" placeholder="--------" />
            </AuthInputWrapper>

            <AuthButton title="Войти" clickFuntion={handleClick}/>

            <AuthSeparator></AuthSeparator>

            <AuthLink to={forgotUrl}>Забыли пароль?</AuthLink>
        </>
    )
}
