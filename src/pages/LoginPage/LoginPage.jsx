import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper"
import './Login.scss';

export const LoginPage = () => {
    return (
        <ContentWrapper>
            <form action="nun">
                <label htmlFor="nun">
                    <h3>Username:</h3>
                </label>
                <input type="text" id="nun" name="nun" />
                <label htmlFor="password">
                    <h3>Password:</h3>
                </label>
                <input type="password" id="password" name="password" />
                <button type="submit">Login</button>
            </form>
        </ContentWrapper>
    )
}