class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'home'
    };

    App.prototype.handleNext = App.prototype.handleNext.bind(this);
  }

  handleNext (e) {
    e.preventDefault();
    console.log(e);
    var $formData = $(e.target);
    console.log($formData.serializeArray());
    var currentPage = this.state.page;
    var nextPage;
    if (currentPage === 'home') { nextPage = 'form one'; }
    if (currentPage === 'form one') { nextPage = 'form two'; }
    if (currentPage === 'form two') { nextPage = 'form three'; }
    if (currentPage === 'form three') { nextPage = 'confirmation'; }
    if (currentPage === 'confirmation') { nextPage = 'home'; }
    this.setState({
      page: nextPage
    });
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
      return <Confirmation />;
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
  var currentPage = 'confirmation';
  return (
    <div>
      <button type="button" name="confirmation-button" className="confirmation-button" onClick={(e) => App.prototype.handleNext(e)}>Purchase</button>
    </div>
  );
};

// export default App;