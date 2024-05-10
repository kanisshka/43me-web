'use client'
import React from 'react'
import PageContainer from '../../components/container/PageContainer'
import AppCard from '../../components/shared/AppCard'
import Breadcrumb from '../../layout/shared/breadcrumb/Breadcrumb'
import { Box, Divider } from '@mui/material'
import FirstSet from '../../components/apps/FirstSet'
import SecondSet from '../../components/apps/SecondSet'
const Settings = () => {
  return (
    <PageContainer title="Settings" description="43me | Settings">
      <Breadcrumb title="Settings"  />
        <AppCard>
        <Box>
            <FirstSet />
            <Divider/>
            <SecondSet/>
        </Box>
        </AppCard>
    </PageContainer>
  )
}

export default Settings