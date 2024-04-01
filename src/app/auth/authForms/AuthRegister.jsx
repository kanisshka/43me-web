import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import CustomTextField from '@/app/(DashboardLayout)/components/forms/theme-elements/CustomTextField';
import CustomFormLabel from '@/app/(DashboardLayout)/components/forms/theme-elements/CustomFormLabel';
import { Stack } from '@mui/system';
import AuthSocialButtons from './AuthSocialButtons';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
const AuthRegister = ({ title, subtitle, subtext }) => {
  const [firstName,setFirstName] = useState('')
  const [lastName,setLastName] = useState('')
  const [mobile,setMobile]=useState('')
  const [email,setEmail]= useState('')
  const [password,setPassword]=useState('')
const router = useRouter()
  const data = {
    first_name:firstName,
    last_name:lastName,
    mobile_no:mobile,
    email: email,
    password: password,
  };
  const handleRegisterIn = async () => {
    try {
      const data = {
        first_name:firstName,
        last_name:lastName,
        mobile_no:mobile,
        email: email,
        password: password,
      };
      const response = await axios(`${process.env.NEXT_PUBLIC_APP}auth/register`, {
        method: 'POST',
        data: data,
      });
      console.log(response,'register')
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
  console.log(data)
  return (
  <>
    {title ? (
      <Typography fontWeight="700" variant="h3" mb={1}>
        {title}
      </Typography>
    ) : null}

    {subtext}
    {/* <AuthSocialButtons title="Sign up with" />

    <Box mt={3}>
      <Divider>
        <Typography
          component="span"
          color="textSecondary"
          variant="h6"
          fontWeight="400"
          position="relative"
          px={2}
        >
          or sign up with
        </Typography>
      </Divider>
    </Box> */}

    <Box>
      <Stack mb={3}>
        <CustomFormLabel htmlFor="name">First Name</CustomFormLabel>
        <CustomTextField id="firstName" variant="outlined" fullWidth value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
        <CustomFormLabel htmlFor="name">Last Name</CustomFormLabel>
        <CustomTextField id="LastName" variant="outlined" fullWidth value={lastName} onChange={(e) => setLastName(e.target.value)} />
        <CustomFormLabel htmlFor="email">Email Adddress</CustomFormLabel>
        <CustomTextField id="MobileNo" variant="outlined" fullWidth value={email} onChange={(e) => setEmail(e.target.value)} />
        <CustomFormLabel htmlFor="email">Mobile No.</CustomFormLabel>
        <CustomTextField id="email" variant="outlined" fullWidth value={mobile} onChange={(e) => setMobile(e.target.value)} />
        <CustomFormLabel htmlFor="password">Password</CustomFormLabel>
        <CustomTextField id="password" type='password' variant="outlined" fullWidth value={password} onChange={(e) => setPassword(e.target.value)} />
      </Stack>
      <Button
        color="primary1"
        variant="contained"
        size="large"
        fullWidth
        type="submit"
        onClick={handleRegisterIn}
        // component={Link}
        // href="/auth/auth1/login"
        className='hoverPrimary'
      >
        Sign Up
      </Button>
    </Box>
    {subtitle}
  </>
  )
};

export default AuthRegister;
