import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import CustomTextField from '@/app/(DashboardLayout)/components/forms/theme-elements/CustomTextField';
import CustomFormLabel from '@/app/(DashboardLayout)/components/forms/theme-elements/CustomFormLabel';
import { useState } from 'react';
import { ForgotPassWord } from '@/utils/apiCalls';
import AlertCart from '@/app/(DashboardLayout)/components/apps/ecommerce/productCart/AlertCart';
export default function AuthForgotPassword() {
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
  const router = useRouter()
  const [open, setOpen] = useState(false);
  const handleForgot = async () => {
    try {
      const data={
        email:email
      }
      // console.log(data,'data')
      const res = await ForgotPassWord(data);
      console.log(res.data);
      if (res.data.success === true) {
        setOpen(true);
        setText('Email Sent Successfully!');
        router.push('/auth/auth1/login')
      }
    } catch (err) {
      console.log(err);
      setOpen(true)
      setText('Error Found , Please Try Again!');
    }
  };
  // const isEmailEmpty = !(email)
  // console.log(email,'em')
  return (
    <>
      <Stack mt={4} spacing={2}>
        <CustomFormLabel
          htmlFor="reset-email"
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
          >
          Email Address
        </CustomFormLabel>
        <CustomTextField id="reset-email" variant="outlined" fullWidth placeholder='Enter your email here'           onChange={(e) => setEmail(e.target.value)}
 value={email}/>

        <Button
          color="primary1"
          variant="contained"
          size="large"
          fullWidth
          className="textW"
          onClick={handleForgot}
          // disabled={isEmailEmpty}
        >
          Forgot Password
        </Button>
        <Button color="primary1" size="large" fullWidth href="/auth/auth1/login">
          Back to Login
        </Button>
        <AlertCart text={text} open={open} />
      </Stack>
    </>
  );
}
