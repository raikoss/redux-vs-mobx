import { observable, action, decorate } from 'mobx';

export default class MobxState {
  name = '';
  loading = false;
  error = null;

  updateName = name => {
    this.loading = true;

    setTimeout(() => {
      this.name = name;
      this.loading = false;
    }, 2000);
  }
}

decorate(MobxState, {
  name: observable,
  loading: observable,
  error: observable, 
  updateName: action
});