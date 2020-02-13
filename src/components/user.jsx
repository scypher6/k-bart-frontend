import React, { Component } from 'react';
import { Table } from 'semantic-ui-react'


class user extends Component {
    render() {
        // console.log(this.props.obj)
        let {username, email,credits,bio } = this.props.obj
        return (
            <div>
            <Table celled>
    <Table.Body>
      <Table.Row>
        <Table.Cell>Name:</Table.Cell>
        <Table.Cell>{username}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Email:</Table.Cell>
        <Table.Cell>{email}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Credits:</Table.Cell>
        <Table.Cell>{credits}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Bio:</Table.Cell>
        <Table.Cell>{bio}</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
  </div>
        );
    }
}

export default user;
