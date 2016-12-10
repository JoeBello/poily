function ActivityService () {
  var dummy = [
    {
    "geometry" : {
       "location" : {
          "lat" : -33.867217,
          "lng" : 151.195939
       }
    },
    "icon" : "http://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
    "id" : "7eaf747a3f6dc078868cd65efc8d3bc62fff77d7",
    "name" : "Biaggio Cafe - Pyrmont",
    "opening_hours" : {
       "open_now" : true
    },
    "photos" : [
       {
          "height" : 600,
          "html_attributions" : [],
          "photo_reference" : "CnRnAAAAmWmj0BqA0Jorm1_vjAvx1n6c7ZNBxyY-U9x99-oNyOxvMjDlo2npJzyIq7c3EK1YyoNXdMFDcRPzwLJtBzXAwCUFDGo_RtLRGBPJTA2CoerPdC5yvT2SjfDwH4bFf5MrznB0_YWa4Y2Qo7ABtAxgeBIQv46sGBwVNJQDI36Wd3PFYBoUTlVXa0wn-zRITjGp0zLEBh8oIBE",
          "width" : 900
       }
    ],
    "place_id" : "ChIJIfBAsjeuEmsRdgu9Pl1Ps48",
    "scope" : "GOOGLE",
    "price_level" : 1,
    "rating" : 3.4,
    "reference" : "CoQBeAAAAGu0wNJjuZ40DMrRe3mpn7fhlfIK1mf_ce5hgkhfM79u-lqy0G2mnmcueTq2JGWu9wsgS1ctZDHTY_pcqFFJyQNV2P-kdhoRIeYRHeDfbWtIwr3RgFf2zzFBXHgNjSq-PSzX_OU6OT2_3dzdhhpV-bPezomtrarW4DsGl9uh773yEhDJT6R3V8Fyvl_xeE761DTCGhT1jJ3floFI5_c-bHgGLVwH1g-cbQ",
    "types" : [ "cafe", "bar", "restaurant", "food", "establishment" ],
    "vicinity" : "48 Pirrama Rd, Pyrmont"
    }
  ];

  return {
    getActivityList: function () {
      return dummy;
    },
    addActivity: function (activity) {
      dummy.push(activity);
    }
  }
}

angular
  .module('components.activity')
  .service('ActivityService', ActivityService);
