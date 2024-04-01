'use client'
import Box from '@mui/material/Box';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Stack from '@mui/material/Stack';
import { useRouter } from 'next/navigation';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import CustomCheckbox from '@/app/(DashboardLayout)/components/forms/theme-elements/CustomCheckbox';
import CustomTextField from '@/app/(DashboardLayout)/components/forms/theme-elements/CustomTextField';
import CustomFormLabel from '@/app/(DashboardLayout)/components/forms/theme-elements/CustomFormLabel';
import AuthSocialButtons from './AuthSocialButtons';
import axios from 'axios';
const AuthLogin = ({ title, subtitle, subtext }) => {
  const [email, setEmail] = useState('');
  const router = useRouter()
  const [error, setError] = useState('')
  const [password, setPassword] = useState('');
  const handleSignIn = async () => {
    try {
      const data = {
        email: email,
        password: password,
      };
      const response = await axios(`${process.env.NEXT_PUBLIC_APP}auth/login`, {
        method: 'POST',
        data: data,
      });
      if (response.statusText==='OK') {
        router.push('/');
      } else {
        console.log(response)
        setError(response.data.message)
        

      }
    } catch (error) {
      console.error('Error during login:', error);

    }
  };

  return (
    <>
      {title ? (
        <Typography fontWeight="700" variant="h3" mb={1}>
          {title}
        </Typography>
      ) : null}

      {subtext}

      {/* <AuthSocialButtons title="Sign in with" /> */}
      {/* <Box mt={3}>
      <Divider>
        <Typography
          component="span"
          color="textSecondary"
          variant="h6"
          fontWeight="400"
          position="relative"
          px={2}
        >
          or sign in with
        </Typography>
      </Divider>
    </Box> */}

      <Stack>
        <Box>
          <CustomFormLabel htmlFor="email">Email</CustomFormLabel>
          <CustomTextField id="email" variant="outlined" fullWidth value={email} onChange={(e) => setEmail(e.target.value)} />
        </Box>
        <Box>
          <CustomFormLabel htmlFor="password">Password</CustomFormLabel>
          <CustomTextField id="password" type="password" variant="outlined" fullWidth value={password}
            onChange={(e) => setPassword(e.target.value)} />
        </Box>
        <Stack justifyContent="space-between" direction="row" alignItems="center" my={2}>
          <FormGroup>
            <FormControlLabel
              control={<CustomCheckbox defaultChecked />}
              label="Remember this Device"
            />
          </FormGroup>
          <Typography
            component={Link}
            href="/auth/auth1/forgot-password"
            fontWeight="500"
            sx={{
              textDecoration: 'none',
              color: 'primary1.main',
            }}
          >
            Forgot Password ?
          </Typography>
        </Stack>
      </Stack>
      {error !== null ? <Typography className='errorStatement'>{error}</Typography> : ""}
      <Box>
        <Button
          color="primary1"
          variant="contained"
          size="large"
          fullWidth
          // component={Link}
          // href="/"
          type="submit"
          onClick={handleSignIn}
          className='hoverPrimary'
        >
          Sign In
        </Button>
      </Box>
      {subtitle}
    </>)
};

export default AuthLogin;
