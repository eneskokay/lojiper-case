import * as Yup from "yup";

const getCharacterValidationError = (str) => {
  return `*Şifreniz en az 1 ${str} barındırmalı!`;
};

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .matches(/^[aA-zZ\s]+$/, "Yanlızca Harf kullanabilirsiniz!")
    .min(3, "*Adınız en az 3 harf olmalıdır!")
    .max(20, "*Adınız en fazla 20 harf olmalıdır!")
    .required("*Bu Alanı Boş Bırakamazsınız!"),
  lastName: Yup.string()
    .matches(/^[aA-zZ\s]+$/, "Yanlızca Harf kullanabilirsiniz!")
    .max(20, "*Soyadınız en fazla 20 harf olmalıdır!")
    .min(2, "*Soyadınız en az 2 harf olmalıdır!")
    .required("*Bu Alanı Boş Bırakamazsınız!"),
  email: Yup.string()
    .email("*Geçersiz E-Posta!")
    .required("*Bu Alanı Boş Bırakamazsınız!"),
  identityNumber: Yup.number()
    .test(
      "len",
      "*Kimlik No 11 hane olmak zorundadır!",
      (val) => String(val).length === 11
    )
    .typeError("*Sadece Rakam Kullanabilirsiniz!")
    .required("*Bu Alanı Boş Bırakamazsınız!"),
  bornDate: Yup.string().required("*Bu Alanı Boş Bırakamazsınız!"),
  password: Yup.string()
    .required("*Bu Alanı Boş Bırakamazsınız!")
    .min(8, "*Şifre en az 8 karakter uzunluğunda olmalıdır!")
    .matches(/[0-9]/, getCharacterValidationError("Rakam"))
    .matches(/[a-z]/, getCharacterValidationError("Harf"))
    .matches(/[A-Z]/, getCharacterValidationError("Büyük Harf")),
  passwordConfirm: Yup.string()
    .label("Şifreyi Onayla")
    .oneOf([Yup.ref("password"), null], "Şifreler Eşleşmiyor!")
    .required("*Bu Alanı Boş Bırakamazsınız!"),
});
export default validationSchema;
