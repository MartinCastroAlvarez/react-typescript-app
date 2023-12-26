import React, { useRef, useState, useEffect, useCallback } from 'react'

import toast from 'react-hot-toast'
import Stack from 'react-bootstrap/Stack'

import { Action } from './Action'

interface Props {
  onChange: any
  value: string
}

export const FileInput: React.FunctionComponent<Props> = ({ onChange, value = 'Upload' }): JSX.Element => {
  const [file, setFile] = useState<File | null>(null)
  const ref = useRef<HTMLInputElement>(null)

  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e?.target?.files !== null) {
      setFile(e.target.files[0])
      onChange()
    }
  }, [setFile])

  const handleClick = useCallback(() => {
    ref?.current?.click()
  }, [ref])

  useEffect(() => {
    if (file !== null) {
      toast.success(`${file.name.slice(0, 30)} added!`)
    }
  }, [file])

  return (
    <Stack gap={3} className='aec-file-input'>
      <Action value={value} onClick={handleClick}/>
      <input ref={ref} type="file" style={{ position: 'absolute', top: '-100px' }} onChange={handleFileChange} />
    </Stack>
  )
}
