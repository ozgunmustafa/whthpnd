import React from 'react'
import { Col, Modal, Row, Button, Input } from 'antd'
import Head from 'next/head'
import Layout from '../components/Layout'
import { Typography } from 'antd'
import Avvatar from '../components/Avvatar'
import { Avatar } from 'antd'
import Link from 'next/link'

import {
  BookmarkIcon,
  BookmarkIconActive,
  CommentsIcon,
  ShareIcon,
  ShieldSvg
} from '../components/CustomIcons'
import Icon, {
  InstagramOutlined,
  FacebookOutlined,
  TwitterOutlined,
  PlusOutlined,
  MinusOutlined,
  SearchOutlined
} from '@ant-design/icons'
import ActionButton from '../components/ActionButton'
import ReactionButtons from '../components/ReactionButtons'
import { useSelector } from 'react-redux'
import { selectAllCategories } from '../src/features/categories/categorySlice'

const { Title, Paragraph } = Typography
const ShieldIcon = (props) => <Icon component={ShieldSvg} {...props} />

export default function Home() {

  const categories = useSelector(selectAllCategories);
  console.log('categories: ', categories);
  const [feedCategories, setFeedCategories] = React.useState([
    {
      category: 'Marketing',
      category_img: 'https://robohash.org/accusantiumdoloremea.png'
    },
    {
      category: 'Research and Development',
      category_img: 'https://robohash.org/voluptasidofficiis.png'
    },
    {
      category: 'Engineering',
      category_img: 'https://robohash.org/aperiamvelnesciunt.png'
    },
    {
      category: 'Data Analyses',
      category_img: 'https://robohash.org/exdoloresquaerat.png'
    },
    {
      category: 'Programming',
      category_img: 'https://robohash.org/nesciuntutest.png'
    },
    {
      category: 'Song',
      category_img: 'https://robohash.org/nesciuntutest.png'
    },
    {
      category: 'Listen',
      category_img: 'https://robohash.org/nesciuntutest.png'
    },
    {
      category: 'Podcast',
      category_img: 'https://robohash.org/nesciuntutest.png'
    },
    {
      category: 'Marketing',
      category_img: 'https://robohash.org/accusantiumdoloremea.png'
    },
    {
      category: 'Research and Development',
      category_img: 'https://robohash.org/voluptasidofficiis.png'
    },
    {
      category: 'Engineering',
      category_img: 'https://robohash.org/aperiamvelnesciunt.png'
    },
    {
      category: 'Data Analyses',
      category_img: 'https://robohash.org/exdoloresquaerat.png'
    },
    {
      category: 'Programming',
      category_img: 'https://robohash.org/nesciuntutest.png'
    },
    {
      category: 'Song',
      category_img: 'https://robohash.org/nesciuntutest.png'
    },
    {
      category: 'Listen',
      category_img: 'https://robohash.org/nesciuntutest.png'
    },
    {
      category: 'Podcast',
      category_img: 'https://robohash.org/nesciuntutest.png'
    },
    {
      category: 'Marketing',
      category_img: 'https://robohash.org/accusantiumdoloremea.png'
    },
    {
      category: 'Research and Development',
      category_img: 'https://robohash.org/voluptasidofficiis.png'
    },
    {
      category: 'Engineering',
      category_img: 'https://robohash.org/aperiamvelnesciunt.png'
    },
    {
      category: 'Data Analyses',
      category_img: 'https://robohash.org/exdoloresquaerat.png'
    },
    {
      category: 'Programming',
      category_img: 'https://robohash.org/nesciuntutest.png'
    },
    {
      category: 'Song',
      category_img: 'https://robohash.org/nesciuntutest.png'
    },
    {
      category: 'Listen',
      category_img: 'https://robohash.org/nesciuntutest.png'
    },
    {
      category: 'Podcast',
      category_img: 'https://robohash.org/nesciuntutest.png'
    }
  ])
  const [isModalVisible, setIsModalVisible] = React.useState(false)
  const [shareUrl, setShareUrl] = React.useState('')
  const [expandTopics, setExpandTopics] = React.useState(false)
  const [modalType, setModalType] = React.useState('share')
  const [activeFeedComments, setActiveFeedComments] = React.useState([])

  const showModal = (type) => {
    setIsModalVisible(true)
    setModalType(type)
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }
  return (
    <>
      <Modal
        title={modalType.toLocaleUpperCase()}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {modalType === 'share' ? (
          <div>
            <Typography.Title
              level={3}
              copyable={{ tooltips: ['Kopyala', 'Kopyalandı'] }}
            >
              {shareUrl}...
            </Typography.Title>
            <div className="d-flex">
              <span style={{ marginRight: '10px' }}>Share to:</span>
              <InstagramOutlined
                style={{
                  fontSize: '22px',
                  color: '#6975ff',
                  marginRight: '5px'
                }}
              />
              <FacebookOutlined
                style={{
                  fontSize: '22px',
                  color: '#6975ff',
                  marginRight: '5px'
                }}
              />
              <TwitterOutlined
                style={{
                  fontSize: '22px',
                  color: '#6975ff',
                  marginRight: '5px'
                }}
              />
            </div>
          </div>
        ) : modalType === 'comments' ? (
          activeFeedComments.map((item) => <p>{item.question}</p>)
        ) : (
          ''
        )}
      </Modal>
      <Layout
        title="Create Next App"
        description="Generated by create next app"
        headerEnabled={true}
      >
        <Head>
          <title>Whthpnd | Homepage</title>
          <meta name="description" content="What Happened Home Page" />
        </Head>

        <section className="section-padding-1">
          <div className="container">
            <Row gutter={20}>
              <Col className="gutter-row " span={16}>
                <section>
                  <Title level={3} className="text-center">
                    Highlight Topics
                  </Title>
                  <ul
                    className={
                      'highlight-topics ' + (expandTopics ? 'expanded ' : '')
                    }
                  >
                    {feedCategories.map((category) => (
                      <li>
                        <Link href="/topic">
                          <a>{category.category}</a>
                        </Link>
                        <a href=""></a>
                      </li>
                    ))}
                  </ul>
                  <Button
                    type="text"
                    className="expand-btn w-100 py-3"
                    icon={expandTopics ? <MinusOutlined /> : <PlusOutlined />}
                    onClick={() => {
                      setExpandTopics(!expandTopics)
                    }}
                  >
                    Daha {expandTopics ? 'Az' : 'Fazla'}
                  </Button>
                </section>
                <section>
                  {' '}
                  {categories && categories.map((feedItem) => (
                    <div
                      className="card-padding-responsive bg-white radius-1 border-bottom-light"
                      key={'feed-' + feedItem.category}
                    >
                      <Avvatar
                        size={35}
                        src={`https://joeschmoe.io/api/v1/${feedItem.gender.toLowerCase()}/random`}
                        text={feedItem.category}
                        description={
                          <Link href="/profile">
                            <a>{feedItem.publisher.name}</a>
                          </Link>
                        }
                        style={{ backgroundColor: '#d1d1d1' }}
                      />

                      <p style={{ marginTop: '10px' }}>{feedItem.question}</p>
                      <div className="d-flex">
                        <ActionButton
                          icon={<CommentsIcon />}
                          text={feedItem.comments.length + ' Yorum'}
                          style={{ marginRight: '7px', color: '#919191' }}
                          onClick={() => {
                            showModal('comments')
                            setActiveFeedComments(feedItem.comments)
                          }}
                        />
                        <ActionButton
                          icon={<ShareIcon />}
                          text="Paylaş"
                          style={{ marginRight: '7px', color: '#919191' }}
                          onClick={() => {
                            showModal('share')
                            setShareUrl('https://temp-mail.org/tr/')
                          }}
                        />
                        <ActionButton
                          icon={
                            feedItem.bookmarked ? (
                              <BookmarkIconActive />
                            ) : (
                              <BookmarkIcon />
                            )
                          }
                          text="Yer İşareti"
                          style={{ marginRight: '7px', color: '#919191' }}
                        />
                      </div>
                      <div className='d-flex'>

                        <ReactionButtons category={feedItem} />
                      </div>
                    </div>
                  ))}
                </section>
              </Col>
              <Col className="gutter-row" span={7} offset={1}>
                <Input
                  size="large"
                  className="radius-pill"
                  placeholder="Ara"
                  prefix={
                    <SearchOutlined
                      style={{ fontSize: '20px', color: '#5c5c5c' }}
                    />
                  }
                />
                <div
                  className="card-padding-responsive bg-white radius-1 shadow"
                  style={{ marginBottom: '7px' }}
                >
                  <Title level={4}>Top Categories</Title>
                  {feedCategories.map((item) => (
                    <Link href="/login" key={'category' + item.category}>
                      <a>
                        <div
                          className="d-flex align-items-center"
                          style={{ marginBottom: '5px' }}
                        >
                          <Avatar src={item.category_img} alt={item.category} />
                          {item.category}
                        </div>{' '}
                      </a>
                    </Link>
                  ))}
                </div>
                <div
                  className="card-padding-responsive bg-white radius-1 shadow d-flex align-items-center"
                  style={{ marginBottom: '7px' }}
                >
                  <ShieldIcon
                    style={{ fontSize: '40px', marginRight: '10px' }}
                  />
                  Shield is important for us!
                </div>
                <div className="card-padding-responsive radius-1  d-flex align-items-center">
                  <ul className="custom-list text-muted d-flex flex-wrap justify-content-center">
                    <li>
                      <a href="">About</a>
                    </li>
                    <li>
                      <a href="">Contact</a>
                    </li>
                    <li>
                      <a href="">Help</a>
                    </li>
                    <li>
                      <a href="">Community</a>
                    </li>
                    <li>
                      <a href="">Policy</a>
                    </li>
                    <li>
                      <a href="">Blog</a>
                    </li>
                    <li>
                      <a href="">Terms</a>
                    </li>
                    <li>
                      <a href="">Career</a>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        </section>
      </Layout>
    </>
  )
}
