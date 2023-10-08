import React from 'react'
import { Button, ButtonGroup, Col } from 'react-bootstrap'

export default function RightAside() {
  return (
    <>
        <Col lg={3} md={6}>
            <aside>
              <h1>Right Aside</h1>
              <p>
                A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs. This is because paragraphs show a reader where the subdivisions of an essay begin and end, and thus help the reader see the organization of the essay and grasp its main points.
              </p>
              <div className='mt-4 text-center'>
                <ButtonGroup aria-label="Basic example">
                  <Button variant="secondary">Left</Button>
                  <Button variant="primary">Middle</Button>
                  <Button variant="success">Right</Button>
                </ButtonGroup>
              </div>
            </aside>
          </Col>
    </>
  )
}
