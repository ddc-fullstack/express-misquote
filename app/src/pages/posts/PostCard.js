import React from 'react'
import Card from 'react-bootstrap/Card'

export function PostCard (props) {
  console.log(props)
  const {postContent, postTitle, postDate} = props.post

  return (
  <Card className="card text-center">
    <div className="card-body">
      <Card.Title>{postTitle}</Card.Title>
      <Card.Text>
        <p>{postContent}</p>
        <p><small className="text-muted">created at {postDate} since the beginning of time </small></p>
      </Card.Text>
    </div>
  </Card>
  )

}