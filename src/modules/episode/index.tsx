import { useFetchEpisodes } from '@hooks'
import { Episode } from '@ui/badges'
import { List } from '@ui/common'
import React, { useState } from 'react'
import { Episode as Model, useGetEpisodesQuery } from 'src/schemas/generated'
import { MainLayout } from 'src/ui/layouts/MainLayout'

export const EpisodeScreen = () => {
  const { data, renderItem, pagination } = useFetchEpisodes()

  return (
    <MainLayout>
      <List
        handlePage={pagination}
        columns={1}
        data={data?.episodes.results}
        renderItem={renderItem}
      />
    </MainLayout>
  )
}
