import React from 'react'
import MainNavigation from './partials/MainNavigation'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'

import { Avatar, Button } from 'antd'
import { UserOutlined } from '@ant-design/icons'

const Layout = (props) => {
  const [user, setUser] = React.useState(true)
  return (
    <>
      <Head>
        <title>Whthpnd | Layout</title>
        <meta
          name="description"
          content="Burada neler oluyor? Şikayetiniz nedir? "
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {props.headerEnabled && (
        <header className="main-header">
          <div className=" main-header-container">
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
            <MainNavigation></MainNavigation>
            {user ? (
              <Link href="/login">
                <a>
                  <Button
                    type="dashed"
                    shape="round"
                    style={{ padding: '5px 8px' }}
                    icon={
                      <Avatar
                        style={{
                          backgroundColor: '#d5d5d5',
                          marginRight: '5px'
                        }}
                        size="small"
                        src="https://joeschmoe.io/api/v1/random"
                      />
                    }
                    size="large"
                    className="btn-dashed"
                  >
                    Mustafa Özgün
                  </Button>
                </a>
              </Link>
            ) : (
              <Link href="/login">
                <a>
                  <Button
                    type="dashed"
                    shape="round"
                    icon={<UserOutlined />}
                    size="large"
                    className="btn-dashed"
                  >
                    Sign in
                  </Button>
                </a>
              </Link>
            )}
          </div>
        </header>
      )}

      <main>{props.children}</main>
      <footer>
       
      </footer>
    </>
  )
}

export default Layout
