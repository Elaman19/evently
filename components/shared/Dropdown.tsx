import React, { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ICategory } from '../lib/database/models/category.model'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"



type DropDownProps = {
  value?: string
  onChangeHandler?: () => void
}

const Dropdown = ({value, onChangeHandler}: DropDownProps) => {

  const [categories, setCategories] = useState<ICategory[]>([])

  return (
    <Select onValueChange={onChangeHandler} defaultValue={value}>
      <SelectTrigger>
        <SelectValue placeholder="Category" />
      </SelectTrigger>
      <SelectContent>
        {categories.length > 0 && categories.map(category => (
          <SelectItem key={category._id} value={category._id} className='p-regular-14'/>
        ))}

        <AlertDialog>
          <AlertDialogTrigger>Open</AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your account
                and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </SelectContent>
    </Select>
  )
}

export default Dropdown