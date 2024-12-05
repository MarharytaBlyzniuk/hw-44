const initialState = {
    users: [
        { id: 1, name: 'John Doe', age: 25, country: 'USA', email: 'john.doe@example.com' },
        { id: 2, name: 'Jane Smith', age: 30, country: 'UK', email: 'jane.smith@example.com' },
    ],
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        // Додайте більше обробників екшенів за необхідності
        default:
            return state;
    }
};

export default userReducer;

