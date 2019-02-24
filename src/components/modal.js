/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';

class NewModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <Button color="info" onClick={this.toggle}>{this.props.buttonLabel}Reserve Room</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} id='modal'>
          <ModalHeader toggle={this.toggle}>Reserve Days</ModalHeader>
          <Input type="select" bsSize="lg">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            </Input>    

          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Confirm</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default NewModal;