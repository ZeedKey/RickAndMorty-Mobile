import React from 'react'
import { BlurView } from '@react-native-community/blur'
import styled from 'styled-components/native'

import { useAlertContext } from 'src/modules/alert-context'

import { Button } from './button'

const Wrapper = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  align-items: center;
  justify-content: center;

  background-color: #ffffff36;
`
const AlertView = styled(BlurView)`
  padding: 24px;
  border-radius: 24px;
  width: 80%;
`

const Text = styled.View`
  text-align: center;
  align-items: center;
  margin-bottom: 24px;
`
const Title = styled.Text`
  font-family: 'Montserrat-Bold';
  font-size: 22px;
  letter-spacing: 0.3px;
`

const Description = styled.Text`
  margin-top: 8px;
  font-family: 'Montserrat-Medium';
  font-size: 16px;
`

export const Alert = () => {
  const { alertOptions, hideAlert } = useAlertContext()

  return (
    <Wrapper>
      <AlertView blurType={'regular'}>
        <Text>
          <Title>{alertOptions.title}</Title>
          {alertOptions.description && (
            <Description>{alertOptions.description}</Description>
          )}
        </Text>
        <Button
          onPress={() => {
            alertOptions.onPress?.()
            hideAlert()
          }}
          title={'Ok'}
        />
      </AlertView>
    </Wrapper>
  )
}
