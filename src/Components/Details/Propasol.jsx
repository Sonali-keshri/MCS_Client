import React from 'react'
import ProposalCard from './ProposalCard'
import CharteredAccountantDetails from './CharteredAccountantDetails'
import { useParams } from 'react-router-dom'
import useFetch from '../../utils/useFetch'
import { api } from '../../utils/Api'

const Propasol = () => {
 
  const { id } = useParams();

  const {data, loading} = useFetch(api+"/"+id)

  return (
    <div className='flex md:flex-row flex-col  lg:p-20 p-10 gap-16'>
        <ProposalCard data={data} loading={loading}/>
        <CharteredAccountantDetails data={data} loading={loading}/>
    </div>
  )
}

export default Propasol