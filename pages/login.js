import Layout from '../components/Layout'
import { useDispatch, useSelector } from 'react-redux'

import React from 'react'
import Head from 'next/head'
import { Col, Modal, Row, Button, Input, Card, Form } from 'antd'
import Image from 'next/image'
import { Typography } from 'antd'
import Link from 'next/link'
import { loginUser } from '../src/features/auth/authSlice'
const { Title, Paragraph } = Typography
const login = () => {
  const dispatch = useDispatch()
  const authorization = useSelector((state) => state.authentication)

  const onFinish = (values) => {
    dispatch(loginUser(values))
  }

  const onFinishFailed = (errorInfo) => {
    //console.log('Failed:', errorInfo)
  }
  return (
    <Layout
      title="Create Next App"
      description="Generated by create next app"
      headerEnabled={false}
    >
      <Head>
        <title>Whthpnd | Login</title>
        <meta name="description" content="What Happened Home Page" />
      </Head>
      <section className="">
        <div className="container">
          <Row style={{ minHeight: '100vh', alignItems: 'center' }}>
            <Col xs={24} lg={14}>
              <Image
                src="/login-illustration.svg"
                alt="Picture of the author"
                width={500}
                height={400}
              />
            </Col>
            <Col xs={24} lg={10}>
              <Card className="section-padding-1">
                <Link href="/">
                  <a>
                    <Image
                      src="/logo.svg"
                      alt="Vercel Logo"
                      width={40}
                      height={40}
                    />
                  </a>
                </Link>
                <Title level={3}>Login</Title>
                <Form
                  name="basic"
                  labelCol={{
                    span: 0
                  }}
                  wrapperCol={{
                    span: 24
                  }}
                  initialValues={{
                    remember: true
                  }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your email!'
                      }
                    ]}
                  >
                    <Input
                      size="large"
                      placeholder="Email"
                    />
                  </Form.Item>

                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your password!'
                      }
                    ]}
                  >
                    <Input.Password
                      size="large"
                      placeholder="Password"

                    />
                  </Form.Item>

                  <Form.Item
                    wrapperCol={{
                      span: 24
                    }}
                  >
                    <Button
                      type="primary"
                      danger
                      htmlType="submit"
                      className="w-100"
                      size="large"
                      loading={authorization.loading ? true : false}
                    >
                      Login
                    </Button>
                  </Form.Item>
                </Form>
                <p className="text-center">
                  <span className="text-muted">Don't you have an account?</span>
                  <Link href="/register">
                    <a>
                      <i>Register</i>
                    </a>
                  </Link>
                </p>
               
              </Card>
            </Col>
          </Row>
        </div>
      </section>
    </Layout>
  )
}

export default login
