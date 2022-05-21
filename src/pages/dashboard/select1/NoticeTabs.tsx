import { Avatar, List, Tabs } from 'antd'
import React, { Component } from 'react'

const { TabPane } = Tabs;

const data = [
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
    {
      title: 'Ant Design Title 4',
    },
  ];

 class NoticeTabs extends Component {
    callback(key:string) {
        console.log(key);
        
    }

  render() {
    return (
        <div style={{marginTop:'26px', background: 'white', padding:'6px',width:'400px'}}>
        <Tabs defaultActiveKey="1" onChange={this.callback} centered>
    <TabPane tab="消息(10)" key="1">
    <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title={<a href="https://ant.design">{item.title}</a>}
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
      </List.Item>
    )}
  />
        </TabPane>
        <TabPane tab="通知(10)" key="2">
          Content of Tab Pane 2
        </TabPane>
    <TabPane tab="工单(10)" key="3">
    <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title={<a href="https://ant.design">{item.title}</a>}
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
    </List.Item>
    )}
  />
        </TabPane>
      </Tabs>
      </div>
    )
  }
}


export default NoticeTabs