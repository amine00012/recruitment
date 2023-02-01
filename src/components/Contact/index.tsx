import React from "react";
import { Row, Col } from "antd";
import { Slide } from "react-awesome-reveal";
import { ContactProps } from "./types";
import { Button } from "../common/Button";
import Input from "../common/Input";
import Block from "../Block";
import TextArea from "../common/TextArea";
import { ContactContainer, FormGroup, ButtonContainer, Span } from "./styles";


const Contact = ({ title, content, id, t }: ContactProps) => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };
  

  const { errors, handleSubmit } = newFunction(formData, setFormData);

  return (
    <ContactContainer id={id}>
      <Row justify="space-between" align="middle">
        <Col lg={12} md={11} sm={24} xs={24}>
          <Slide direction="left">
            <Block title={title} content={content} />
          </Slide>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Slide direction="right">
            <FormGroup autoComplete="off" onSubmit={handleSubmit}>
              <Col span={24}>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <Span>{errors.name}</Span>}
              </Col>
              <Col span={24}>
                <Input
                  type="text"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <Span>{errors.email}</Span>}
              </Col>
              <Col span={24}>
                <TextArea
                  placeholder="Your Message"
                  value={formData.message}
                  name="message"
                  onChange={handleChange}
                />
                {errors.message && <Span>{errors.message}</Span>}
              </Col>
              <ButtonContainer>
                <Button name="submit">{t("Submit")}</Button>
              </ButtonContainer>
            </FormGroup>
          </Slide>
        </Col>
      </Row>
    </ContactContainer>
  );
};

export default Contact;

