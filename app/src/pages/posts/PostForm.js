import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from 'react-bootstrap/Button'
import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { httpConfig } from '../../shared/utils/http-config'
import { FormDebugger } from '../../shared/components/FormDebugger'

export function PostForm () {
  const initialValues = {
    postContent: '',
    postTitle: ''
  }

  const validator = Yup.object().shape({
    postContent: Yup.string().required('Post Content is required').max(1024, 'Post Content is to long'),
    postTitle: Yup.string().required('Post Title is required').max(64, 'Post title is to long')

  })

  const submit = (values, { resetForm, setStatus }) => {
    httpConfig.post('/apis/post/', values).then(response => {
      console.log(response)
      let { message, type, status } = response
      if (status === 200) {
        resetForm()
      }
      console.log(message)
      setStatus({ message, type })
    })

  }

  const postFormContent = (props) => {
    const {
      status, values, errors, touched,
      dirty, isSubmitting, handleChange,
      handleBlur, handleSubmit, handleReset
    } = props
    return (
      <>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <InputGroup>
              <FormControl
                id="postTitle"
                placeholder="Title Goes Here"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.postTitle}
              />
            </InputGroup>
            {
              errors.postTitle && touched.postTitle && (
                <div className="alert alert-danger">
                  {errors.postTitle}
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
              <FormControl as="textarea"
                           id="postContent"
                           placeholder="Meow Meow Goes Here"
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.postContent}
              />
              {
                errors.postContent && touched.postContent && (
                  <div className="alert alert-danger">
                    {errors.postContent}
                  </div>
                )
              }
              <InputGroup.Append>
                <Button
                  variant="primary"
                  type="submit"
                > Submit <FontAwesomeIcon
                  icon="envelope"/></Button>
              </InputGroup.Append>
            </InputGroup>
          </Form.Group>
          <FormDebugger {...props}/>
        </Form>
        {status && (<div className={status.type}>{status.message}</div>)}
      </>
    )

  }

  return (
    < Formik
      onSubmit={submit}
      initialValues={initialValues}
      validationSchema={validator}
    >
      {postFormContent}
    </Formik>

  )

}

