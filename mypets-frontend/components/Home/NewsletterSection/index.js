import {
  Input,
  Box,
  Flex,
  FormControl,
  FormHelperText,
  FormErrorMessage,
} from "@chakra-ui/react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Formik, Form, Field } from "formik";
const Yup = require("yup");

import PageContainer from "../../Layouts/PageContainer/PageContainer";
import SectionHeader from "../../Layouts/SectionHeader/SectionHeader";
import EmailInputGroup from "../../Form/EmailInputGroup/EmailInputGroup";
import MypetsBtn from "../../Common/MypetsBtn/MypetsBtn";
import SectionSubHeader from "../../Layouts/SectionSubHeader/SectionSubHeader";

const emailSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Your email is required"),
});

function index({ data, ...props }) {
  return (
    <PageContainer bg="white" {...props}>
      <SectionHeader textAlign="center" mb={4}>
        {data.Header}
      </SectionHeader>
      <SectionSubHeader textAlign="center" maxW="lg" mb={8} mx="auto">
        {data.Text}
      </SectionSubHeader>
      <Flex alignSelf={"center"} textAlign="center" justifyContent="center">
        <MailchimpSubscribe
          url={
            "https://mypets.us7.list-manage.com/subscribe/post?u=ab086188fca8162fd4a2768ad&id=4105b76640"
          }
          render={({ subscribe, status, message }) => (
            <Formik
              enableReinitialize
              initialValues={{ email: "" }}
              onSubmit={(values, actions) => {
                subscribe({ EMAIL: values.email });
                actions.resetForm();
              }}
              validationSchema={emailSchema}
            >
              {(props) => (
                <Form>
                  <Field name="email">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.email && form.touched.email}
                      >
                        {status !== "success" && (
                          <>
                            <EmailInputGroup
                              field={field}
                              valid={!form.errors.email && form.touched.email}
                              variant="filled"
                            />
                            <FormErrorMessage>
                              {form.errors.email}
                            </FormErrorMessage>
                          </>
                        )}
                        {status === "success" ? (
                          <FormHelperText>{message}</FormHelperText>
                        ) : status === "error" ? (
                          <FormErrorMessage>{message}</FormErrorMessage>
                        ) : (
                          <></>
                        )}
                      </FormControl>
                    )}
                  </Field>
                  {status !== "success" && (
                    <MypetsBtn
                      mt={4}
                      btnText="Subscribe"
                      isLoading={status === "sending"}
                      type="submit"
                      rounded="full"
                      w={{ base: "full", md: "md" }}
                    />
                  )}
                </Form>
              )}
            </Formik>
          )}
        />
      </Flex>
    </PageContainer>
  );
}

export default index;
