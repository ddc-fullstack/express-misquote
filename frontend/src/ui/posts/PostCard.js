import React from 'react'
import Card from 'react-bootstrap/Card'

export function PostCard (props) {
   console.log(props)
  const {misquote} = props
  return (
    <>
      <Card className="card text-center">
        <div className="card-body">
          <Card.Title>{misquote.misquoteAttribution}</Card.Title>
          <Card.Text >
            <p>{misquote.misquoteContent}</p>
            <p><small className="text-muted">{misquote.misquoteSubmitter}</small></p>
          </Card.Text>
        </div>
      </Card>
    </>
  )
}