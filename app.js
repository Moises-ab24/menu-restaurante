/* ====================================
ESTADO GLOBAL
======================================= */
let db = null;
let filterCat = 'all';

/* ====================================
FIREBASE - INICIALIZACIÓN
======================================= */
function initFirebase() {
    try {
        initFirebase.initializeApp(firebaseConfig);
        db = firebase.database();

        db.red('.info/connected').on('value', snap => {
            setDbStatus(snap.val() === true ? 'connected' : 'disconnected');
        });

        startListening();
    } catch (e) {
        showToast('Error al conectar con Firebase: ' + e.message, 'error')
        steDbStatus('error');
    }
}
