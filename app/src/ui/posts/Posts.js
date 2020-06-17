import React from "react";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllMisquotes } from '../../store/misquote'
import { PostCard } from './PostCard'

export const Posts = () => {
  const dispatch = useDispatch()

  const misquotes = useSelector(store => {
    console.log("Redux Store", store)
    return store.misquotes ? store.misquotes : []
  })

  const sideEffects = () => {
    dispatch(fetchAllMisquotes())
  }

  React.useEffect(sideEffects, [])
  return (
    <>
      <main className="my-5">
        <Container fluid="true" className="container-fluid text-center text-sm-left">

          <Row className=" mb-3">
            <Col>
              <h1>Meow Forum</h1>
            </Col>
          </Row>

          <Row>

            <Card bg="shadow-light" className="border-0 rounded-6">
              <Card.Body>
                <Card.Text>
                  <Form>
                    <Form.Group>
                      <InputGroup>
                        <FormControl placeholder="Title Goes Here"/>
                      </InputGroup>
                    </Form.Group>

                    <Form.Group>
                      <InputGroup>
                        <InputGroup.Prepend>
                          <InputGroup.Text>
                            <FontAwesomeIcon icon="dog"/>
                          </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl as="textarea" placeholder="Meow Meow Goes Here"/>
                        <InputGroup.Append>
                          <Button variant="primary" type="submit"> Submit <FontAwesomeIcon
                            icon="envelope"/></Button>
                        </InputGroup.Append>
                      </InputGroup>
                    </Form.Group>
                  </Form>
                </Card.Text>
              </Card.Body>
            </Card>
            <CardColumns className="p-4">
              {misquotes.map(misquote => <PostCard misquote={misquote} key={misquote.misquoteId} foo="bar" />)}
            </CardColumns>
          </Row>

        </Container>
      </main>
    </>
  )
};