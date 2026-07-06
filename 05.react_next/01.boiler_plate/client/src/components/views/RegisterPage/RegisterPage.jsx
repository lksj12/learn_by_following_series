import { useState } from 'react';
import { useDispatch } from "react-redux";
import { loginUser, registerUser } from "../../../features/user/userSlice";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // const user = useSelector((state) => state.user);
    // console.log("Redux user state:", user);

    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [PasswordCheck, setPasswordCheck] = useState("");

    const onNameHandler = (event) => {
        setName(event.currentTarget.value);
    };

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value);
    };

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    };

    const onPasswordCheckHandler = (event) => {
        setPasswordCheck(event.currentTarget.value);
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();

        if(Password !== PasswordCheck) {
            return alert("비밀번호 확인 요망")
        }

        const body = {
            name: Name,
            email: Email,
            password: Password
        };

        dispatch(registerUser(body))
            .then(res => {
                if (res.payload.success) {
                    navigate("/login")
                }
                else{
                    alert(res.payload.error || "Failed to SignUp");
                }
            })
    };

    return (
        <div style={{
            display: "flex", justifyContent: "center", alignItems: "center",
            width: "100%", height: "100vh"
        }}>
            <form
                style={{ display: "flex", flexDirection: "column" }}
                onSubmit={onSubmitHandler}
            >
                <label>Name</label>
                <input type="text" value={Name} onChange={onNameHandler} />

                <label>Email</label>
                <input type="email" value={Email} onChange={onEmailHandler} />

                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler} />

                <label>PasswordCheck</label>
                <input type="password" value={PasswordCheck} onChange={onPasswordCheckHandler} />

                <br />
                <button>SignUp</button>
            </form>
        </div>
    );
}

export default RegisterPage;