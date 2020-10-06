export const actions = {
    setFavorite: 'SEND_MESSAGE',
};

export const sendMessage = payload => ({
    type: actions.setFavorite,
    payload
});