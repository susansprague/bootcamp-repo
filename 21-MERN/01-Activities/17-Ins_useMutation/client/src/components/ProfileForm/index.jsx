import { useState } from 'react';
// Important for useMutation: We import the useMutation hook from @apollo/client
import { useMutation } from '@apollo/client';

// Important for useMutation: We import the specific query we'd like to perform from the mutations.js utility
import { ADD_PROFILE } from '../../utils/mutations';

const ProfileForm = () => {
  const [name, setName] = useState('');

  // Important for useMutation: We pass the mutation we'd like to execute to the useMutation hook
  // The useMutation hook returns an array. The function at index 0 can be dispatched within the component to trigger the mutation query
  // The object at index 1 contains information, such as the error boolean, which we use in this application
  const [addProfile, { error }] = useMutation(ADD_PROFILE);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      // Important for useMutation: Here we want the mutation to occur in response to a form submission
      // The mutation we want to run also requires mutation parameters to be passed, which we deliver as a variables object
      const { data } = await addProfile({
        variables: { name },
      });

      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h3>Add yourself to the list...</h3>
      <form
        className="flex-row justify-center justify-space-between-md align-center"
        onSubmit={handleFormSubmit}
      >
        <div className="col-12 col-lg-9">
          <input
            placeholder="Add your profile name..."
            value={name}
            className="form-input w-100"
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div className="col-12 col-lg-3">
          <button className="btn btn-info btn-block py-3" type="submit">
            Add Profile
          </button>
        </div>
        {error && (
          <div className="col-12 my-3 bg-danger text-white p-3">
            Something went wrong...
          </div>
        )}
      </form>
    </div>
  );
};

export default ProfileForm;
