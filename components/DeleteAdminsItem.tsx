import React, { useState } from 'react';
import { Schema } from 'mongoose';
import { postFetcher } from '../utils/helpers';

type Props = {
  type: string
  deleteId: Schema.Types.ObjectId
}

export default function DeleteAdminsItem({ type, deleteId }: Props) {
  const [deleteResultsMessage, setDeleteResultsMessage] = useState('');

  async function onClick() {
    if (type !== undefined && type === 'coins') {
      const request = await postFetcher('/api/delete-coins', deleteId);
      setDeleteResultsMessage(request.message);
    }

    if (type !== undefined && type === 'collections') {
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
      <button type="button" onClick={onClick}>
        Delete
      </button>

      <style jsx>
        {`
          button {
            padding: 10px;
            font-size: 1rem;
            background-color: blue;
            color: #fff;
          }
        `}
      </style>
    </>
  );
}
