import React from 'react'
import { useNavigation } from '@react-navigation/native'

interface IDetailLayoutProps {
  title?: string | null
  children: React.ReactNode
}

export const DetailLayout: React.FC<IDetailLayoutProps> = props => {
  const navigation = useNavigation()
  navigation.setOptions({
    title: props.title,
  })

  return <>{props.children}</>
}
