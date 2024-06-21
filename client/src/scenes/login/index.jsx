// // src/Login.js
// import React from 'react';
// import { GoogleLogin } from '@react-oauth/google';
// import { useNavigate } from 'react-router-dom';
// import { jwtDecode } from 'jwt-decode'; // Correct import statement

// const Login = () => {
//   const navigate = useNavigate();

//   const handleSuccess = (response) => {
//     try {
//       const decoded = jwtDecode(response.credential);
//       localStorage.setItem('user', JSON.stringify(decoded));
//       navigate('/dashboard');
//     } catch (error) {
//       console.error('Error decoding JWT:', error);
//     }
//   };

//   const handleError = () => {
//     console.error('Login Failed');
//   };

//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//       <GoogleLogin
//         onSuccess={handleSuccess}
//         onError={handleError}
//       />
//     </div>
//   );
// };

// export default Login;
// src/scenes/login/index.jsx
// src/scenes/login/index.jsx
import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { jwtDecode} from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { login } from '../../store/authSlice';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSuccess = (response) => {
    try {
      const decoded = jwtDecode(response.credential);
      dispatch(login(decoded));
      localStorage.setItem('user', JSON.stringify(decoded));
      navigate('/dashboard');
    } catch (error) {
      console.error('Error decoding JWT:', error);
    }
  };

  const handleError = () => {
    console.error('Login Failed');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={handleError}
      />
    </div>
  );
};

export default Login;