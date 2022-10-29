import React from 'react'
import { Subtitle, Paragraph } from '../../utils/style'
import { theme } from '../../utils'
import { Grid, AccentFont, DefaultFont, ColorGrid, Section } from './style'

type Props = {
  name: string,
  color: string,
  hex: string
}

const Color = (props: Props) => (
  <div style={{ width: '100%', height: '5em' }}>
    <div
      style={{
        width: '100%',
        height: '5em',
        backgroundColor: `${props.color}`,
        border: 'solid 1px #fff',
      }}
    />
    <div
      style={{
        textAlign: 'center',
        width: '100%',
        fontFamily: `${theme.type.accent.fontFamily}`,
      }}
    >
      <div>{props.name}</div>
      <div>{props.hex}</div>
    </div>
  </div>
)

const Brand = () => {
  return (
    <Grid>
      <Section>
        <Subtitle>Typography</Subtitle>
        <Paragraph>
          <AccentFont>Noto Serif TC</AccentFont>
          <div>Default Font</div>
        </Paragraph>
        <Paragraph>
          <DefaultFont>Raleway</DefaultFont>
          <div>Accent Font</div>
        </Paragraph>
      </Section>

      <Section>
        <Subtitle>Colors</Subtitle>
        <ColorGrid>
          <Color name={'Pink'} color={theme.color.pink} hex={'#eedede'} />
          <Color name={'Gray'} color={theme.color.gray} hex={'#cdcdcd'} />
          <Color name={'Black'} color={theme.color.black} hex={'#454545'} />
        </ColorGrid>
      </Section>
    </Grid>
  )
}

export default Brand
