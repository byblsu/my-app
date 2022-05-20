
import React, { Component } from 'react'
import Echarts from '../../../componments/Echarts';
import * as echarts from 'echarts/core';
// 引入柱状图图表，图表后缀都为 Chart
import { BarChart } from 'echarts/charts';
// 引入提示框，标题，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent
} from 'echarts/components';
// 标签自动布局，全局过渡动画等特性
import { LabelLayout, UniversalTransition } from 'echarts/features';
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from 'echarts/renderers';
import { Col, Row } from 'antd';

class dashboard extends Component {

    option=({
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    });

     ext = [  TitleComponent,
      TooltipComponent,
      GridComponent,
      DatasetComponent,
      TransformComponent,
      BarChart,
      LabelLayout,
      UniversalTransition,
      CanvasRenderer]



    render() {

        return (
    <>
      <Row>
          <Col span={12}>
              <Echarts option={this.option} ext={this.ext} width={"300px"} height={'500px'}></Echarts>
          </Col>
          <Col span={12}>
              <Echarts option={this.option} ext={this.ext} width={"300px"} height={'500px'}></Echarts>
          </Col>
      </Row>
    
    </>
  )

    }

    
  
}

export default dashboard