"use client"
import Footer from '@/component/Footer'
import Header from '@/component/Header'
import { LeftAside } from '@/component/LeftAside'
import RightAside from '@/component/RightAside'
import { Button, Col, Container, Row } from 'react-bootstrap'


export default function Home() {
  return (
    <>
      <Header />
      <main className='p-5'>
        <Row>
          <LeftAside />

          <Col lg={6}>
            <section className='bg-success py-5  my-3'>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, ad! Possimus dolor error veritatis consectetur temporibus suscipit id nesciunt doloribus nostrum optio asperiores porro delectus qui pariatur explicabo sint, sapiente et? Ad doloribus porro illum libero corrupti odio magni? Deleniti magnam modi quidem perferendis ducimus exercitationem eius veritatis esse atque, consectetur illum quis dolor dolorum consequuntur dolore est, placeat iure, perspiciatis nulla sequi fuga animi quibusdam! Debitis modi dicta eius omnis iusto laudantium maiores ut ipsum quos eos rerum voluptas mollitia, recusandae ipsa cumque iure similique est quod ducimus? Sapiente neque, odio reprehenderit ipsum illo quia harum pariatur ratione nihil.
              </p>
              <div className='d-flex justify-content-center'>
                <Button variant='primary' size='md'>Read More</Button>
              </div>
            </section>
          </Col>

          <RightAside />
        </Row>
      </main>

      <Footer />


    </>
  )
}
