function AppController() {
  var ctrl = this;

  ctrl.brand = {
    title: 'Placer',
    state: 'app'
  };

  ctrl.appNav = {
    places: {
      title: 'Places',
      state: 'places'
    },
    activities: {
      title: 'Activities',
      state: 'activities'
    }
  };

  ctrl.userNav = {
    signUp: {
      title: 'Sign Up'
      // state:
    },
    logIn: {
      title: 'Log In'
      // state:
    }
  };

  ctrl.filters = {
    atm: {
      title: 'ATM',
      state: 'places({type: "atm", zipcode: "07065"})'
    },
    hospital: {
      title: 'Hospital',
      state: 'places({type: "hospital", zipcode: "07065"})'
    },
    subway: {
      title: 'Subway',
      state: 'places({type: "subway_station", zipcode: "07065"})'

    }
  }
}

module.exports = AppController;
