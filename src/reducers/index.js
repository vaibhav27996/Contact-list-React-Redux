const initialState = [];

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        //fetching the contact from api 
        case 'FETCH_CONTACTS':
            return action.contactDatas;

        //added to store   
        case 'ADD_CONTACT':
            return [...state, action.contactData];
        
        //delete contact from store with id
        case 'DELETE_CONTACT':
                const deleteContact = state.filter(contact => contact.id !== action.contact_id && contact);
                return deleteContact;

         //update contact from store with id
        case 'UPDATE_CONTACT':
            const updateContact = state.map(contact => contact.id === action.editData.id ? action.editData : contact);
            state = updateContact;
            return state;

     
        default:
            return state;
    }
}

export default contactReducer;