

import { Trash2 } from 'lucide-react';
import React from 'react';
import { toast } from 'react-hot-toast';


interface DeleteJobBtnProps {
  id: string;
  onDelete: (id: string) => void;
}

const DeleteJobBtn: React.FC<DeleteJobBtnProps> = ({ id, onDelete }) => {
  const removeJob = async () => {
    const confirmed = confirm('Are you Sure to delete?');

    if (confirmed) {
      try {
        await onDelete(id);
        toast.success('Deleted successfully!'); 
      } catch (error) {
        console.error('Error deleting job:', error);
      }
    }
  };

  return (
    <div>
      <button onClick={removeJob} className="p-2 text-red-600">
        <Trash2 />
      </button>
    </div>
  );
};

export default DeleteJobBtn;