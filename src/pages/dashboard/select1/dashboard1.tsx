
import React, { Component } from 'react'
import Echarts from '../../../componments/Echarts';
import * as echarts from 'echarts/core';
// 引入柱状图图表，图表后缀都为 Chart
import { BarChart, PieChart } from 'echarts/charts';
// 引入提示框，标题，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LegendComponent
} from 'echarts/components';
// 标签自动布局，全局过渡动画等特性
import { LabelLayout, UniversalTransition } from 'echarts/features';
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from 'echarts/renderers';
import { Col, Row } from 'antd';

class dashboard extends Component {

    option1=({
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

    option2 = {
      title: {
        text: 'Referer of a Website',
        subtext: 'Fake Data',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };

     ext = [  TitleComponent,
      TooltipComponent,
      GridComponent,
      DatasetComponent,
      TransformComponent,
      BarChart,
      LabelLayout,
      UniversalTransition,
      CanvasRenderer,
      LegendComponent,
      PieChart,
    ]



    render() {

        return (
    <>
      <Row>
          <Col span={12}>
              <Echarts option={this.option1} ext={this.ext} width={"300px"} height={'500px'}></Echarts>
          </Col>
          <Col span={12}>
              <Echarts option={this.option2} ext={this.ext} width={"300px"} height={'500px'}></Echarts>
          </Col>
      </Row>

      <Row>
          <Col span={12}>
              <Echarts option={this.option1} ext={this.ext} width={"300px"} height={'500px'}></Echarts>
          </Col>
          <Col span={12}>
              <Echarts option={this.option2} ext={this.ext} width={"300px"} height={'500px'}></Echarts>
          </Col>
      </Row>
    
    </>
  )

    }

    
  
}

export default dashboard