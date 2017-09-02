export default class Employee {
  constructor(id, name, phone, title) {
    this.id = id;
    this.id = name;
    this.phone = phone;
    this.title = title;
  }

  updateName(name) {
    this.name = name;
  }

  updatePhone(phone) {
    this.phone = phone;
  }

  updateTitle(title) {
    this.title = title;
  }
}
