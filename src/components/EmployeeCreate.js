import React, { Component } from 'react';
import { Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { Card, CardSection, Input, Button } from './common';


class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="Deep"
            value={this.props.name}
            onChangeText={value => this.props.employeeUpdate({ prop:'name', value })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="555-555-5555"
            value={this.props.phone}
            onChangeText={value => this.props.employeeUpdate({ prop:'phone', value })}

          />
        </CardSection>

        <CardSection>
          <Text style={styles.pickerTextStyle}>Shift</Text>
          <Picker
            style={ {flex: 1} }
            selectedValue={this.props.shift}
            onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
          >
            <Picker.item label="Monday" value="Monday" />
            <Picker.item label="Tuesday" value="Tuesday" />
            <Picker.item label="Wednesday" value="Wednesday" />
            <Picker.item label="Thrusday" value="Thrusday" />
            <Picker.item label="Friday" value="Friday" />
            <Picker.item label="Saturday" value="Saturday" />
            <Picker.item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>

        <CardSection>
          <Button>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
}

const mapStateToProps = ({ employeeForm }) => {
  const { name, phone, shift } = employeeForm;
  return { name, phone, shift };
}

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);
