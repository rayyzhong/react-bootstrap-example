import React, { Component } from 'react'
import { Card, Accordion, Container } from 'react-bootstrap'
import data from '../data/data.json'

import './MyStyle.css'

const newdata = data.map((data, index) => {
    return (

        <Accordion.Item eventKey={index + ''} key={index}>
            <Accordion.Header>Book #{index + 1} - {data.name}</Accordion.Header>
            <Accordion.Body>
                <Card key={data.id}>
                    <Card.Body>
                        <Card.Title>{data.name}</Card.Title>
                        <Card.Text>
                            {data.desc}
                        </Card.Text>

                        <a className="btn-primary"
                            href={data.url}
                            target="_blank"
                            rel=" noopener noreferrer"
                        >
                            Download
                        </a>

                    </Card.Body>
                </Card>
            </Accordion.Body>
        </Accordion.Item>

    )
}
)




export default class Main extends Component {
    render() {
        return (
            <Accordion defaultActiveKey="0">
                {newdata}
            </Accordion>
        )
    }
}