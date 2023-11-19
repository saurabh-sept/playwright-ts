function scrambler(len: number, charset: string) {
    let text = '';
    for (let i = 0; i < len; i += 1) {
        text += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return text;
}

export function scrambleUserName() {
    const charset = 'abcdefghijklmnopqrstuvwxyz0123456789';
    return `User${scrambler(5, charset)}`;
}