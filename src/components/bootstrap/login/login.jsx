import { useState } from "react";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    userName: "sai",
    password: "123",
  });

  const [formError, setFormError] = useState({
    userNameErr: false,
    passwordErr: false,
  });

  const [userData, setUserData] = useState({});

  const userNameHandler = (event) => {
    const userEnteredValue = event.target.value;
    setFormData({ ...formData, userName: userEnteredValue });
    if (userEnteredValue.length > 10) {
      setFormError({ ...formError, userNameErr: true });
    } else {
      setFormError({ ...formError, userNameErr: false });
    }
  };

  const handlePasswordHandler = (event) => {
    const pass = event.target.value;
    setFormData({ ...formData, password: pass });
    if (validatePassword(pass)) {
      setFormError({ ...formError, passwordErr: false });
    } else {
      setFormError({ ...formError, passwordErr: true });
    }
  };

  const validatePassword = (password) => {
    const re =
      /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()+=-\?;,./{}|":<>\[\]\\' ~_]).{8,}/;
    return re.test(password);
  };

  const handleLogin = () => {
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: formData.userName,
        password: formData.password,
        expiresInMins: 30,
      }),
      credentials: "include",
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setUserData(res);
      });
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card shadow-lg p-4">
            <h3 className="text-center mb-4">Login Form</h3>
            <form>
              <div className="form-group mb-3">
                <label htmlFor="usr">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="usr"
                  value={formData.userName}
                  onChange={userNameHandler}
                />
                {formError.userNameErr && (
                  <small className="text-danger">
                    Please enter less than 10 characters
                  </small>
                )}
              </div>

              <div className="form-group mb-3">
                <label htmlFor="pwd">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="pwd"
                  value={formData.password}
                  onChange={handlePasswordHandler}
                />
                {/* {formError.passwordErr && (
                  <small className="text-danger">
                    Please enter a strong password: must include uppercase,
                    lowercase, number, and special character.
                  </small>
                )} */}
              </div>

              <div className="text-center">
                <button
                  type="button"
                  className="btn btn-success px-4"
                  onClick={handleLogin}
                >
                  Login
                </button>
              </div>
            </form>
          </div>

          {userData?.firstName && (
            <div className="card mt-4 text-center shadow-sm p-3">
              <h4>
                Welcome {userData.firstName} {userData.lastName}
              </h4>
              <img
                src={userData.image}
                alt="User"
                className="rounded-circle mt-2"
                style={{ width: "100px", height: "100px", objectFit: "cover" }}
              />
            </div>
          )}
        </div>
        
      </div>
    </div>
  );
};

export default LoginForm;
