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
    bank: {
      title: 'Bank',
      state: 'places({type: "bank", zipcode: 07065})'
    },
    bus_station: {
      title: 'Bus',
      state: 'places({type: "bus_station", zipcode: 07065})'
    },
    gas_station: {
      title: 'Gas',
      state: 'places({type: "gas_station", zipcode: 07065})'
    },
    hospital: {
      title: 'Hospital',
      state: 'places({type: "hospital", zipcode: "07065"})'
    },
    parking: {
      title: 'Parking',
      state: 'places({type: "parking", zipcode: 07065})'
    },
    police: {
      title: 'Police',
      state: 'places({type: "police", zipcode: 07065})'
    },
    subway: {
      title: 'Subway',
      state: 'places({type: "subway_station", zipcode: "07065"})'
    },
    taxi_stand: {
      title: 'Taxi',
      state: 'places({type: "taxi_stand", zipcode: 07065})'
    },
    train_station: {
      title: 'Train',
      state: 'places({type: "train_station", zipcode: 07065})'
    }
  }
}

module.exports = AppController;
