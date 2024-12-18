export function entry(user, text) {
    return (
        `<div id="entry-div">
            <div id="user">${user}</div>
            ${text}
        </div>`
    );
}