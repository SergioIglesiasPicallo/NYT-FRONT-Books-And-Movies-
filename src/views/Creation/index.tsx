import { FC, memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Form,
  FormButton,
  FormContainer,
  Input,
  Label,
  Error,
  InputContainer,
  GeneralContainer,
  BackContainer,
  ButtonBack,
  TittleContainer,
} from './styles';
import { Formik, Field } from 'formik';
import { initialValues, validationSchema } from './constants';
import { createPost } from '../../services/api/post';

const CreationForm: FC = () => {
  const navigate = useNavigate();

  const handleCreation = useCallback(async (values: typeof initialValues) => {
    const post = await createPost(values);
    if (post) {
      navigate('/landing');
    }
  }, [navigate]);

  const goToBack = useCallback(() => {
    navigate('/landing');
  }, [navigate]);

  return (
    <GeneralContainer>
      <BackContainer>
        <ButtonBack onClick={goToBack}>Go Back!</ButtonBack>
      </BackContainer>
      <FormContainer>
        <TittleContainer>Create your cocktail</TittleContainer>
        <Formik
          validationSchema={validationSchema}
          onSubmit={handleCreation}
          initialValues={initialValues}>
          <Form>
            <Field name="title">
              {({ field, meta }: { field: any; meta: any }) => (
                <InputContainer>
                  <Label>Title</Label>
                  <Input $hasError={!!meta?.error} type="text" {...field} />
                  {meta?.error && <Error>{meta.error}</Error>}
                </InputContainer>
              )}
            </Field>
            <Field name="image">
              {({ field, meta }: { field: any; meta: any }) => (
                <InputContainer>
                  <Label>Insert your image</Label>
                  <Input $hasError={!!meta?.error} {...field} type="text" />
                  {meta?.error && <Error>{meta.error}</Error>}
                </InputContainer>
              )}
            </Field>
            <Field name="comment">
              {({ field, meta }: { field: any; meta: any }) => (
                <InputContainer>
                  <Label>Ingredients & Method </Label>
                  <Input $hasError={!!meta?.error} {...field} type="text" />
                  {meta?.error && <Error>{meta.error}</Error>}
                </InputContainer>
              )}
            </Field>
            <FormButton type="submit">Create</FormButton>
            <div style={{ marginTop: '10px' }}></div>
          </Form>
        </Formik>
      </FormContainer>
    </GeneralContainer>
  );
};

export default memo(CreationForm);
