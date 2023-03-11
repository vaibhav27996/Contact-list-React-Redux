const initialState = [];

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_CONTACTS':
            return action.contactDatas;

        case 'ADD_CONTACT':
            return [...state, action.contactData];
            
        case 'DELETE_CONTACT':
                const deleteContact = state.filter(contact => contact.id !== action.contact_id && contact);
                return deleteContact;

        case 'UPDATE_CONTACT':
            const updateContact = state.map(contact => contact.id === action.editData.id ? action.editData : contact);
            state = updateContact;
            return state;

     
        default:
            return state;
    }
}

export default contactReducer;