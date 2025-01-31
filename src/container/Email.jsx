import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import { Button } from "@mui/material";
import { sendEmail } from "../commonFunc";

export default function Email() {
  const handleSubmit = (values, resetForm) => {
    const event = new CustomEvent("emails", { detail: values });
    dispatchEvent(event);
    resetForm();
  };

  return (
    <div>
      <h2 className="text-center text-primary">Email Project</h2>
      <div
        className="container p-5 mt-3"
        style={{ backgroundColor: "#b6b5e5", boxShadow: "1px 4px 8px grey" }}
      >
        <Formik
          initialValues={{
            emailTo: "",
            subject: "",
            emailBody: "",
          }}
          validationSchema={sendEmail}
          enableReinitialize={true}
          onSubmit={(values, { resetForm }) => {
            handleSubmit(values, resetForm);
          }}
        >
          {(props) => (
            <Form onSubmit={props.handleSubmit}>
              <div className=" ">
                <div className="container-fluid">
                  <div className="row ">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="emailTo">To</label>
                        <input
                          type="email"
                          className="form-control"
                          id="emailTo"
                          placeholder="Recipients"
                          value={props.values.emailTo}
                          name="emailTo"
                          onChange={props.handleChange}
                        />

                        <ErrorMessage
                          name="emailTo"
                          component="div"
                          style={{ color: "red" }}
                        />
                      </div>
                    </div>

                    <div className="col-md-12 mt-3">
                      <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input
                          type="text"
                          className="form-control"
                          id="subject"
                          placeholder="Enter Subject"
                          value={props.values.subject}
                          name="subject"
                          onChange={props.handleChange}
                        />
                      </div>
                      <ErrorMessage
                        name="subject"
                        component="div"
                        style={{ color: "red" }}
                      />
                    </div>

                    <div className="col-md-12 mt-3">
                      <div className="form-group">
                        <label htmlFor="emailBody">Body</label>
                        <textarea
                          type="text"
                          className="form-control"
                          id="emailBody"
                          // placeholder=" Body"
                          rows={8}
                          value={props.values.emailBody}
                          name="emailBody"
                          onChange={props.handleChange}
                        />
                      </div>
                      <ErrorMessage
                        name="emailBody"
                        component="div"
                        style={{ color: "red" }}
                      />
                    </div>
                  </div>
                </div>

                <div className="d-flex justify-content-center mt-4">
                  <Button
                    variant="outlined"
                    type="submit"
                    sx={{
                      my: 1,
                      color: "#47478c",
                      backgroundColor: "white",
                      fontSize: "16px",
                    }}
                  >
                    Send Email
                  </Button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
