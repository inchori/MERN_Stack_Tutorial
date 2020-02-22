import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreateTodo extends Component {
    constructor(props) {
        super(props)
        this.onChangeStudentName = this.onChangeStudentName.bind(this);
        this.onChangeStudentEmail = this.onChangeStudentEmail.bind(this);
        this.onChangeStudentRollno = this.onChangeStudentRollno.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            email: '',
            rollno: ''
        }
    }

    onChangeStudentName(e) {
        this.setState({name: e.target.value})
    }

    onChangeStudentEmail(e) {
        this.setState({email: e.target.value})
    }

    onChangeStudentRollno(e) {
        this.setState({rollno: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault()

        const studentObjcet = {
            name: this.state.name,
            email: this.state.email,
            rollno: this.state.rollno
        };
        axios.post('http://localhost:4000/students/create-student', studentObjcet)
            .then(res => console.log(res.data));
        
        this.setState({name: '', email: '', rollno: ''})
        this.props.history.push('/student-list');
    }
    render() {
        return (
            <div className="form-wrapper">
                <Form>
                    <Form.Group controlId="Name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={this.state.name} onChange={this.onChangeStudentName}/>
                    </Form.Group>
                </Form>

                <Form.Group controlId="Email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" value={this.state.email} onChange={this.onChangeStudentEmail}/>
                </Form.Group>

                <Form.Group controlId="Name">
                    <Form.Label>Roll No</Form.Label>
                    <Form.Control type="text" value={this.state.rollno} onChange={this.onChangeStudentRollno}/>
                </Form.Group>

                <Button onClick={this.onSubmit} variant="danger" size="lg" block="block" type="submit">
                    Create Student
                </Button>
            </div>
        )
    }
}