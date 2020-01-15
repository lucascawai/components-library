import React from 'react'
import { storiesOf } from '@storybook/react'
import { Button } from '.'

storiesOf('Button', module).add('Default', () => (
  <Button
    onClick={() => {
      console.log('Cawai')
    }}
    text="ok"
    textLink={{ text: 'Cawai' }}
  ></Button>
))
