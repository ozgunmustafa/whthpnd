import React from 'react'
import { Col, Modal, Row, Button, Input, Card } from 'antd'
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
  SearchOutlined,
  UserOutlined,
  FormOutlined
} from '@ant-design/icons'
import ActionButton from '../components/ActionButton'

const { Title, Paragraph } = Typography
const ShieldIcon = (props) => <Icon component={ShieldSvg} {...props} />

export default function Home() {
  const [feedData, setFeedData] = React.useState([
    {
      id: 1,
      publisher: {
        name: 'Fosinopril sodium',
        username: 'fosodium'
      },
      category: 'Marketing',
      gender: 'Female',
      question:
        'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.',
      comments: [
        {
          publisher:
            'Acetaminophen, Dextromethorphan Hydrobromide, Doxylamine Succinate',
          gender: 'Non-binary',
          question:
            'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.'
        }
      ],
      bookmarked: false
    },
    {
      id: 2,
      publisher: {
        name: 'Lamb Quarters',
        username: 'lambQua'
      },
      category: 'Research and Development',
      gender: 'Female',
      question: 'Duis bibendum. Morbi non quam nec dui luctus rutrum.',
      comments: [
        {
          publisher:
            'Acetaminophen, Dextromethorphan Hydrobromide, Doxylamine Succinate',
          gender: 'Non-binary',
          question:
            'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.'
        }
      ],
      bookmarked: true
    },
    {
      id: 3,
      publisher: {
        name: 'Rromethazine Quarters',
        username: 'promethazine'
      },
      category: 'Engineering',
      gender: 'Female',
      question:
        'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.',
      comments: [
        {
          publisher: 'LATANOPROST',
          gender: 'Male',
          question:
            'Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.'
        },
        {
          publisher: 'ustilago maydis',
          gender: 'Polygender',
          question:
            'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.'
        },
        {
          publisher:
            'Acetaminophen, Dextromethorphan Hydrobromide, Doxylamine Succinate',
          gender: 'Non-binary',
          question:
            'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.'
        }
      ],
      bookmarked: false
    },
    {
      id: 4,
      publisher: {
        name: 'Octinoxate, Octisalate',
        username: 'octisalate'
      },
      gender: 'Male',
      category: 'Research and Development',
      question:
        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.',
      comments: [
        {
          publisher: 'LATANOPROST',
          gender: 'Male',
          question:
            'Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.'
        },
        {
          publisher: 'ustilago maydis',
          gender: 'Polygender',
          question:
            'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.'
        },
        {
          publisher:
            'Acetaminophen, Dextromethorphan Hydrobromide, Doxylamine Succinate',
          gender: 'Non-binary',
          question:
            'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.'
        }
      ],
      bookmarked: true
    },
    {
      id: 5,
      publisher: {
        name: 'Promethazine Hydrochloride',
        username: 'hydrochloride'
      },
      gender: 'Female',
      category: 'Research and Development',
      question:
        'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
      comments: [
        {
          publisher: 'LATANOPROST',
          gender: 'Male',
          question:
            'Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.'
        },
        {
          publisher: 'ustilago maydis',
          gender: 'Polygender',
          question:
            'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.'
        }
      ],
      bookmarked: true
    }
  ])
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
                  {' '}
                  {feedData.map((feedItem) => (
                    <div
                      className="card-padding-responsive bg-white radius-1 border-bottom-light"
                      key={'feed-' + feedItem.category}
                    >
                      <Avvatar
                        size={35}
                        src={`https://joeschmoe.io/api/v1/${feedItem.gender.toLowerCase()}/random`}
                        text={feedItem.category}
                        description={
                          <a href="" style={{ color: '#1890ff' }}>
                            {feedItem.publisher.name}
                          </a>
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
                    </div>
                  ))}
                </section>
              </Col>
              <Col className="gutter-row" span={7} offset={1}>
                <Input
                  size="large"
                  className="radius-pill mb-1"
                  placeholder="Ara"
                  prefix={
                    <SearchOutlined
                      style={{ fontSize: '20px', color: '#5c5c5c' }}
                    />
                  }
                />
                <section className="section-padding-1">
                  <Card className="topic-card">
                    <Row gutter={20}>
                      <Col className="gutter-row text-center" span={24}>
                        <div className="d-flex flex-column align-items-center mb-5">
                          <span className="prfl-avatar creator">
                            <Avatar
                              src="https://joeschmoe.io//api/v1/female/jana"
                              size={64}
                              className=""
                            />
                          </span>

                          <span
                            style={{ fontSize: '16px' }}
                            className="fw-600 lh-sm mb-1"
                          >
                            Mustafa Özgün
                          </span>
                          <span
                            style={{ fontSize: '14px' }}
                            className="text-muted lh-sm"
                          >
                            Velit culpa laborum laboris eu incididunt enim Lorem
                            cupidatat id irure.
                          </span>
                        </div>
                      </Col>
                    </Row>
                    <Row gutter={20} className="mb-3">
                      <Col className="gutter-row text-center" span={8}>
                        <Title level={5} className="lh-sm mb-0">
                          65K
                        </Title>
                        <p className="text-muted mb-0">Entries</p>
                      </Col>
                      <Col className="gutter-row text-center" span={8}>
                        <Title level={5} className="lh-sm mb-0">
                          5K
                        </Title>
                        <p className="text-muted mb-0">Followers</p>
                      </Col>
                      <Col className="gutter-row  text-center" span={8}>
                        <Title level={5} className="lh-sm mb-0">
                          232
                        </Title>
                        <p className="text-muted mb-0">Following</p>
                      </Col>
                    </Row>
                    <Row gutter={20}>
                      <Col className="gutter-row text-center" span={24}>
                        <Button
                          icon={<FormOutlined />}
                          shape="circle"
                          style={{ marginRight: '5px' }}
                        ></Button>
                        <Button shape="round">Follow</Button>
                      </Col>
                    </Row>
                  </Card>
                </section>

                <section className="section-padding-1">
                  <ul
                    className={
                      'highlight-topics ' + (expandTopics ? 'expanded ' : '')
                    }
                  >
                    {feedCategories.map((category) => (
                      <li>
                        <a href="">{category.category}</a>
                      </li>
                    ))}
                  </ul>
                  <Button
                    type="text"
                    className="w-100 "
                    icon={expandTopics ? <MinusOutlined /> : <PlusOutlined />}
                    onClick={() => {
                      setExpandTopics(!expandTopics)
                    }}
                  >
                    Daha {expandTopics ? 'Az' : 'Fazla'}
                  </Button>
                </section>
                <section className="section-padding-2">
                  <Title level={5}>Following</Title>
                  {[...Array(5)].map((e, i) => (
                    <Link href="/profile">
                      <a>
                        <div className="mb-2">
                          <Avvatar
                            key={i}
                            size={30}
                            src={`https://joeschmoe.io//api/v1/male/jack`}
                            text="Nich Babich"
                            style={{
                              minWidth: '30px',
                              backgroundColor: '#d1d1d1',
                              fontSize: '12px'
                            }}
                          />
                        </div>
                      </a>
                    </Link>
                  ))}
                </section>

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
