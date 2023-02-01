import React, { useState } from "react";

import { Form, FormGroup, Label, Input,Button,Table,Modal,ModalHeader,ModalBody, ModalFooter } from "reactstrap";

interface Interview {
  id: number;
  date: string;
  time: string;
  candidate: string;
  position: string;
}

export default function InterviewsPage ()  {

  const [interviews, setInterviews] = useState<Interview[]>([ 
   {      id: 1,     date: "01/01/2022",     time: "10:00 AM",      candidate: "John Doe",      position: "Software Engineer"    },  
   {      id: 2,     date: "01/02/2022",    time: "1:00 PM",     candidate: "Jane Smith",   position: "Product Manager"    }  ]);
  const [modal, setModal] = useState(false);

  const [selectedInterview, setSelectedInterview] = useState<Interview | null>(null);

  const toggleModal = (interview?: Interview) => {
    setModal(!modal);
    setSelectedInterview(interview || null);
  };
  
  const handleDelete = (id: number) => {
    setInterviews(interviews.filter(interview => interview.id !== id));
  };
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      // Add new interview to state
    }
    form.classList.add("was-validated");
  };
  
  return (
    <div>
      <h1>Interviews</h1>
      <Button color="primary" onClick={() => toggleModal()}>
        Schedule Interview
      </Button>
      <Table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Candidate</th>
            <th>Position</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {interviews.map(interview => (
            <tr key={interview.id}>
              <td>{interview.date}</td>
              <td>{interview.time}</td>
              <td>{interview.candidate}</td>
              <td>{interview.position}</td>
              <td>
                <Button color="info" onClick={() => toggleModal(interview)}>
                  Edit
                </Button>{" "}
                <Button color="danger" onClick={() => handleDelete(interview.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal isOpen={modal} toggle={() => toggleModal()}>
       
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="date">Date</Label>
              <Input
                type="date"
                name="date"
                id="date"
                required
                defaultValue={selectedInterview?.date}
              />
            </FormGroup>
            <FormGroup>
              <Label for="time">Time</Label>
              <Input
                type="time"
                name="time"
              id="time"
              required
              defaultValue={selectedInterview?.time}
            />
          </FormGroup>
          <FormGroup>
            <Label for="candidate">Candidate</Label>
            <Input
              type="text"
              name="candidate"
              id="candidate"
              required
              defaultValue={selectedInterview?.candidate}
            />
          </FormGroup>
          <FormGroup>
            <Label for="position">Position</Label>
            <Input
              type="text"
              name="position"
              id="position"
              required
              defaultValue={selectedInterview?.position}
            />
          </FormGroup>
          <Button color="primary" type="submit">
            {selectedInterview ? "Save" : "Schedule"}
          </Button>
        </Form>
      </ModalBody>
    </Modal>
  </div>
  );
};