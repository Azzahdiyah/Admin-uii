import React from 'react';
import AuthLayout from "../Components/Layouts/AuthLayout";
import FormSignUp from '../Components/Fragments/FormSignUp';

const SignUpPage = () => {
  return (
    <AuthLayout type="sign up">
        <FormSignUp />
    </AuthLayout>
  );
};

export default SignUpPage;