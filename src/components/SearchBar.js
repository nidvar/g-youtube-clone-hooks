import React, {useState} from 'react';

const SearchBar =(props)=>{
    const [user_input, change_user_input] = useState('');

    const onSubmit = (e)=>{
        e.preventDefault();
        props.grab_data(user_input);
        change_user_input('');
    }
    return(
        <div className='SearchBar'>
            <form onSubmit={ onSubmit }>
                <input 
                    value={user_input}
                    onChange={ (e)=>{ change_user_input(e.target.value) } }
                />
            </form>
        </div>
    )
}

export default SearchBar