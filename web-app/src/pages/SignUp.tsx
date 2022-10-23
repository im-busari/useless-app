import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('token')) {
          return navigate("/dashboard");
        }
      }, []);
      
    return (
        <>
            <h1>SignUp page</h1>
        </>
    )
}

export default SignUp;