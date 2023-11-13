import React from 'react'
import ErrorBox from "../ErrorBox/ErrorBox"
import AddNewProduct from "../AddNewProduct/AddNewProduct"
import ProductTable from '../ProductTable/ProductTable'

export default function Products() {
  return (
    <>
    <AddNewProduct></AddNewProduct>
    <ErrorBox msg={"هیچ محصولی یافت نشد"}></ErrorBox>
    <ProductTable></ProductTable>
    </>
  )
}
