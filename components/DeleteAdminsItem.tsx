import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';
import { postFetcher } from '../utils/helpers';

type Props = {
  type: string
  deleteId: string
}

export default function DeleteAdminsItem({ type, deleteId }: Props): JSX.Element {
  const router = useRouter();

  async function onClick() {
    if (type !== undefined && type === 'coins') {
      const request = await postFetcher('/api/delete-coins', deleteId);
      console.log('%c coins! ', 'color: red; font-size: 22px');
      console.log(request);
    }

    if (type !== undefined && type === 'collection') {
      const request = await postFetcher('/api/delete-collection', deleteId);
      console.log('%c collections! ', 'color: red; font-size: 22px');
      console.log(request);
    }
    
    return router.reload();
  }

  return (
    <a type="button" onClick={onClick}>
      <FontAwesomeIcon icon={faTrash} className="small-icon" />       
    </a> 
  );
}
