angular.module('AngularRouting', ['routingScript','ngAnimate'])
    .controller('mainController', function () {
        var mainCtrl = this;
    })
    .controller('aboutController', function () {
        var abtCtl = this;
        abtCtl.message = 'Test Page on About';
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