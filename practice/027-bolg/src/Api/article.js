import send from "../Util/send";

let instantce;

class Articel {

    read(page) {
        send.get('/api/article/read',data=>{
            console.log('====================================');
            console.log(data);
            console.log('====================================');
        })
    };

    add() {};

    update() {};

    delete() {};

    find() {};

}

function init() {
    if (!instantce)
        instantce = new Articel();
}

init();

export default instantce;