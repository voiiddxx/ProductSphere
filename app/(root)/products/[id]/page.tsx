import ProductDetail from '@/components/shared/ProductDetail'
import React from 'react'

const page = ({
    params:{ id },
  } : {params:{
    id : string
  }}) => {
  return (
    <ProductDetail id={id} />
  )
}

export default page