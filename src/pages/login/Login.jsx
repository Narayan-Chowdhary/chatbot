import LoginImage from "../../assets/images/LoginImage.jpg";
import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  base_url,
  getUserApiEndPoint,
} from "../../services/apiengine/ApiEndPoints";
import AlertMessage from "../../components/alertmessage/AlertMessage";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  CardMedia,
  CardContent,
  Card,
  IconButton,
  InputAdornment,
  FormControl,
} from "@mui/material";
import Person2Icon from "@mui/icons-material/Person2";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function Login({ setIsAuthenticated, isAuthenticated }) {
  const navigation = useNavigate();
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .required("Enter a valid email address"),
    password: Yup.string().required("Enter Valid password"),
  });

  const [showPass, setShowPass] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((showPass) => !showPass);
    setShowPass(!showPass);
  };

  const handleLoginPage = async (values) => {
    const responseUserDetails = await fetch(`${base_url}${getUserApiEndPoint}`);
    const responseUserDetailsJson = await responseUserDetails.json();
    const userValidate = responseUserDetailsJson?.find((user) => {
      return user?.email === values?.email;
    });
    const findEmail = userValidate?.email === values?.email;
    const findPassword = userValidate?.password === values?.password;
    if (findEmail && findPassword) {
      localStorage.setItem("userDetails", JSON.stringify(userValidate.email));

      setIsAuthenticated(true);
      navigation("/allchatbots");
    } else {
      setError(true);
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
        }}
      >
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={LoginSchema}
          validateOnChange={true}
          validateOnBlur={false}
          onSubmit={(values) => {
            handleLoginPage(values);
          }}
        >
          {({
            errors,
            values,
            touched,
            handleChange,
            validateField,
            validateForm,
          }) => (
            <Form>
              <Box>
                <Card
                  sx={{
                    maxWidth: 650,
                    width: "95vw",
                    // height: "80vh  ",
                    boxShadow: "0 0 40px 0 rgba(0,0,0,.15)",
                  }}
                >
                  <CardMedia
                    sx={{
                      height: 140,
                      backgroundColor: "rgba(198, 196, 221, 0.9)",
                      backgroundBlendMode: "multiply",
                    }}
                    image={LoginImage}
                    title="Sign In"
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        pt: 6,
                        color: "#fff",
                      }}
                    >
                      Sign In
                    </Typography>
                  </CardMedia>
                  <CardContent
                    sx={{
                      pt: 5,
                    }}
                  >
                    <Grid container rowSpacing={5} sx={{ px: 5 }}>
                      <Grid item xs={12} sm={12} md={12}>
                        {/* <Typography variant="h6">Email</Typography> */}
                        <TextField
                          variant="standard"
                          label="Enter Email"
                          fullWidth
                          type="text"
                          name="email"
                          value={values.email}
                          helperText={touched.email ? errors.email : ""}
                          error={touched.email ? errors.email : ""}
                          touched={touched.email}
                          InputProps={{
                            sx: {
                              borderRadius: "10px",
                            },
                          }}
                          onChange={handleChange("email")}
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={12}>
                        <Box>
                          {/* <Typography variant="h6">Password</Typography> */}
                          <FormControl fullWidth>
                            <TextField
                              variant="standard"
                              label="Enter Password"
                              type={showPass ? "text" : "password"}
                              name="password"
                              helperText={
                                touched.password ? errors.password : ""
                              }
                              error={touched.password ? errors.password : ""}
                              touched={touched.password}
                              value={values.password}
                              onChange={handleChange("password")}
                              InputProps={{
                                sx: {
                                  borderRadius: "10px",
                                },

                                endAdornment: (
                                  <InputAdornment position="end">
                                    <IconButton
                                      aria-label="toggle password visibility"
                                      onClick={handleClickShowPassword}
                                      edge="end"
                                    >
                                      {showPassword ? (
                                        <Visibility />
                                      ) : (
                                        <VisibilityOff />
                                      )}
                                    </IconButton>
                                  </InputAdornment>
                                ),
                              }}
                            />
                          </FormControl>
                        </Box>
                      </Grid>

                      <Grid item xs={12} sm={12} md={12} sx={{ pb: 3 }}>
                        <Button
                          fullWidth
                          variant="contained"
                          type="submit"
                          sx={{
                            p: 1,
                            fontSize: "16px",
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <Box sx={{ height: "28px" }}>
                              <Person2Icon sx={{ fontSize: "25px" }} />
                            </Box>

                            <Box>Sign In</Box>
                          </Box>
                        </Button>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Box>
            </Form>
          )}
        </Formik>
        <AlertMessage
          text="Invalid credentials"
          status="error"
          isActive={error}
          setActive={setError}
        />
      </Box>
    </>
  );
}
