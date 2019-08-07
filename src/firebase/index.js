import * as firebase from 'firebase'

var storage = null;
var photosRef = null;
var storageRef = null;
var photoCategoryRef = null;

var firebaseConfig = {
    apiKey: 'AIzaSyBPHctcMw8Zi7aWL93VHYv4n84QH2zLvpY',
    authDomain: 'lens-n-light.firebaseapp.com',
    databaseURL: 'https://lens-n-light.firebaseio.com',
    projectId: 'lens-n-light',
    storageBucket: 'gs://lens-n-light.appspot.com',
    messagingSenderId: '623142729883',
    appId: '1:623142729883:web:9b73126a0be9f357'
};

export const initializeFirebase = () => {
    firebase.initializeApp(firebaseConfig);
    storage = firebase.storage();
    storageRef = firebase.storage().ref();
    photosRef = firebase.firestore().collection("photos");
    photoCategoryRef = firebase.firestore().collection("photo-category");
}

export const uploadFile = (file) => {
    const fileName = file.name;
    const extension = fileName.slice(fileName.lastIndexOf("."));
    return storage
        .ref("photos/" + "aabc." + extension)
        .put(file);
}

export const getURL = (fileName) => {
    return storageRef.child(fileName).getDownloadURL();
}

export const addPhoto = (photo) => {
    return photosRef.add(photo);
}

export const addCategory = (category) => {
    return photoCategoryRef.add(category);
}

export const fetchAllPhotos = () => {
    return photosRef.get();
}

export const fetchAllCategory = () => {
    return photoCategoryRef.get();
}

export const fetchPhotosByCategory = (category) => {
    return photosRef.where("category-id", '==', category.id).get();
}