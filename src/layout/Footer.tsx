import React from 'react'

import Stack from 'react-bootstrap/Stack'

import { Link } from '../components/Link'

export const Footer = (): JSX.Element => {
  return (
    <Stack direction='horizontal' className='aec-footer' gap={3}>
      <Stack gap={3}></Stack>
      <Stack gap={3}></Stack>
      <Stack gap={3}>
        <Link href="#" value="About Us"/>
        <Link href="#" value="Careers"/>
        <Link href="#" value="FAQ"/>
        <Link href="#" value="Blog"/>
      </Stack>
      <Stack gap={3}>
        <Link href="#" value="Privacy"/>
        <Link href="#" value="Terms of Service"/>
        <Link href="#" value="Contact Us"/>
      </Stack>
    </Stack>
  )
}
