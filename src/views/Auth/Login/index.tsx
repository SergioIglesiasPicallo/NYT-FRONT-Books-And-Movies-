import { FC, memo, useCallback } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Form,
  FormButton,
  FormContainer,
  Input,
  Label,
  Error,
  InputContainer,
  Return,
  StyledLink,
} from './styles';
import { Formik, Field } from 'formik';
import { initialValues, validationSchema } from './constants';
import { login } from '../../../services/api/auth';

const LoginForm: FC = () => {
  const navigate = useNavigate();
 
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (
    values: typeof initialValues,
    { setSubmitting, setErrors }: any
  ) => {
    const loginError = await login(values);

    if (loginError) {
      setError(loginError);
      setErrors({ password: loginError });
    } else {
      navigate('/landing');
    }
    setSubmitting(false);
  };


  const goToBack = useCallback(() => {
    navigate('/landing');
  }, [navigate]);

  return (
    <FormContainer>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleLogin}>
        {({ isSubmitting }) => (
          <Form>
            <Field name="email">
              {({ field, meta }: { field: any; meta: any }) => (
                <InputContainer>
                  <Label>Email</Label>
                  <Input $hasError={!!meta?.error} type="text" {...field} />
                  {meta?.error && <Error>{meta.error}</Error>}
                </InputContainer>
              )}
            </Field>
            <Field name="password">
              {({ field, meta }: { field: any; meta: any }) => (
                <InputContainer>
                  <Label>Password</Label>
                  <Input $hasError={!!meta?.error} {...field} type="password" />
                  {meta?.error && <Error>{meta.error}</Error>}
                </InputContainer>
              )}
            </Field>
                        <FormButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Loading...' : 'Login'}
            </FormButton>
            <Return>
      
              <StyledLink href="/signup">Go to register</StyledLink>
            </Return>
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
};

export default memo(LoginForm);
