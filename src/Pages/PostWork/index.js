import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import moment from "moment";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Form from "react-bootstrap/Form";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import { submitPost } from "../../store/post/actions";

import { Formik } from "formik";
import * as Yup from "yup";
import "./PostWork.css";

// Schema for yup
const validationSchema = Yup.object().shape({
  title: Yup.string()
    .min(4, "*Post title must have at least 4 characters")
    .max(25, "*Post title can't be longer than 25 characters")
    .required("*Title is required"),
  description: Yup.string()
    .min(10, "*Description must have at least 10 characters")
    .required("*Description is required"),
  imageUrl: Yup.string()
    .url("*Must enter URL in http://www.example.com format")
    .required("*Image URL required"),
  myDate: Yup.date().required("*Date is required").min(new Date()),
});

export default function PostWork() {
  const [fromMin, setFromMin] = useState();
  const [toMin, setToMin] = useState();

  const today = new Date();

  const dispatch = useDispatch();

  const [myDate, setDate] = useState(today);
  const [fromTime, setFromTime] = useState(today);
  const [toTime, setToTime] = useState();

  useEffect(() => {
    const calculateFromTime = () => {
      let minFromTime;
      if (myDate) {
        if (
          moment(myDate).format("YYYY-MM-DD") ===
          moment(today).format("YYYY-MM-DD")
        ) {
          minFromTime = new Date(
            new Date().setHours(
              new Date().getHours(),
              new Date().getMinutes() + 15
            )
          );
        } else {
          minFromTime = new Date(myDate.setHours(0, 0));
        }

        setFromTime(minFromTime);
        setFromMin(minFromTime);
      }
    };
    calculateFromTime();
  }, [myDate]);

  //console.log("min:", fromMin);

  useEffect(() => {
    const calculateToTime = () => {
      // console.log("fromTime:", fromTime);
      const myFromTime = new Date(fromTime);
      if (fromTime) {
        const minToTime = new Date(
          myFromTime.setHours(myFromTime.getHours() + 2)
        );
        setToTime(minToTime);
        setToMin(minToTime);
      }
    };
    calculateToTime();
  }, [fromTime]);

  const postForm = (values) => {
    //event.preventDefault();
    console.log("my values:", myDate, fromTime, toTime);
    const startTime = `${moment(myDate).format("YYYY-MM-DD")} ${moment(
      fromTime
    ).format("HH:mm")}`;
    const endTime = `${moment(myDate).format("YYYY-MM-DD")} ${moment(
      toTime
    ).format("HH:mm")}`;
    console.log(
      "new my values:",
      values.title,
      values.description,
      values.imageUrl,
      startTime,
      endTime
    );

    dispatch(
      submitPost(
        values.title,
        values.description,
        values.imageUrl,
        startTime,
        endTime
      )
    );
  };

  return (
    <Formik
      initialValues={{
        title: "",
        description: "",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSMut25Aw2iMirLtCWnKDyIx98svQ_x9tq5ow&usqp=CAU",
        myDate: today,
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        // When button submits form and form is in the process of submitting, submit button is disabled
        setSubmitting(true);

        // Simulate submitting to database, shows us values submitted, resets form
        setTimeout(() => {
          //alert(JSON.stringify(values, null, 2));
          postForm(values);
          resetForm();
          setSubmitting(false);
        }, 3000);
      }}
    >
      {/* Callback function containing Formik state and helpers that handle common form actions */}
      {({
        values,
        errors,
        touched,
        handleChange,
        handleSubmit,
        isSubmitting,
      }) => (
        <div style={{ alignItems: "center", margin: "0px 25% 0px 25%" }}>
          <Form onSubmit={handleSubmit}>
            <h1 className="mt-5 mb-5">Post some work</h1>
            <Form.Group controlId="validationCustom01">
              <Form.Label>Title : </Form.Label>
              <Form.Control
                value={values.title}
                onChange={handleChange}
                name="title"
                type="text"
                placeholder="Enter title.."
                className={touched.title && errors.title ? "error" : null}
              />
              {touched.title && errors.title ? (
                <div className="error-message">{errors.title}</div>
              ) : null}
            </Form.Group>

            <Form.Group controlId="validationCustom02">
              <Form.Label>Description : </Form.Label>
              <Form.Control
                as="textarea"
                rows="5"
                value={values.description}
                onChange={handleChange}
                name="description"
                type="text"
                placeholder="Enter some description here.."
                className={
                  touched.description && errors.description ? "error" : null
                }
              />
              {touched.description && errors.description ? (
                <div className="error-message">{errors.description}</div>
              ) : null}
            </Form.Group>

            <Form.Group controlId="validationCustom03">
              <Form.Label>Image URL : </Form.Label>
              <Form.Control
                type="text"
                name="imageUrl"
                onChange={handleChange}
                value={values.imageUrl}
                placeholder="Enter image url here.."
                className={touched.imageUrl && errors.imageUrl ? "error" : null}
              />

              <Form.Text className="text-muted">
                {`You can give some image url for your post for an easy eye catch of the seekers or will be defaulted with site logo`}
              </Form.Text>
              {touched.imageUrl && errors.imageUrl ? (
                <div className="error-message">{errors.imageUrl}</div>
              ) : null}
            </Form.Group>

            <Form.Group>
              <Col className="mt-2" md={{ span: 4, offset: 2 }}>
                {values.imageUrl ? (
                  <Image src={values.imageUrl} alt="preview" thumbnail />
                ) : null}
              </Col>
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="validationCustom04">
                <Form.Label>Date </Form.Label>

                <DatePicker
                  todayButton="Today"
                  selected={myDate}
                  onChange={(date) => setDate(date)}
                  name="startDate"
                  dateFormat="MM/dd/yyyy"
                  minDate={today}
                  required
                />
              </Form.Group>

              <Form.Group as={Col} controlId="validationCustom05">
                <Form.Label>From Time </Form.Label>

                <DatePicker
                  selected={fromTime}
                  onChange={(date) => setFromTime(date)}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={15}
                  timeCaption="Time"
                  dateFormat="h:mm aa"
                  minDate={today}
                  minTime={fromMin}
                  maxTime={myDate && new Date(myDate.setHours(23, 59))}
                  required
                />
              </Form.Group>

              <Form.Group as={Col} controlId="validationCustom06">
                <Form.Label>To Time </Form.Label>

                <DatePicker
                  selected={toTime}
                  name="toTime"
                  onChange={(date) => setToTime(date)}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={15}
                  timeCaption="Time"
                  dateFormat="h:mm aa"
                  minDate={today}
                  minTime={toMin}
                  maxTime={myDate && new Date(myDate.setHours(23, 59))}
                  required
                />
              </Form.Group>
            </Form.Row>
            <Form.Group className="mt-5">
              <Button id="post" type="submit" disabled={isSubmitting}>
                Submit Post
              </Button>
            </Form.Group>
          </Form>
        </div>
      )}
    </Formik>
  );
}
