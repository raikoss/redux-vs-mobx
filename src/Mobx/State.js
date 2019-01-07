import { observable, action, decorate } from 'mobx';

export default class MobxState {
  name = '';
  loading = false;
  error = null;

  // An action to update the name
  updateName = name => {
    this.loading = true;

    setTimeout(() => {
      this.name = name;
      this.loading = false;
    }, 2000);
  }
}

// Since decorator syntax is not supported by create-react-app, we have to do this to get the same result
decorate(MobxState, {
  name: observable,
  loading: observable,
  error: observable, 
  updateName: action
});

// If it was, we could have made the class like this instead
// export default class MobxState {
//   @observable name = '';
//   @observable loading = false;
//   @observable error = null;

//   // An action to update the name
//   @action
//   updateName = name => {
//     this.loading = true;

//     setTimeout(() => {
//       this.name = name;
//       this.loading = false;
//     }, 2000);
//   }
// }