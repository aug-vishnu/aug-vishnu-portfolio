import React from 'react';
import { Row, Col } from 'antd';
import ProgressBar from '../../Progress';

const SkillsProgress = () => (
  <div>
    <h2>My Skills</h2>
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar
          percent={75}
          text="Python"
        />
        <ProgressBar
          percent={80}
          text="Django"
        />
        <ProgressBar
          percent={58}
          text="Database"
        />
        {/* <ProgressBar
          percent={80}
          text="Wordpress"
        /> */}
      </Col>
      <Col xs={24} sm={24} md={12}>

        <ProgressBar
          percent={70}
          text="Javascript"
        />
        <ProgressBar
          percent={55}
          text="ReactJS"
        />
        <ProgressBar
          percent={60}
          text="Gatsby"
        />
        {/* <ProgressBar
          percent={90}
          text="NodeJS"
        /> */}
      </Col>
    </Row>
  </div>
);

export default SkillsProgress;
