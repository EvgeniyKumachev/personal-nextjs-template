import React, { Component, FC } from 'react'
import { getSnapshot } from 'mobx-keystone'
import { GetServerSideProps } from 'next'

import { initRootStore } from '@app/store'

export interface Props {}

const IndexPage: FC<Props> = (props) => <div>index</div>

export const getServerSideProps: GetServerSideProps = async (context) => {
  const store = initRootStore()

  return { props: { initialState: getSnapshot(store) } }
}

export default IndexPage
