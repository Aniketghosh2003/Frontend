export default class Todolist {
  constructor() {
    this._list = [];
  }
  getlist() {
    return this._list;
  }
  clearlist() {
    this._list = [];
  }
  additemtolist(itemobj) {
    this._list.push(itemobj);
  }

  removeitemfromlist(id) {
    const list = this._list;
    for (let i = 0; i < list.length; i++) {
        if (list[i]._id == id) {
            list.splice(i,1);
            break;
        }
    }
  }
}
