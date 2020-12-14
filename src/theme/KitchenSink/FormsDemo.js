import React from 'react'
import { Grid } from 'theme-ui'
import {
  //   ErrorText,
  //   HintText,
  //   OptionalTag,
  //   TextArea,
  Checkbox,
  Radio,
  Input,
  TextArea,
} from '../../components/atoms/Forms'
import { InputGroup } from '../../components/molecules'

export const FormsDemo = () => {
  return (
    <>
      <Grid as="form" gap={2} columns={[1, 2, 4]} onSubmit={(e) => e.preventDefault()} mb={8}>
        <Input label="Text Input" name="textInput" id="textInput" />
        <Input label="Password Input" type="password" name="passwordInput" id="passwordInput" />
        <Input label="Search Input" type="search" name="searchInput" id="searchInput" />
        <Input label="Email Input" type="email" name="emailInput" id="emailInput" />
      </Grid>

      <Grid as="form" gap={2} columns={3} onSubmit={(e) => e.preventDefault()} mb={8}>
        <InputGroup legend="Checkbox Group">
          <Checkbox label="Checkbox 1" id="checkbox-1" name="checkboxes" value="1" checked />
          <Checkbox label="Checkbox 2" id="checkbox-2" name="checkboxes" value="2" />
          <Checkbox label="Checkbox 3" id="checkbox-3" name="checkboxes" value="3" />
        </InputGroup>
        <InputGroup legend="Radio Group">
          <Radio label="Radio 1" id="radio-1" name="radios" value="1" checked />
          <Radio label="Radio 2" id="radio-2" name="radios" value="2" />
          <Radio label="Radio 3" id="radio-3" name="radios" value="3" />
        </InputGroup>
        <InputGroup legend="Field Group">
          <Input label="Input Field 1" name="inputFieldGroup" id="inputField-1" />
          <Input label="Input Field 2" name="inputFieldGroup" id="inputField-2" />
        </InputGroup>
      </Grid>

      <Grid as="form" columns={1} onSubmit={(e) => e.preventDefault()} mb={8}>
        <TextArea label="Text Area" />
      </Grid>
    </>
  )
}
