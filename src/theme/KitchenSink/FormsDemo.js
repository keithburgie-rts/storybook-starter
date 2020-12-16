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
import { capitalize } from '../../lib/utils'
import { inputTypes } from '../../lib/types'

export const FormsDemo = () => {
  return (
    <>
      <Grid as="form" gap={2} columns={[1, 2, 4]} mb={8}>
        {inputTypes.map((i) => (
          <Input
            label={`${capitalize(i)} Input`}
            type={i}
            name={`${i}Input`}
            id={`${i}Input`}
            key={i}
          />
        ))}
      </Grid>

      <Grid as="form" gap={2} columns={3} mb={8}>
        <InputGroup legend="Checkbox Group">
          {[1, 2, 3].map((i) => (
            <Checkbox
              label={`Checkbox ${i}`}
              name="checkboxes"
              value={i}
              defaultChecked={i === 1}
              key={i}
            />
          ))}
        </InputGroup>
        <InputGroup legend="Radio Group">
          {[1, 2, 3].map((i) => (
            <Radio label={`Radio ${i}`} name="radios" value={i} key={i} />
          ))}
        </InputGroup>
        <InputGroup legend="Field Group">
          {[1, 2, 3].map((i) => (
            <Input
              label={`Input Field ${i}`}
              name="inputFieldGroup"
              id={`inputField-${i}`}
              key={i}
            />
          ))}
        </InputGroup>
      </Grid>

      <Grid as="form" columns={1} mb={8}>
        <TextArea label="Text Area" />
      </Grid>
    </>
  )
}
