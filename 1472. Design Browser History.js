const Node = (url, next, prev) => {
    this.value = url || null;
    this.next = next || null;
    this.prev = prev || null;
}



/**
 * @param {string} homepage
 */
var BrowserHistory = function(homepage) {
    this.head = Node(homepage);
    this.current = this.head;

};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
    let newVisit = Node(url);
    this.current.next = newVisit;

    newVisit.prev = this.current;
    this.current = newVisit;


};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
    while (steps > 0) {
        if (!this.current.prev) {
            return this.current.value;
        }
        this.current = this.current.prev;
        steps--;
    }
    return this.current.value;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
    while( steps > 0 ) {
        if(!this.current.next) {
            return this.current.value;
        }
        this.current = this.current.next;
        steps--;
    }
    return this.current.value;
};

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */