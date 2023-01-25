class User {
    #name;
    #phone;
    #email;
    #gender;

    constructor(name, phone, email, gender) {
      this.#name = name;
      this.#phone = phone;
      this.#email = email;
      this.#gender = gender;
    }
    setName(name) {
      this.#name = name;
    }
    setPhone(phone) {
      this.#phone = phone;
    }
    setEmail(email) {
      this.#email = email;
    }
    setGender(gender) {
      this.#gender = gender;
    }
    getName() {
      return this.#name;
    }
    getEmail() {
      return this.#email;
    }
    getGender() {
      return this.#gender;
    }
    getPhone() {
      return this.#phone;
    }
  }

  var users = [];
  function getList() {
    users = users.sort((a,b)=>a.getName() > b.getName()? 1:-1);
    var result = "";
    for (let i = 0; i < users.length; i++) {
    
      result +=' <li><a href="#contactInfo">';

      if(users[i].getGender().toUpperCase() ==="MALE")
      result +='<img src="resources/img/male.png">';
      else
      result +='<img src="resources/img/female.png">';

      result +=`<h2>${users[i].getName()}</h2></a>`;
      result +=`<a href="tel:${users[i].getPhone}" data-rel="popup" data-position-to="window" data-transition="pop" data-icon="phone"></a>`;
      result +="</li> ";
    }
    return result;
  }