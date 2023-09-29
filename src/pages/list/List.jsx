import React from 'react'
import { useChairManagement } from '../../context/useChairManagement';
import { ChairManagementContext } from '../../context/chairManagement.context';





export const List = () => {
  const { chairs, actions } = useChairManagement();
  

  
  return (
    <ul>
      <li> {{}} </li> <li></li>
    </ul>
  )
}
