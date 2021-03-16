module.exports = () => {
    const data = {
        users: [],
        testers: []
    }

    const totalUsers = 50;
    const totalTesters = 30;

    for (let i = 0; i < totalUsers; i++) {
        data.users.push(
            {
                id: i,
                name: `user${i}`,
                title: `title ${i}`
            }
        );
    }

    for (let i = 0; i < totalTesters; i++) {
        data.testers.push(
            {
                id: i,
                name: `Tester ${i}`,
                title: `Proof ${i}`
            }
        );
    }

    return data
}