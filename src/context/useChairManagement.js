import { useContext } from 'react';
import { ChairManagementContext } from './chairManagement.context';

export const useChairManagement = () => useContext(ChairManagementContext);
