import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../store/slice/userSlice';

const ProfilePage = () => {
  
    // const loadingState = useSelector(selectLoadingState)
    // const [filter, setFilter] = useState('')
    // const tasks = useSelector(selectFilteredTasks(filter))
    const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(formData));
  };
  
    return <div className={'user'}>

        <h1>Hi {formData.firstname} !</h1>
        <h2>Customize your profile here</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                Your firstname :
                <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} />
                </label>
            </div>
            <div>
                <label>
                Your lastname :
                <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} />
                </label>
            </div>
            <div>
                <label>
                Your email :
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </label>
            </div>
            <button type="submit">Save</button>
        </form>
    </div>
  }

export default ProfilePage