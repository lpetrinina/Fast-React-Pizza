import { useState } from 'react';
import Button from '../../ui/Button';
import { useDispatch } from 'react-redux';
import { updateName } from './userSlice';
import { useNavigate } from 'react-router';

const inputStyle =
  'w-75 rounded-full border border-stone-200 px-4 py-2 text-sm transition-all duration-300 focus:ring focus:ring-yellow-400 focus:outline-none md:px-6 md:py-3';

function CreateUser() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!username) {
      return;
    }

    dispatch(updateName(username));
    navigate('/menu');
  }

  return (
    <form className="flex flex-col items-center" onSubmit={handleSubmit}>
      <p className="mb-4 text-sm text-stone-600 md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className={`${inputStyle} mb-8`}
      />

      {username !== '' && <Button type="primary">Start ordering</Button>}
    </form>
  );
}

export default CreateUser;
