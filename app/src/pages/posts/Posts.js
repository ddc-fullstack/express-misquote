import React, { useEffect } from 'react'
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPosts } from '../../shared/actions/post-actions'
import { PostCard } from './PostCard'
import { PostForm } from './PostForm'

export const Posts = () => {
	const dispatch = useDispatch();
	const posts = useSelector(state => {
		console.log(state)
		return state.posts ? state.posts : []});
	console.log(posts)

	const sideEffects = () => {
		dispatch(getAllPosts())
	}
	const sideEffectInputs = [];

	useEffect(sideEffects, sideEffectInputs)

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

							<Card bg="shadow-light" className="border-0 rounded-6 col" >
								<Card.Body>
									<Card.Text>
										<PostForm/>
									</Card.Text>
								</Card.Body>
							</Card>
						<CardColumns className="p-4">
							{ posts.map(post => (<PostCard post={post} sleepyMarty="true"/>))}
					</CardColumns>
					</Row>

				</Container>
			</main>
		</>
	)
};