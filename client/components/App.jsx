class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'home',
      user: {}
    };

    App.prototype.handleNext = App.prototype.handleNext.bind(this);
  }

  handleNext (e) {
    e.preventDefault();

    // store input field name and value
    // as a key value pair in an array of objects
    var $form = $(e.target);
    var formData = $form.serializeArray();
    var newUser = Object.assign({}, this.state.user);

    // inserting form data into an object which we will use to set state
    if (formData.length > 0) {
      formData.forEach((input) => {
        newUser[input["name"]] = input["value"];
      });
    }

    console.log(newUser);

    //store this context in a variable for promise function
    var self = this;

    // set current page state based on where next is clicked
    var currentPage = this.state.page;
    var nextPage;
    if (currentPage === 'home') { nextPage = 'form one'; }
    if (currentPage === 'form one') {
      nextPage = 'form two';

      // api call to post data from form one
      axios.post('http://localhost:3000/formOne', {
        name: newUser['name'],
        email: newUser['email'],
        password: newUser['password']
      }).then((response) => {
        console.log(response);
        //set state with the id from the database
        newUser['id'] = response.data;
        self.setState({
          page: nextPage,
          user: newUser
        });
      }).catch((error) => {
        console.log(error);
      });
    }

    if (currentPage === 'form two') {
      nextPage = 'form three';

      // api call to post data from form two
      axios.post('http://localhost:3000/formTwo', {
        id: newUser['id'],
        addressOne: newUser['addressOne'],
        addressTwo: newUser['addressTwo'],
        city: newUser['city'],
        state: newUser['state'],
        zip: newUser['zip'],
        tel: newUser['tel']
      }).then((response) => {
        console.log(response.data);
        self.setState({
          page: nextPage,
          user: newUser
        });
      }).catch((error) => {
        console.log(error);
      });
    }
    if (currentPage === 'form three') {
      nextPage = 'confirmation';

       // api call to post data from form three
       axios.post('http://localhost:3000/formThree', {
        id: newUser['id'],
        creditCard: newUser['creditCard'],
        cvv: newUser['cvv'],
        expiration: newUser['expiration'],
        billingZip: newUser['billingZip']
      }).then((response) => {
        console.log(response.data);
        self.setState({
          page: nextPage,
          user: newUser
        });
      }).catch((error) => {
        console.log(error);
      });
    }

    if (currentPage === 'confirmation') {
      nextPage = 'home';
      newUser = {};
      self.setState({
        page: nextPage,
        user: newUser
      });
    }
  }


  render() {
    var currentPage = 'home';
    if (this.state.page === 'home') {
      return (
        <div className="checkout">
          <p className="checkout-cart">Cart:</p>
          <img src="quantum.png" alt="nuka cola quantum" height="100" className="checkout-image"></img>
          <p className="checkout-quantity">Quantity: 12</p>
          <button type="button" className="checkout-button" onClick={(e) => this.handleNext(e)}>Checkout</button>
        </div>
      );
    } else if (this.state.page === 'form one') {
      return <FormOne />;
    } else if (this.state.page === 'form two') {
      return <FormTwo />;
    } else if (this.state.page === 'form three') {
      return <FormThree />;
    } else if (this.state.page === 'confirmation') {
      return <Confirmation userData={this.state.user}/>;
    }
  }
}

// form one component
var FormOne = function(props) {
  var currentPage = 'form one';
  return(
    <div>
      <form className="form form-one" onSubmit={(e) => App.prototype.handleNext(e)}>
        <input type="text" name="name" id="name" maxLength="30" placeholder="Name"/>
        <input type="email" name="email" id="email" placeholder="Email Address"/>
        <input type="password" name="password" id="password" maxLength="30" placeholder="Password"/>
        <button type="submit" name="form-one-next" className="next-button">Next</button>
      </form>
    </div>
  );
}

// form two component
var FormTwo = function(props) {
  var currentPage = 'form two';
  return(
    <div>
      <form className="form form-two" onSubmit={(e) => App.prototype.handleNext(e)}>
        <input type="text" name="addressOne" id="addressOne" placeholder="Address Line 1"/>
        <input type="text" name="addressTwo" id="addressTwo" placeholder="Address Line 2"/>
        <input type="text" name="city" id="city" maxLength="30" placeholder="City"/>
        <input type="text" name="state" id="state" maxLength="23" placeholder="State"/>
        <input type="number" name="zip" id="zip" maxLength="12" placeholder="Zip Code"/>
        <input type="tel" name="tel" id="tel" placeholder="Phone"/>
        <button type="submit" name="form-two-next" className="next-button">Next</button>
      </form>
    </div>
  );
}

// form three component
var FormThree = function(props) {
  var currentPage = 'form three';
  return(
    <div>
      <form className="form form-two" onSubmit={(e) => App.prototype.handleNext(e)}>
        <input type="number" name="creditCard" id="creditCard" maxLength="20" placeholder="Credit Card"/>
        <input type="date" name="expiration" id="expiration" placeholder="Expiration Date"/>
        <input type="number "name="cvv" id="cvv" maxLength="4" placeholder="CVV"/>
        <input type="number" name="billingZip" id="billingZip" maxLength="12" placeholder="Billing Zip Code"/>
        <button type="submit" name="form-three-next" className="next-button">Next</button>
      </form>
    </div>
  );
};

// confirmation component\
var Confirmation = function (props) {
  return (
    <div>
      <h3>Contact Info</h3>
        <p>Name: {props.userData.name}</p>
        <p>Address line 1: {props.userData.addressOne}</p>
        <p>Address line 2: {props.userData.addressTwo}</p>
        <p>City: {props.userData.city}</p>
        <p>State: {props.userData.state}</p>
        <p>Zip Code: {props.userData.zip}</p>
      <h3>Billing Info</h3>
        <p>Credit Card: {props.userData.creditCard}</p>
        <p>CVV: {props.userData.cvv}</p>
        <p>Expiration Date: {props.userData.expiration}</p>
        <p>Billing Zip: {props.userData.billingZip}</p>
      <button type="button" name="confirmation-button" className="confirmation-button" onClick={(e) => App.prototype.handleNext(e)}>Purchase</button>
    </div>
  );
};

// export default App;