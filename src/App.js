import React from 'react'
import './App.css'
import { FangOost, IVFangOost } from './Graphs/FangOost'
import { CarrMadan, IVCarrMadan } from './Graphs/CarrMadan'
import { FSTS, IVFSTS } from './Graphs/FSTS'
import { Density } from './Graphs/Density'
import AsyncHOC from './AsyncHoc'
import OptionInputs from './Forms/OptionInputs'
import QuantileInputs from './Forms/QuantileInputs'
import StrikeInputs from './Forms/StrikeInputs'
import { Row, Col, Layout } from 'antd'

const style={ background: '#fff', padding: 24, margin: 0, minHeight: 280 }
const Content=Layout.Content

const App =()=>(
	<Layout>
		<AsyncHOC/>
		<Content style={style}>
			<Row gutter={100}>
				<Col span={6} className='left'>
					<OptionInputs/>
					<QuantileInputs/>
					<StrikeInputs/>
				</Col>

				<Col span={18} className='right'>
					<Row gutter={16} justify="center">
						<Col span={8}>
							<Density/>
						</Col>
					</Row>
					<Row gutter={16} justify="center">
						<Col span={6}>
							<CarrMadan/>
						</Col>
						<Col span={6}>
							<IVCarrMadan/>
						</Col>
						<Col span={6}>
							<FSTS/>
						</Col>
						<Col span={6}>
							<IVFSTS/>
						</Col>
					</Row>
					<Row gutter={16} justify="center">
						<Col span={8}>
						</Col>
					</Row>
					<Row gutter={16} justify="center">
						<Col span={12}>
							<FangOost/>
						</Col>
						<Col span={12}>
							<IVFangOost/>
						</Col>
					</Row>
				</Col>
			</Row>
		</Content>
	</Layout>
)


export default App