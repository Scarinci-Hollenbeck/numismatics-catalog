import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';
import { postFetcher } from '../utils/helpers';

type Props = {
  type: string
  deleteId: string
}

export default function DeleteAdminsItem({ type, deleteId }: Props): JSX.Element {
  const [deleteResultsMessage, setDeleteResultsMessage] = useState('');

  async function onClick() {
    if (type !== undefined && type === 'coins') {
      const request = await postFetcher('/api/delete-coins', deleteId);
      setDeleteResultsMessage(request.message);
    }

    if (type !== undefined && type === 'collection') {
      const request = await postFetcher('/api/delete-collection', deleteId);
      setDeleteResultsMessage(request.message);
    }
  }

  return (
    <>
      {deleteResultsMessage && (
        <p>
          <strong>{deleteResultsMessage}</strong>
        </p>
      )}
      {' '}
      <a type="button" onClick={onClick}>
        <FontAwesomeIcon icon={faTrash} className="small-icon" />       
      </a>     
    </>
  );
}
