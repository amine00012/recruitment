import React from "react";
import { Row, Col } from "antd";
import { Slide } from "react-awesome-reveal";
import { candidatesProps } from "./types";
import Container from "/recruitmentHelp/recruitmentHelp/src/components/common/Container"
import { Button } from "/recruitmentHelp/recruitmentHelp/src/components/common/Button";
import Input from "/recruitmentHelp/recruitmentHelp/src/components/common/Input";
import TextArea from "/recruitmentHelp/recruitmentHelp/src/components/common/TextArea";

const Candidates = ({ candidates, jobTitle }:candidatesProps) => {
    
  return (
      <Container>
      <h2>Candidates for {jobTitle}</h2>
      {candidates.map((candidate, index) => (
        <Slide key={index}>
          <Row>
            <Col span={24}>
              <h3>{candidate.name}</h3>
            </Col>
            <Col span={12}>
              <Input
               type="text"
               placeholder="Email"
              
                value={candidate.email}
              />
            </Col>
            <Col span={12}>
              <Input
                label="Phone Number"
                disabled
                value={candidate.phoneNumber}
              />
            </Col>
            <Col span={24}>
              <TextArea
                label="Cover Letter"
                disabled
                value={candidate.coverLetter}
                rows={5}
              />
            </Col>
            <Col span={24}>
              <Button>View Resume</Button>
            </Col>
          </Row>
        </Slide>
      ))}
      </Container>
  );
};

export default Candidates;
