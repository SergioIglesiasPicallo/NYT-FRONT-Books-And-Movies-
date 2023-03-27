import { FC, memo, useCallback, useEffect, useMemo, useState } from "react";
import {
  GeneralContainer,
  Container,
  Image,
  Error,
  EditButton,
  InputContainer,
  Label,
  Input,
  ContainerEdit,
} from "./styles";
import { Field, Form, Formik } from "formik";
import { validationSchema } from "./constants";
import { useParams } from "react-router-dom";
import { Post } from "../../models/post";
import { getPostById, updatePost } from "../../services/api/post";
import React from "react";

const EditForm: FC = () => {
  const { id: postId } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleActiveEdition = useCallback(async () => {
    setIsEditing(true);
  }, []);

  const onEditCharacter = useCallback(
    async (values: Partial<Post>) => {
      if (isEditing && postId) {
        setIsLoading(true);
        const editedPost = await updatePost(postId, values);
        if (editedPost) {
          setPost(editedPost);
        }
        setIsLoading(false);
      }
    },
    [postId, isEditing]
  );

  const initialValues = useMemo(
    () => ({
      title: post?.title || "",
      image: post?.image || "",
      comment: post?.comment || "",
    }),
    [post]
  );

  const handleGetPost = useCallback(async (id?: string) => {
    if (id) {
      setIsLoading(true);
      const post = await getPostById(id);
      setPost(post);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    handleGetPost(postId);
  }, [handleGetPost, postId]);

  if (isLoading) {
    return <p>LOADING</p>;
  }

  return (
    <GeneralContainer>
      <ContainerEdit>
        <Image src={post?.image} />
        <Container>
          {!isEditing && (
            <EditButton onClick={handleActiveEdition}>
              Active Edition
            </EditButton>
          )}
          <Formik
            // type="edit"
            validationSchema={validationSchema}
            onSubmit={onEditCharacter}
            initialValues={initialValues}
          >
            <Form>
              <Field name="title">
                {({ field, meta }: { field: any; meta: any }) => (
                  <InputContainer>
                    <Label>Title</Label>
                    <Input
                      disabled={!isEditing}
                      $hasError={!!meta?.error}
                      type="text"
                      {...field}
                    />
                    {meta?.error && <Error>{meta.error}</Error>}
                  </InputContainer>
                )}
              </Field>
              <Field name="image">
                {({ field, meta }: { field: any; meta: any }) => (
                  <InputContainer>
                    <Label>Image</Label>
                    <Input
                      disabled={!isEditing}
                      $hasError={!!meta?.error}
                      type="text"
                      {...field}
                    />
                    {meta?.error && <Error>{meta.error}</Error>}
                  </InputContainer>
                )}
              </Field>
              <Field name="comment">
                {({ field, meta }: { field: any; meta: any }) => (
                  <InputContainer>
                    <Label>Description</Label>
                    <Input
                      disabled={!isEditing}
                      $hasError={!!meta?.error}
                      type="text"
                      {...field}
                    />
                    {meta?.error && <Error>{meta.error}</Error>}
                  </InputContainer>
                )}
              </Field>
              {isEditing && <EditButton type="submit">Edit</EditButton>}
            </Form>
          </Formik>
        </Container>
      </ContainerEdit>
    </GeneralContainer>
  );
};

export default memo(EditForm);
