import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

  firebase.initializeApp(config);

  const database = firebase.database();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {firebase, googleAuthProvider, database as default};
  
//   database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//   });

//   database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//   });

//   database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//   });

  // database.ref('expenses')
  //   .once('value')
  //   .then((snapshot) => {
  //       const expenses = [];

  //       snapshot.forEach((childSnapshot) => {
  //           expenses.push({
  //               id: childSnapshot.key,
  //               ...childSnapshot.val()
  //           });
  //       });

  //       console.log(expenses);
  //   });

// const onValueChange = database.ref('expenses').on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error with data fetching', e);
// });

// database.ref('expenses').push({
//     description: 'Water',
//     note: '',
//     amount: 2900,
//     createdAt: moment(0).subtract(4, 'days').valueOf()
// });


//   const expenses = [{
//     description: 'Gum',
//     note: '',
//     amount: 195,
//     createdAt: 0
// }, {
//     description: 'Rent',
//     note: '',
//     amount: 109500,
//     createdAt: moment(0).subtract(4, 'days').valueOf()
// },{
//     description: 'Credit Card',
//     note: '',
//     amount: 4500,
//     createdAt: moment(0).add(4, 'days').valueOf()
// }];

// database.ref('expenses').push(expenses[0]);
// database.ref('expenses').push(expenses[1]);
// database.ref('expenses').push(expenses[2]);

//   database.ref('notes/-LSBZNC0lE9zryPl_h1h').update({
//       body: "Buy food"
//   });

//   database.ref('notes').push({
//       title: 'To Do',
//       body: 'Go for a run!'
//   });
  
//   const firebaseNotes = {
//     notes: {
//         apoijsasdf: {
//             title: 'First note!',
//             body: 'This is my note'
//         },
//         apoijasdfpoijwe: {
//             title: 'Another note!',
//             body: 'This is my note'
//         }
//     }
//   };

//   const notes = [{
//     id: '12',
//     title: 'First note!',
//     body: 'This is my note'
//   }, {
//     id: '761ase',
//     title: 'Another note!',
//     body: 'This is my note'
//   }];

//   database.ref('notes').set(notes);

// const onValueChange = database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`)
//     //console.log(snapshot.val().name, ' is a ', snapshot.val().job.title, ' at ', snapshot.val().job.company, ".");
// }, (e) => {
//     console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//     database.ref('name').set("Bobbi Henson");
// }, 3500);

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//     database.ref('age').set(45);
// }, 3500);

// setTimeout(() => {
//     database.ref().off('value', onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(60);
// }, 10500);

//   database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e);
//     });

//   database.ref().set({
//     name: 'Bobbi Henson',
//     age: 42,
//     stressLevel: 6,
//     job: {
//         title: 'Software Architect',
//         company: 'Google'
//     },
//     location: {
//         city: 'Philadelphia',
//         country: 'United States'
//     }
//   }).then(() => {
//     console.log('Data is saved');
//   }).catch((error) => {
//     console.log('This failed.', e);
//   });

// // database.ref("isSingle")
// //     .remove()
// //     .then(() => {
// //         console.log('Data is removed');
// //     })
// //     .catch((error) => {
// //         console.log('This failed.', e);
// //     });

// // database.ref("isSingle").set(null);

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });