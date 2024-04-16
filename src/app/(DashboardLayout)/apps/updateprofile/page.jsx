'use client'
import React from 'react'
import Breadcrumb from '../../layout/shared/breadcrumb/Breadcrumb'
import PageContainer from '../../components/container/PageContainer'
import AppCard from '../../components/shared/AppCard'
import { Typography, Box, TextField, Button } from '@mui/material'
// import Box from '@mui/material'
const UpdateProfile = () => {
    return (
        <PageContainer title="Task List" description="this is Contact">
            <Breadcrumb title="Update Profile" subtitle="Update Your  Information" />
            <AppCard>
                <Box><Box><Typography>First Name</Typography>
                    <TextField id="standard-basic" variant="standard" /></Box>
                <Box><Typography>Last Name</Typography>
                    <TextField id="standard-basic" variant="standard" /></Box>
                <Box><Typography>Email</Typography>
                    <TextField id="standard-basic" variant="standard" /></Box>
                <Box><Typography>Mobile</Typography>
                    <TextField id="standard-basic" variant="standard" /></Box></Box>
                    <Button>UPdate</Button>
            </AppCard>
        </PageContainer>
    )
}

export default UpdateProfile