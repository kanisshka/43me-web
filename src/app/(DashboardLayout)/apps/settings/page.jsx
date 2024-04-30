'use client'
import React from 'react'
import PageContainer from '../../components/container/PageContainer'
import AppCard from '../../components/shared/AppCard'
import Breadcrumb from '../../layout/shared/breadcrumb/Breadcrumb'
import { Box } from '@mui/material'
import FirstSet from '../../components/apps/FirstSet'
const Settings = () => {
  return (
    <PageContainer title="Settings" description="43me | Settings">
      <Breadcrumb title="Settings"  />
        <AppCard>
        <Box>
            <FirstSet />
        </Box>
        </AppCard>
    </PageContainer>
  )
}

export default Settings