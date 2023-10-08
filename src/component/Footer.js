import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function Footer() {
  return (
    <>
        <Container>
            <Row>
                <Col lg={12} md={12}>
                    <footer className="text-center">
                        <p>
                            Copyright © 2012 - 2023 Termdssdsss®. All rights reserved.
                        </p>
                    </footer>
                </Col>
            </Row>
        </Container>
    </>
  )
}
