import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  title: Yup.string()
  .min(4,  "Too Short!")
  .max(120, "Too Long!")
    .required("El campo título es requerido"),
  image: Yup.string()
  .min(4, "Too Short!")
  .max(2500, "Too Long!")
  .required("El campo imagen es requerido"),
  comment: Yup.string()
  .min(4,  "Too Short!")
  .max(250, "Too Long!")
  .required("El campo comentario es requerido"),
});

export const initialValues = {
  title: "",
  image: "",
  comment: "",
};
