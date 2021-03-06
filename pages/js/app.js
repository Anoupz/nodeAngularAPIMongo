angular.module('AngularRouting', ['routingScript', 'ngAnimate', 'userService'])
    .controller('mainController', function () {
        var mainCtrl = this;
    })
    .controller('aboutController', function (User) {
        var abtCtl = this;
        // abtCtl.message = 'Test Page on About';
        // make an API call
        /*        $http.get('http://localhost:8080/api/users')
         .then(function (response) {
         console.log(response);
         console.log(response.data);
         abtCtl.users = response.data;
         });*/

        User.all()
            .success(function (response) {
                abtCtl.users = response;
            });

    })
    .controller('homeController', function () {
        var homeCtl = this;
        homeCtl.message = 'Home Page';

        // define a list of items
        homeCtl.computers = [
            {name: 'Macbook Pro', color: 'Silver', nerdness: 7},
            {name: 'Yoga 2 Pro', color: 'Gray', nerdness: 6},
            {name: 'Windows', color: 'Black', nerdness: 5}
        ];
    })
    .controller('contactController', function () {
        var ctcCtl = this;
        // define a list of items
        ctcCtl.contacts = [
            {name: 'John', city: 'Torrance', phoneNumber: 7},
            {name: 'Julie', city: 'Torrance', phoneNumber: 6},
            {name: 'David', city: 'Bangalore', phoneNumber: 5},
            {name: 'BigShow', city: 'Chennai', phoneNumber: 8}
        ];

        ctcCtl.contactData = {};
        ctcCtl.addContacts = function () {
            ctcCtl.contacts.push({
                name: ctcCtl.contactData.name,
                city: ctcCtl.contactData.city,
                phoneNumber: ctcCtl.contactData.phoneNumber
            });
            ctcCtl.contactData = {};
        }


    });