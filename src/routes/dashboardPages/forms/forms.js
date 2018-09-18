import React, { PropTypes } from 'react';
import {
  Panel,
  Button,
  Col,
  PageHeader,
  ControlLabel,
  FormControl,
  HelpBlock,
  FormGroup,
  Checkbox,
  Form,
  Radio,
  InputGroup,
  Glyphicon } from 'react-bootstrap';

import FormControlFeedback from 'react-bootstrap/lib/FormControlFeedback';
import FormControlStatic from 'react-bootstrap/lib/FormControlStatic';
import InputGroupAddon from 'react-bootstrap/lib/InputGroupAddon';

const title = 'Forms';


function displayForms(props, context) {
  context.setTitle(title);
  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <PageHeader>Forms</PageHeader>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12">
          <Panel header={<span>Basic Form Elements</span>} >
            <div className="row">
              <div className="col-lg-6">
                <Form>
                  <FormGroup controlId="formBasicText">
                    <ControlLabel>Text Input</ControlLabel>
                    <FormControl type="text" />
                    <FormControlFeedback />
                    <HelpBlock>Example block-level help text here.</HelpBlock>
                  </FormGroup>                                
                </Form>

                <div className="row ng-scope">
                    <div className="col-lg-6">
                    <Panel header={<span>Striped Rows </span>} >
                        <div className="table-responsive">
                        <table className="table table-striped">
                            <thead>
                            <tr>
                                <th># </th>
                                <th>First Name </th>
                                <th>Last Name </th>
                                <th>Username </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>1 </td>
                                <td>Mark </td>
                                <td>Otto </td>
                                <td>@mdo </td>
                            </tr>
                            <tr>
                                <td>2 </td>
                                <td>Jacob </td>
                                <td>Thornton </td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <td>3 </td>
                                <td>Larry </td>
                                <td>the Bird </td>
                                <td>@twitter </td>
                            </tr>
                            </tbody>
                        </table>
                        </div>
                    </Panel>
                    </div>
                </div> 

              </div>
            </div>
          </Panel>
        </div>
      </div>
    </div>
  );
}

displayForms.contextTypes = { setTitle: PropTypes.func.isRequired };

export default displayForms;
