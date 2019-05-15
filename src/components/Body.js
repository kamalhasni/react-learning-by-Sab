import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Body extends Component {
    constructor (props) {
        super(props)
        this.state = {
          isOpen: false,
          colorName: 'No Color Selected'
        }

        this.toggle = this.toggle.bind(this)
    }

    colorBeforeToggelModal(event) {
      let color = this.getColors()[event.target.getAttribute('index')]
      this.setState({
        colorName: 'This is ' + color.value,
        colorClass: `text-${color.key}` + (color.requireDarkBg ? ' bg-dark' : '')
      })
      this.toggle();
    }

    toggle() {
      this.setState(prevState => ({
        isOpen: !prevState.isOpen
      }))
    }

    getColors() {
        return [{
          key: 'primary',
          value: 'Blue'
        }, {
          key: 'danger',
          value: 'Red'
        }, {
          key: 'warning',
          value: 'Yellow',
          requireDarkBg: true
        }, {
          key: 'light',
          value: 'White',
          requireDarkBg: true
        }, {
          key: 'dark',
          value: 'Black'
        },{
          key: 'info',
          value: 'Cloud Blue'
        }]
    }


    render () {
        return ( <div>
            {
              this.getColors().map(function (item, index) {
                return <Button index={index} className="mr-2" color={item.key} onClick={(e) => this.colorBeforeToggelModal(e)}>{item.value}</Button>
              }, this)                                
            }
            {/* {
              this.getColors().map((item, index) => (
                  <Button index={index} className="mr-2" color={item.key} onClick={(e) => this.colorBeforeToggelModal(e)}>{item.value}</Button>
              ))
            } */}
            <Modal isOpen={this.state.isOpen} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle}>React Learning Modal</ModalHeader>
              <ModalBody className={this.state.colorClass}>
                {this.state.colorName}
              </ModalBody>
              <ModalFooter>
                {/* <Button color="primary" className="mr-2" onClick={this.toggle}>Do Something</Button> */}
                <Button color="secondary" onClick={this.toggle}>Close</Button>
              </ModalFooter>
            </Modal>
          </div>)
    }
}

export default Body