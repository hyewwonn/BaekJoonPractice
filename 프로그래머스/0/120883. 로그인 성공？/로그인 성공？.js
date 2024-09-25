function solution(id_pw, db) {
    const idx = db.findIndex((val) => val[0] === id_pw[0]);
    if(idx !== -1) {
        if(db[idx][1] === id_pw[1]) return 'login';
        else return 'wrong pw';
    }
    else return 'fail';
}