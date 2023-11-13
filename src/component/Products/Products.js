import React from 'react'
import ErrorBox from "../ErrorBox/ErrorBox"
import AddNewProduct from "../AddNewProduct/AddNewProduct"

export default function Products() {
  return (
    <>
    <AddNewProduct></AddNewProduct>
    <ErrorBox msg={"هیچ محصولی یافت نشد"}></ErrorBox>
    </>
  )
}
