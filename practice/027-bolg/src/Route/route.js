let instance;

class Route {

    constructor() {
        this.current = 'home';
        this.handle_click_event();
        this.handle_change_hash();
        this.go(window.location.hash);
    }

    go(hash) {
        this.current = this.parse_hash(hash);
        this.render();
    }

    handle_change_hash() {
        window.addEventListener('hashchange', () => {
            /*如果发生改变就去对应页面*/
            this.go(window.location.hash);
        });
    }

    handle_click_event() {
        document.addEventListener('click', (e) => {
            let target = e.target;
            switch (target.nodeName) {
                case 'A':
                    //    不是本地路由则不处理
                    if (target.host)
                        return;
                    this.go(target.hash);
                    break;
                default:
                    break;
            }
        })
    }

    render() {
        let id = this.current;
        let el = document.getElementById(id);
        // 隐藏所有A标签元素
        this.hide_a_labl();
        el.hidden = false;
    }

    hide_a_labl() {
        let els = document.querySelectorAll('.page');
        els.forEach((el) => {
            el.hidden = true;
        });
    }

    /**
     * 通过原始hash解析页面名称
     * */
    parse_hash(hash) {
        var hash_arr = hash.split('/');
        return hash_arr[hash_arr.length - 1];
    }
}


/*初始化*/
function init() {
    if (!instance)
        instance = new Route();
}

export default {
    init
};