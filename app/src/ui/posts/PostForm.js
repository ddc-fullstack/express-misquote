import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from 'react-bootstrap/Button'
import { Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import { httpConfig } from '../../utils/http-config'
import { FormDebugger } from '../shared/components/FormDebugger'
import { useDispatch } from 'react-redux'
import { fetchAllMisquotes } from '../../store/misquote'

export function PostForm () {

  const dispatch = useDispatch()
  const validator = Yup.object().shape({
    misquoteContent: Yup.string().required("content for the misquote is required")
      .max(255, "content for this misquote is too long"),
    misquoteAttribution: Yup.string()
      .required("Attribution is required to submit a misquote")
      .max(64, "Attribution for this misquote is too long"),
    misquoteSubmitter: Yup.string()
      .required(" a submitter required to submit a misquote")
      .max(64, "submission for this misquote is too long"),
  })

  const misquote = {
    misquoteContent: '',
    misquoteSubmitter: '',
    misquoteAttribution: '',
  }

  const submitMisquote = (values, {resetForm, setStatus}) => {
    httpConfig.post("/apis/misquote", values).then(reply => {
      let {message, type} = reply
      if (reply.status === 200) {
        resetForm()
        dispatch(fetchAllMisquotes())

      }
      setStatus({message, type})
    })



  }
  return (
    <>
      <Formik onSubmit={submitMisquote} initialValues={misquote} validationSchema={validator}>
        {(props) => {
          console.log("", props)
          const {
            status,
            values,
            errors,
            touched,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset
          } = props;
          return (
            <>
              <Form onSubmit={handleSubmit}>
                <Form.Group>
                  <FormControl
                    type="text"
                    placeholder="Who said this misquote"
                    name="misquoteAttribution"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.misquoteAttribution}
                  />
                  {
                    errors.misquoteAttribution && (
                      <div className="alert alert-danger">
                        {errors.misquoteAttribution}
                      </div>
                    )
                  }
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    name="misquoteSubmitter"
                    type="text"
                    placeholder="Who are you"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.misquoteSubmitter}
                  />
                  {
                    errors.misquoteSubmitter && (
                      <div className="alert alert-danger">
                        {errors.misquoteSubmitter}
                      </div>
                    )
                  }
                </Form.Group>
                <Form.Group>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon="dog"/>
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      name="misquoteContent"
                      as="textarea"
                      placeholder="Famous Misquotes go here"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.misquoteContent}
                    />
                  </InputGroup>
                  {
                    errors.misquoteContent && (
                      <div className="alert alert-danger">
                        {errors.misquoteContent}
                      </div>
                    )
                  }
                </Form.Group>
                <Form.Group>
                  <InputGroup>
                    <Button variant="primary" type="submit"> Submit <FontAwesomeIcon
                      icon="envelope"/></Button>
                    <Button variant="danger" onClick={handleReset}> Reset Form</Button>
                  </InputGroup>
                </Form.Group>
                <FormDebugger {...props} />
              </Form>
              {status && (<div className={status.type}>{status.message}</div>)}
            </>
          )
        }}
      </Formik>
    </>
  )
}

