import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Page extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='page'>
        <Text>Hello world!</Text>
      </View>
    )
  }
}
