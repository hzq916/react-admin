import React, { useState } from 'react';
import { Layout, Divider, Row, Col, Button, Tabs  } from 'antd'
const { TabPane } = Tabs
const typeIn = [
    'bounceInDown',
    'bounceInLeft',
    'bounceInRight',
    'bounceInUp',
    'fadeIn',
    'fadeInDown',
    'fadeInLeft',
    'fadeInLeftBig',
    'fadeInRight',
    'fadeInRightBig',
    'fadeInUp',
    'fadeInUpBig',
    'flipInX',
    'flipInY',
    'rotateIn'
]
const typeOut = [
    'bounceOut',
    'bounceOutDown',
    'bounceOutLeft',
    'bounceOutRight',
    'bounceOutUp',
    'fadeInDown',
    'fadeOut',
    'fadeOutDown',
    'fadeOutDownBig',
    'fadeOutLeft',
    'fadeOutLeftBig',
    'fadeOutRight',
    'fadeOutRightBig',
    'fadeOutUp',
    'fadeOutUpBig',
    'rotateOut'
]
const typeOther = [
    'bounceIn',
    'bounce',
    'flash',
    'pulse',
    'rubberBand',
    'shake',
    'headShake',
    'swing',
    'tada',
    'wobble',
    'jello'
]

const Animation = () => {

    const [fontType, setFontType] = useState('animated bounceInRight')

    const changeType = (v) => {
        console.log(v)
        setFontType(`animated ${v}`)
    }

    return (
        <Layout className='animated fadeIn'>
                <div className='base-style'>
                    <h3>何时使用</h3>
                    <Divider />
                    <p>当页面需要动态效果时。</p>
                </div>
                <Row gutter={8} style={{ marginTop: '3rem' }}>
                    <Col span={10}>
                        <Tabs type='card' tabPosition='left'>
                            <TabPane tab='进场' key='1'>
                                {typeIn.map((v, i) => (
                                    <Button
                                        type='primary'
                                        size='small'
                                        key={i}
                                        onClick={changeType(v)}
                                        ghost>
                                        {v}
                                    </Button>
                                ))}
                            </TabPane>
                            <TabPane tab='退场' key='2'>
                                {typeOut.map((v, i) => (
                                    <Button
                                        type='primary'
                                        size='small'
                                        key={i}
                                        onClick={changeType(v)}
                                        ghost>
                                        {v}
                                    </Button>
                                ))}
                            </TabPane>
                            <TabPane tab='其它' key='3'>
                                {typeOther.map((v, i) => (
                                    <Button
                                        type='primary'
                                        size='small'
                                        key={i}
                                        onClick={changeType(v)}
                                        ghost>
                                        {v}
                                    </Button>
                                ))}
                            </TabPane>
                        </Tabs>
                    </Col>
                    <Col span={14}>
                        <div
                            style={{ fontSize: '4.8rem', textAlign: 'center', padding: '2rem' }}
                            className={fontType}>
                            Animate.css
                        </div>
                    </Col>
                </Row>
            </Layout>
    );
}

export default Animation;
